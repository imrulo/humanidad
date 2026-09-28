import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Scores } from "../data/axes";
import { AXES } from "../data/axes";
import { QUESTIONS, QUESTIONS_BY_AXIS, type Question } from "../data/questions";
import { computeScores } from "../lib/score";
import { getSessionSeed, seededShuffle, clearSessionSeed } from "../lib/hash";
import { buildResultUrl } from "../lib/url";

export type QuizMode = "short" | "standard" | "deep";

const QUESTIONS_PER_AXIS: Record<QuizMode, number> = {
  short: 3,
  standard: 5,
  deep: 10,
};

export const MODE_QUESTIONS: Record<QuizMode, number> = {
  short: 36,
  standard: 60,
  deep: 120,
};

const DRAFT_KEY = "humani.quiz.draft";

interface DraftState {
  mode: QuizMode;
  order: string[];
  answers: Record<string, number>;
  currentIndex: number;
  seed: number;
  skips: number;
}

const MAX_SKIP_RATIO = 0.15;

interface QuizState {
  draft: DraftState | null;
  startQuiz: (mode: QuizMode) => void;
  answer: (questionId: string, value: number) => void;
  skip: (questionId: string) => void;
  goBack: () => void;
  goTo: (index: number) => void;
  next: () => void;
  finish: () => { url: string; scores: Scores };
  clearDraft: () => void;
  hasDraft: () => boolean;
}

function buildOrder(mode: QuizMode, seed: number): string[] {
  const perAxis = QUESTIONS_PER_AXIS[mode];
  const selected: Question[] = [];

  for (const axis of AXES) {
    const pool = QUESTIONS_BY_AXIS[axis.id];
    const shuffled = seededShuffle(pool, seed + axis.id.length * 31);
    selected.push(...shuffled.slice(0, perAxis));
  }

  return seededShuffle(selected, seed).map((q) => q.id);
}

function loadDraft(): DraftState | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DraftState;
    if (!parsed.mode || !Array.isArray(parsed.order) || parsed.order.length === 0) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function saveDraft(draft: DraftState | null): void {
  try {
    if (draft) {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } else {
      localStorage.removeItem(DRAFT_KEY);
    }
  } catch {
    // localStorage no disponible: el quiz sigue funcionando en memoria.
  }
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      draft: loadDraft(),

      startQuiz: (mode) => {
        const seed = getSessionSeed();
        const order = buildOrder(mode, seed);
        const draft: DraftState = {
          mode,
          order,
          answers: {},
          currentIndex: 0,
          seed,
          skips: 0,
        };
        set({ draft });
        saveDraft(draft);
      },

      answer: (questionId, value) => {
        const { draft } = get();
        if (!draft) return;
        const answers = { ...draft.answers, [questionId]: value };
        const next = { ...draft, answers };
        set({ draft: next });
        saveDraft(next);
      },

      skip: (questionId) => {
        const { draft } = get();
        if (!draft) return;
        // Skip cuenta como 50 (neutral) y se contabiliza para el límite.
        const answers = { ...draft.answers, [questionId]: 50 };
        const skips = draft.skips + 1;
        const next = { ...draft, answers, skips };
        set({ draft: next });
        saveDraft(next);
      },

      goBack: () => {
        const { draft } = get();
        if (!draft || draft.currentIndex === 0) return;
        const next = { ...draft, currentIndex: draft.currentIndex - 1 };
        set({ draft: next });
        saveDraft(next);
      },

      goTo: (index) => {
        const { draft } = get();
        if (!draft) return;
        const clamped = Math.max(0, Math.min(draft.order.length - 1, index));
        const next = { ...draft, currentIndex: clamped };
        set({ draft: next });
        saveDraft(next);
      },

      next: () => {
        const { draft } = get();
        if (!draft) return;
        const nextIndex = Math.min(draft.currentIndex + 1, draft.order.length - 1);
        const next = { ...draft, currentIndex: nextIndex };
        set({ draft: next });
        saveDraft(next);
      },

      finish: () => {
        const { draft } = get();
        if (!draft) throw new Error("No active quiz");

        const questions = draft.order
          .map((id) => QUESTIONS.find((q) => q.id === id))
          .filter((q): q is Question => q !== undefined);

        const scores = computeScores(questions, draft.answers);
        const url = buildResultUrl(scores, "es");
        clearSessionSeed();
        set({ draft: null });
        saveDraft(null);
        return { url, scores };
      },

      clearDraft: () => {
        set({ draft: null });
        saveDraft(null);
      },

      hasDraft: () => get().draft !== null,
    }),
    {
      name: "humani-quiz-store",
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);

/** Verifica si el usuario ha excedido el límite de skips (15% del total). */
export function skipLimitExceeded(skips: number, total: number): boolean {
  if (total === 0) return false;
  return skips / total > MAX_SKIP_RATIO;
}

/** Cuántos skips más puede usar el usuario. */
export function remainingSkips(skips: number, total: number): number {
  const max = Math.floor(total * MAX_SKIP_RATIO);
  return Math.max(0, max - skips);
}
