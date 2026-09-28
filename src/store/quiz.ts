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
const DUELO_KEY = "humani.quiz.duelo";

interface DraftState {
  mode: QuizMode;
  order: string[];
  answers: Record<string, number>;
  currentIndex: number;
  seed: number;
  skips: number;
  dueloPayload: string | null;
}

interface QuizState {
  draft: DraftState | null;
  startQuiz: (mode: QuizMode, dueloPayload?: string | null) => void;
  answer: (questionId: string, value: number) => void;
  skip: (questionId: string) => void;
  goBack: () => void;
  goTo: (index: number) => void;
  next: () => void;
  finish: () => { url: string; scores: Scores };
  clearDraft: () => void;
  hasDraft: () => boolean;
}

/**
 * Modo short: set CANÓNICO y orden fijo.
 * Toma las 3 primeras preguntas de cada eje por id estable (no seededShuffle).
 * Standard y deep: orden aleatorio con semilla de sesión.
 */
function buildOrder(mode: QuizMode, seed: number): string[] {
  const perAxis = QUESTIONS_PER_AXIS[mode];
  const selected: Question[] = [];

  for (const axis of AXES) {
    const pool = QUESTIONS_BY_AXIS[axis.id];
    if (mode === "short") {
      // Canónico: primeras 3 por id estable.
      const canonical = [...pool].sort((a, b) => a.id.localeCompare(b.id));
      selected.push(...canonical.slice(0, perAxis));
    } else {
      const shuffled = seededShuffle(pool, seed + axis.id.length * 31);
      selected.push(...shuffled.slice(0, perAxis));
    }
  }

  if (mode === "short") {
    // Orden fijo por eje (ya viene en orden de AXES).
    return selected.map((q) => q.id);
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

export function getDueloPayload(): string | null {
  try {
    return sessionStorage.getItem(DUELO_KEY);
  } catch {
    return null;
  }
}

export function setDueloPayload(payload: string | null): void {
  try {
    if (payload) {
      sessionStorage.setItem(DUELO_KEY, payload);
    } else {
      sessionStorage.removeItem(DUELO_KEY);
    }
  } catch {
    // Ignorar.
  }
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      draft: loadDraft(),

      startQuiz: (mode, dueloPayload = null) => {
        const seed = getSessionSeed();
        const order = buildOrder(mode, seed);
        const draft: DraftState = {
          mode,
          order,
          answers: {},
          currentIndex: 0,
          seed,
          skips: 0,
          dueloPayload,
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

const MAX_SKIP_RATIO = 0.15;

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
