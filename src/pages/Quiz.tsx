import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, HelpCircle, RotateCcw } from "lucide-react";
import { useI18n } from "../i18n";
import { AXIS_MAP } from "../data/axes";
import { QUESTIONS } from "../data/questions";
import { useQuizStore, skipLimitExceeded, remainingSkips, MODE_QUESTIONS } from "../store/quiz";
import { ANSWER_KEYS } from "../lib/score";
import { computeScores } from "../lib/score";
import { buildResultUrl } from "../lib/url";
import { ProgressBar } from "../components/ProgressBar";

const SERIOUS_QUESTION_RATIO = 0.5; // A mitad del test

export function Quiz() {
  const { copy, lang } = useI18n();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const store = useQuizStore();

  const [mode, setMode] = useState<"choose" | "running">("choose");
  const [showSerious, setShowSerious] = useState(false);
  const [skipWarned, setSkipWarned] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const draft = store.draft;

  // Si venimos de /quiz?modo=short, empezar automáticamente.
  useEffect(() => {
    const m = searchParams.get("modo");
    if (m === "short" || m === "standard" || m === "deep") {
      store.startQuiz(m);
      setMode("running");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Si ya hay borrador, ir directo a running.
  useEffect(() => {
    if (draft && mode === "choose") {
      setMode("running");
    }
  }, [draft, mode]);

  const questions = useMemo(() => {
    if (!draft) return [];
    return draft.order
      .map((id) => QUESTIONS.find((q) => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined);
  }, [draft]);

  const currentIndex = draft?.currentIndex ?? 0;
  const currentQuestion = questions[currentIndex];
  const total = draft?.order.length ?? 0;
  const answeredCount = draft ? Object.keys(draft.answers).length : 0;
  const progress = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  const isSeriousPoint = draft
    ? currentIndex === Math.floor(total * SERIOUS_QUESTION_RATIO)
    : false;

  const skips = draft?.skips ?? 0;
  const limitExceeded = draft ? skipLimitExceeded(skips, total) : false;
  const remaining = draft ? remainingSkips(skips, total) : 0;

  function handleAnswer(value: number) {
    if (!draft || !currentQuestion) return;
    store.answer(currentQuestion.id, value);
    setSkipWarned(false);

    if (isSeriousPoint && !showSerious) {
      setShowSerious(true);
      return;
    }

    advance();
  }

  function advance() {
    if (currentIndex < total - 1) {
      store.next();
    } else {
      finishQuiz();
    }
  }

  function handleSkip() {
    if (!draft || !currentQuestion) return;
    if (limitExceeded) return;
    store.skip(currentQuestion.id);
    setSkipWarned(true);

    if (currentIndex < total - 1) {
      store.next();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    if (!draft) return;
    const scores = computeScores(questions, draft.answers);
    const url = buildResultUrl(scores, lang);
    navigate(url, { replace: true });
  }

  function handleStart(m: "short" | "standard" | "deep") {
    store.startQuiz(m);
    setMode("running");
  }

  function handleRestart() {
    store.clearDraft();
    setMode("choose");
    setShowSerious(false);
  }

  // Vista de elección de modo.
  if (mode === "choose") {
    const hasDraft = draft !== null;
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <header className="mb-10 text-center">
          <h1 className="font-serif text-3xl font-black md:text-4xl">{copy.quiz.chooseMode}</h1>
          <p className="mt-3 text-ink/60 dark:text-ink-dark/60">
            {MODE_QUESTIONS.short} / {MODE_QUESTIONS.standard} / {MODE_QUESTIONS.deep} preguntas.
          </p>
        </header>

        {hasDraft && (
          <div className="mb-8 rounded-2xl border border-accent/40 bg-accent/10 p-6 text-center dark:border-accent-dark/40 dark:bg-accent-dark/10">
            <p className="mb-3 font-bold">{copy.quiz.draftSaved}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setMode("running")}
                className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-paper dark:bg-ink-dark dark:text-paper-dark"
              >
                {copy.quiz.continue}
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-1 rounded-full border border-ink/20 px-5 py-2 text-sm font-bold dark:border-ink-dark/20"
              >
                <RotateCcw size={14} />
                {copy.quiz.restart}
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {(["short", "standard", "deep"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => handleStart(m)}
              className="group flex items-center justify-between rounded-2xl border border-ink/15 p-6 text-left transition-all hover:border-accent hover:shadow-lg dark:border-ink-dark/15 dark:hover:border-accent-dark"
            >
              <div>
                <div className="font-serif text-xl font-bold">
                  {m === "short" ? copy.quiz.modeShort : m === "standard" ? copy.quiz.modeStandard : copy.quiz.modeDeep}
                </div>
              </div>
              <ArrowRight size={20} className="text-ink/30 transition-transform group-hover:translate-x-1 dark:text-ink-dark/30" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Vista de pregunta.
  if (!draft || !currentQuestion) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-ink/60 dark:text-ink-dark/60">Cargando…</p>
      </div>
    );
  }

  const axis = AXIS_MAP[currentQuestion.axis];
  const answerLabels = copy.quiz.answers;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Progreso */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-ink/60 dark:text-ink-dark/60">
          <span>{copy.quiz.questionOf.replace("{current}", String(currentIndex + 1)).replace("{total}", String(total))}</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar current={answeredCount} total={total} />
      </div>

      {/* Tarjeta de pregunta */}
      <div
        ref={cardRef}
        className="animate-fade-up rounded-2xl border border-ink/15 p-6 md:p-8 dark:border-ink-dark/15"
        key={currentQuestion.id}
      >
        <div className="mb-4 flex items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-bold"
            style={{ backgroundColor: axis.color, color: "#1c1a15" }}
          >
            {axis.shortLabel}
          </span>
        </div>

        <h2 className="mb-8 font-serif text-2xl font-bold leading-snug md:text-3xl">
          {currentQuestion.text[lang]}
        </h2>

        {/* Respuestas */}
        <div className="flex flex-col gap-3" role="radiogroup" aria-label={currentQuestion.text[lang]}>
          {ANSWER_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleAnswer(key === "strongA" ? 0 : key === "a" ? 25 : key === "neutral" ? 50 : key === "b" ? 75 : 100)}
              className="rounded-xl border border-ink/15 px-5 py-3 text-left font-medium transition-all hover:border-accent hover:bg-accent/5 dark:border-ink-dark/15 dark:hover:border-accent-dark dark:hover:bg-accent-dark/5"
            >
              {answerLabels[key]}
            </button>
          ))}
        </div>

        {/* Skip */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={handleSkip}
            disabled={limitExceeded}
            className="inline-flex items-center gap-1 text-sm text-ink/50 hover:text-ink disabled:opacity-30 dark:text-ink-dark/50 dark:hover:text-ink-dark"
          >
            <HelpCircle size={14} />
            {copy.quiz.skip}
            {!limitExceeded && (
              <span className="text-xs opacity-60">({remaining})</span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={store.goBack}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-ink/60 hover:text-ink disabled:opacity-30 dark:text-ink-dark/60 dark:hover:text-ink-dark"
            >
              <ArrowLeft size={14} />
              {copy.quiz.back}
            </button>
          </div>
        </div>

        {skipWarned && !limitExceeded && (
          <p className="mt-3 text-xs text-accent dark:text-accent-dark">{copy.quiz.skipWarning}</p>
        )}
      </div>

      {/* Pregunta de seriedad */}
      {showSerious && (
        <div className="mt-6 rounded-2xl border border-ink/15 p-6 dark:border-ink-dark/15" role="dialog" aria-modal="true" aria-labelledby="serious-heading">
          <h3 id="serious-heading" className="mb-2 font-serif text-lg font-bold">
            {copy.quiz.seriousQuestion}
          </h3>
          <p className="mb-4 text-sm text-ink/60 dark:text-ink-dark/60">{copy.quiz.seriousNote}</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setShowSerious(false);
                advance();
              }}
              className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-paper dark:bg-ink-dark dark:text-paper-dark"
            >
              {copy.quiz.seriousYes}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowSerious(false);
                advance();
              }}
              className="rounded-full border border-ink/20 px-5 py-2 text-sm font-bold dark:border-ink-dark/20"
            >
              {copy.quiz.seriousNo}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
