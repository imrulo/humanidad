import { useState, useEffect } from "react";
import { GitCompare } from "lucide-react";
import { useI18n } from "../i18n";
import { AXES, type Scores } from "../data/axes";
import { decodeScores } from "../lib/url";
import { MAX_DISTANCE } from "../lib/match";
import { ProgressBar } from "../components/ProgressBar";

function parseInput(input: string): Scores | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Si es una URL, extraer el payload.
  const urlMatch = /\/r\/([^/?#]+)/.exec(trimmed);
  if (urlMatch) {
    const decoded = decodeScores(urlMatch[1]);
    if (decoded) return decoded.scores;
  }

  // Si es un payload directo.
  const payloadMatch = /^(v1\.[0-9a-z]{12}\.[a-z]{2})$/i.exec(trimmed);
  if (payloadMatch) {
    const decoded = decodeScores(payloadMatch[1]);
    if (decoded) return decoded.scores;
  }

  // Si es un query string.
  if (trimmed.startsWith("?")) {
    const params = new URLSearchParams(trimmed.slice(1));
    const scores = {} as Scores;
    let found = false;
    for (const axis of AXES) {
      const val = params.get(axis.id);
      if (val !== null) {
        const num = Number(val);
        if (!Number.isNaN(num)) {
          scores[axis.id] = Math.max(0, Math.min(100, Math.round(num)));
          found = true;
        }
      }
    }
    if (found) return scores;
  }

  return null;
}

export function Compare() {
  const { copy } = useI18n();
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [scoresA, setScoresA] = useState<Scores | null>(null);
  const [scoresB, setScoresB] = useState<Scores | null>(null);
  const [error, setError] = useState(false);

  // Leer query params ?a= y ?b=.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const a = params.get("a");
    const b = params.get("b");

    if (a) {
      const decoded = parseInput(a);
      if (decoded) {
        setScoresA(decoded);
        setInputA(a);
      }
    }
    if (b) {
      const decoded = parseInput(b);
      if (decoded) {
        setScoresB(decoded);
        setInputB(b);
      }
    }
  }, []);

  function handleCompare() {
    const a = parseInput(inputA);
    const b = parseInput(inputB);
    if (!a || !b) {
      setError(true);
      setScoresA(null);
      setScoresB(null);
      return;
    }
    setError(false);
    setScoresA(a);
    setScoresB(b);
  }

  const distance =
    scoresA && scoresB
      ? Math.sqrt(
          AXES.reduce((sum, axis) => {
            const diff = (scoresA[axis.id] ?? 50) - (scoresB[axis.id] ?? 50);
            return sum + diff * diff;
          }, 0),
        )
      : 0;
  const compatibility =
    scoresA && scoresB ? Math.round(100 * (1 - distance / MAX_DISTANCE)) : 0;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-black md:text-5xl">{copy.compare.title}</h1>
        <p className="mt-4 text-lg text-ink/70 dark:text-ink-dark/70">{copy.compare.subtitle}</p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="compare-a" className="mb-2 block font-bold">
            {copy.compare.labelA}
          </label>
          <textarea
            id="compare-a"
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
            placeholder={copy.compare.placeholder}
            rows={3}
            className="w-full rounded-xl border border-ink/15 bg-transparent p-3 text-sm dark:border-ink-dark/15"
          />
        </div>
        <div>
          <label htmlFor="compare-b" className="mb-2 block font-bold">
            {copy.compare.labelB}
          </label>
          <textarea
            id="compare-b"
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
            placeholder={copy.compare.placeholder}
            rows={3}
            className="w-full rounded-xl border border-ink/15 bg-transparent p-3 text-sm dark:border-ink-dark/15"
          />
        </div>
      </div>

      <div className="mb-8 text-center">
        <button
          type="button"
          onClick={handleCompare}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-paper transition-transform hover:scale-105 dark:bg-ink-dark dark:text-paper-dark"
        >
          <GitCompare size={18} />
          {copy.compare.compare}
        </button>
      </div>

      {error && (
        <p className="mb-8 rounded-xl border border-red-300 bg-red-50 p-4 text-center text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          {copy.compare.error}
        </p>
      )}

      {scoresA && scoresB && (
        <div className="animate-fade-up">
          <div className="mb-6 text-center">
            <span className="font-serif text-5xl font-black text-accent dark:text-accent-dark">
              {compatibility}%
            </span>
            <p className="mt-1 text-sm text-ink/60 dark:text-ink-dark/60">
              {copy.compare.compatibility}
            </p>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-ink/15 p-6 dark:border-ink-dark/15">
            {AXES.map((axis) => {
              const a = scoresA[axis.id];
              const b = scoresB[axis.id];
              return (
                <div key={axis.id}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-ink/70 dark:text-ink-dark/70">
                      {axis.shortLabel}
                    </span>
                    <span className="font-bold text-ink/50 dark:text-ink-dark/50">
                      A:{a} · B:{b}
                    </span>
                  </div>
                  <div className="relative">
                    <ProgressBar current={a} total={100} />
                    <div className="absolute -top-0.5 left-0 h-2.5 w-full">
                      <div
                        className="absolute top-0 h-full w-0.5 bg-paper dark:bg-paper-dark"
                        style={{ left: `${b}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex justify-center gap-6 text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" /> A
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-0.5 bg-paper dark:bg-paper-dark" /> B
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
