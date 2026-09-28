import { forwardRef } from "react";
import type { Scores } from "../data/axes";
import { AXES } from "../data/axes";
import type { MatchResult } from "../lib/match";
import { useI18n } from "../i18n";

interface ResultCardProps {
  scores: Scores;
  match: MatchResult;
  width?: number;
}

/**
 * Tarjeta de resultado compartible (ratio 1080x1350, 4:5).
 * Diseñada para leerse en el feed de X.
 */
export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  function ResultCard({ scores, match, width = 1080 }, ref) {
    const { copy, lang } = useI18n();
    const { topIdeology, topPerson, topArchetype } = match;

    return (
      <div
        ref={ref}
        className="result-card"
        style={{
          width,
          aspectRatio: "4 / 5",
          backgroundColor: "#1c1a15",
          color: "#f5f0e8",
          padding: width * 0.05,
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Atkinson Hyperlegible', system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: width * 0.028, fontWeight: 700, letterSpacing: "0.08em" }}>
            humani.dad
          </span>
          <span style={{ fontSize: width * 0.02, opacity: 0.6 }}>4:5</span>
        </div>

        {/* Perfil */}
        <div style={{ marginTop: width * 0.04 }}>
          <div style={{ fontSize: width * 0.02, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {lang === "es" ? "Tu perfil" : "Your profile"}
          </div>
          <div style={{ fontSize: width * 0.055, fontWeight: 700, lineHeight: 1.1, marginTop: width * 0.008 }}>
            {topIdeology.item.name[lang]}
          </div>
          <div style={{ fontSize: width * 0.028, color: "#a8b06a", marginTop: width * 0.008 }}>
            {topIdeology.compatibility}% {copy.results.compatibility}
          </div>
        </div>

        {/* Persona compatible */}
        <div style={{ marginTop: width * 0.035, display: "flex", alignItems: "center", gap: width * 0.02 }}>
          <div
            style={{
              width: width * 0.07,
              height: width * 0.07,
              borderRadius: "50%",
              backgroundColor: topPerson.item.tint,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: width * 0.03,
              fontWeight: 700,
              color: "#1c1a15",
              flexShrink: 0,
            }}
          >
            {topPerson.item.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: width * 0.026, fontWeight: 600 }}>{topPerson.item.name}</div>
            <div style={{ fontSize: width * 0.018, opacity: 0.6 }}>{topPerson.item.occupation[lang]}</div>
          </div>
        </div>

        {/* 12 ejes */}
        <div style={{ marginTop: width * 0.035, display: "flex", flexDirection: "column", gap: width * 0.008, flex: 1 }}>
          {AXES.map((axis) => {
            const value = scores[axis.id];
            return (
              <div key={axis.id} style={{ display: "flex", alignItems: "center", gap: width * 0.012 }}>
                <span style={{ fontSize: width * 0.014, opacity: 0.5, width: width * 0.05, textAlign: "right" }}>
                  {axis.poleA}
                </span>
                <div style={{ flex: 1, height: width * 0.008, borderRadius: 9999, backgroundColor: "rgba(245,240,232,0.15)", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${value}%`,
                      backgroundColor: axis.color,
                      borderRadius: 9999,
                    }}
                  />
                </div>
                <span style={{ fontSize: width * 0.014, opacity: 0.5, width: width * 0.05 }}>
                  {axis.poleB}
                </span>
              </div>
            );
          })}
        </div>

        {/* Arquetipo */}
        <div style={{ marginTop: width * 0.03, paddingTop: width * 0.02, borderTop: "1px solid rgba(245,240,232,0.15)" }}>
          <div style={{ fontSize: width * 0.016, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {copy.results.archetype}
          </div>
          <div style={{ fontSize: width * 0.026, fontWeight: 600 }}>{topArchetype.item.name[lang]}</div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: width * 0.025, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: width * 0.022, fontWeight: 700 }}>humani.dad</span>
          <span style={{ fontSize: width * 0.014, opacity: 0.4 }}>gratis · sin vigilancia · sin servidor</span>
        </div>
      </div>
    );
  },
);
