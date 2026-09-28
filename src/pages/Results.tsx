import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { Download, Copy, Check, Share2, RotateCcw, Swords, ArrowDownWideNarrow } from "lucide-react";
import { useI18n, persistLang } from "../i18n";
import { AXES, AXIS_MAP, type Scores, type Lang } from "../data/axes";
import { decodeScores, decodeQueryParams } from "../lib/url";
import { computeMatches } from "../lib/match";
import { exportCardAsPng, downloadBlob, cardFilename } from "../lib/card";
import { AxisBar } from "../components/AxisBar";
import { Monogram } from "../components/Monogram";
import { ResultCard } from "../components/ResultCard";

export function Results({ embed = false }: { embed?: boolean }) {
  const { payload } = useParams<{ payload: string }>();
  const [searchParams] = useSearchParams();
  const { copy, lang, setLang } = useI18n();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Decodificar scores de la URL.
  const result = useMemo(() => {
    if (payload) {
      const decoded = decodeScores(payload);
      if (decoded) return decoded;
    }
    const fromQuery = decodeQueryParams(searchParams.toString());
    if (fromQuery) return { scores: fromQuery, lang: "es" as const };
    return null;
  }, [payload, searchParams]);

  const scores: Scores | null = result?.scores ?? null;

  // Aplicar idioma de la URL.
  useEffect(() => {
    if (result?.lang && result.lang !== lang) {
      setLang(result.lang as Lang);
      persistLang(result.lang as Lang);
    }
  }, [result?.lang, lang, setLang]);

  const matches = useMemo(() => (scores ? computeMatches(scores) : null), [scores]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current || !matches || !scores) return;
    setDownloading(true);
    try {
      const blob = await exportCardAsPng(cardRef.current, { pixelRatio: 2 });
      if (blob) {
        downloadBlob(blob, cardFilename(scores, matches.topIdeology.item.name[lang]));
      }
    } finally {
      setDownloading(false);
    }
  }, [matches, scores, lang]);

  const handleShare = useCallback(async () => {
    if (!matches) return;
    const text = copy.results.shareText.replace("{ideologia}", matches.topIdeology.item.name[lang]);
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: "humani.dad", text, url });
        return;
      } catch {
        // Usuario canceló o no disponible: fallback a copiar.
      }
    }
    await handleCopy();
  }, [matches, copy.results.shareText, lang, handleCopy]);

  const handleShareX = useCallback(() => {
    if (!matches) return;
    const text = encodeURIComponent(
      copy.results.shareText.replace("{ideologia}", matches.topIdeology.item.name[lang]),
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener");
  }, [matches, copy.results.shareText, lang]);

  const handleRetar = useCallback(async () => {
    if (!payload) return;
    const dueloUrl = `${window.location.origin}/quiz?duelo=${payload}`;
    const text = copy.results.shareText.replace(
      "{ideologia}",
      matches?.topIdeology.item.name[lang] ?? "",
    );

    if (navigator.share) {
      try {
        await navigator.share({ title: "humani.dad", text, url: dueloUrl });
        return;
      } catch {
        // Fallback.
      }
    }
    try {
      await navigator.clipboard.writeText(dueloUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignorar.
    }
  }, [payload, matches, copy.results.shareText, lang]);

  // Estado inválido.
  if (!scores || !matches) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="mb-4 font-serif text-3xl font-black">{copy.results.invalidTitle}</h1>
        <p className="mb-8 text-ink/60 dark:text-ink-dark/60">{copy.results.invalidText}</p>
        <Link
          to="/quiz"
          className="rounded-full bg-ink px-6 py-3 font-bold text-paper dark:bg-ink-dark dark:text-paper-dark"
        >
          {copy.results.invalidCta}
        </Link>
      </div>
    );
  }

  const {
    topIdeology,
    topIdeologies,
    topArchetype,
    topPerson,
    topPeople,
    weirdestAxis,
    typicalAxis,
    family,
  } = matches;

  const weirdAxisData = AXIS_MAP[weirdestAxis.axis];
  const typicalAxisData = AXIS_MAP[typicalAxis.axis];

  return (
    <div className={embed ? "" : "mx-auto max-w-3xl px-4 py-8"}>
      {/* Tarjeta para exportar (oculta en embed) */}
      {!embed && (
        <div className="fixed -left-[9999px] top-0" aria-hidden="true">
          <ResultCard ref={cardRef} scores={scores} match={matches} width={1080} />
        </div>
      )}

      {/* Header del resultado: arriba del fold */}
      <header className="animate-fade-up mb-6 text-center">
        <div className="mb-2 text-sm font-bold uppercase tracking-widest text-ink/50 dark:text-ink-dark/50">
          {copy.results.family}: {family}
        </div>
        <h1 className="font-serif text-4xl font-black md:text-5xl">{topIdeology.item.name[lang]}</h1>
        <p className="mt-2 text-lg text-ink/60 dark:text-ink-dark/60">
          <span className="font-bold text-accent dark:text-accent-dark">{topIdeology.compatibility}%</span>{" "}
          {copy.results.compatibility} {copy.results.withIdeology} {topIdeology.item.name[lang]}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">
          {topIdeology.item.summary[lang]}
        </p>
      </header>

      {/* Persona compatible + arquetipo */}
      <section className="animate-fade-up mb-6 flex flex-col gap-4 rounded-2xl border border-ink/15 p-6 dark:border-ink-dark/15" style={{ animationDelay: "60ms" }}>
        <div className="flex items-center gap-4">
          <Monogram name={topPerson.item.name} size={64} tint={topPerson.item.tint} />
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink/50 dark:text-ink-dark/50">
              {copy.results.people} · {topPerson.compatibility}%
            </div>
            <h2 className="font-serif text-xl font-bold">{topPerson.item.name}</h2>
            <p className="text-sm text-ink/60 dark:text-ink-dark/60">{topPerson.item.occupation[lang]}</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3 dark:bg-ink-dark/5">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-ink/50 dark:text-ink-dark/50">
              {copy.results.archetype}
            </div>
            <div className="font-bold">{topArchetype.item.name[lang]}</div>
          </div>
          <span className="font-bold text-accent dark:text-accent-dark">{topArchetype.compatibility}%</span>
        </div>
        <p className="text-xs italic text-ink/40 dark:text-ink-dark/40">{copy.results.archetypeNote}</p>
      </section>

      {/* Lo que te hace raro */}
      <section className="animate-fade-up mb-6 rounded-2xl border border-accent/40 bg-accent/10 p-6 dark:border-accent-dark/40 dark:bg-accent-dark/10" style={{ animationDelay: "120ms" }}>
        <h3 className="mb-2 font-serif text-lg font-bold">{copy.results.weirdAxis}</h3>
        <p className="text-sm text-ink/70 dark:text-ink-dark/70">
          {copy.results.weirdText
            .replace("{axis}", weirdAxisData.shortLabel)
            .replace("{delta}", String(weirdestAxis.delta))}
        </p>
      </section>

      {/* Lo más típico */}
      <section className="animate-fade-up mb-6 rounded-2xl border border-ink/15 p-6 dark:border-ink-dark/15" style={{ animationDelay: "180ms" }}>
        <h3 className="mb-2 font-serif text-lg font-bold">{copy.results.typicalAxis}</h3>
        <p className="text-sm text-ink/70 dark:text-ink-dark/70">
          {copy.results.typicalText
            .replace("{axis}", typicalAxisData.shortLabel)
            .replace("{delta}", String(typicalAxis.delta))}
        </p>
      </section>

      {/* 12 ejes en details */}
      <details className="animate-fade-up mb-6 rounded-2xl border border-ink/15 dark:border-ink-dark/15" style={{ animationDelay: "240ms" }}>
        <summary className="cursor-pointer p-6 font-serif text-xl font-bold">
          {copy.results.verEjes}
        </summary>
        <div className="flex flex-col gap-4 px-6 pb-6">
          {AXES.map((axis) => (
            <AxisBar key={axis.id} axis={axis} value={scores[axis.id]} />
          ))}
        </div>
      </details>

      {/* Ideologías cercanas */}
      <section className="animate-fade-up mb-6 rounded-2xl border border-ink/15 p-6 dark:border-ink-dark/15" style={{ animationDelay: "300ms" }}>
        <h2 className="mb-4 font-serif text-xl font-bold">{copy.results.ideologies}</h2>
        <div className="flex flex-col gap-3">
          {topIdeologies.map((entry) => (
            <div key={entry.item.id} className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3 dark:bg-ink-dark/5">
              <div>
                <div className="font-bold">{entry.item.name[lang]}</div>
                <div className="text-xs text-ink/50 dark:text-ink-dark/50">{entry.item.family}</div>
              </div>
              <span className="font-bold text-accent dark:text-accent-dark">{entry.compatibility}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Personas cercanas */}
      <section className="animate-fade-up mb-6 rounded-2xl border border-ink/15 p-6 dark:border-ink-dark/15" style={{ animationDelay: "360ms" }}>
        <h2 className="mb-4 font-serif text-xl font-bold">{copy.results.people}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {topPeople.map((entry) => (
            <div key={entry.item.id} className="rounded-xl bg-ink/5 p-4 text-center dark:bg-ink-dark/5">
              <Monogram name={entry.item.name} size={48} tint={entry.item.tint} />
              <div className="mt-2 font-bold">{entry.item.name}</div>
              <div className="text-xs text-ink/50 dark:text-ink-dark/50">{entry.item.occupation[lang]}</div>
              <div className="mt-1 text-sm font-bold text-accent dark:text-accent-dark">{entry.compatibility}%</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ir más hondo */}
      {!embed && (
        <div className="animate-fade-up mb-6 text-center" style={{ animationDelay: "420ms" }}>
          <Link
            to="/quiz?modo=standard"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-6 py-3 font-bold transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
          >
            <ArrowDownWideNarrow size={18} />
            {copy.results.irMasHondo}
          </Link>
        </div>
      )}

      {/* Acciones sticky en móvil */}
      {!embed && (
        <div
          className="animate-fade-up sticky bottom-0 z-30 -mx-4 mt-6 border-t border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur-sm pb-[max(0.75rem,env(safe-area-inset-bottom))] dark:border-ink-dark/10 dark:bg-paper-dark/95"
          style={{ animationDelay: "480ms" }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper transition-transform hover:scale-105 dark:bg-ink-dark dark:text-paper-dark"
            >
              <Share2 size={16} />
              {copy.results.share}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-bold transition-colors hover:border-ink/40 disabled:opacity-50 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
            >
              <Download size={16} />
              {downloading ? "…" : copy.results.download}
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-bold transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? copy.results.copied : copy.results.copyLink}
            </button>
            <button
              type="button"
              onClick={handleShareX}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-bold transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
            >
              <Share2 size={16} />
              {copy.results.shareX}
            </button>
            <button
              type="button"
              onClick={handleRetar}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-bold transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
            >
              <Swords size={16} />
              {copy.results.retar}
            </button>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-bold transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
            >
              <RotateCcw size={16} />
              {copy.results.repeat}
            </Link>
          </div>
        </div>
      )}

      {/* Link a embed */}
      {!embed && (
        <p className="pb-8 text-center text-xs text-ink/40 dark:text-ink-dark/40">
          <Link to={`/embed/r/${payload}`} className="underline hover:text-ink dark:hover:text-ink-dark">
            {copy.results.embed}
          </Link>
        </p>
      )}
    </div>
  );
}
