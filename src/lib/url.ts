import type { Scores } from "../data/axes";
import { AXES } from "../data/axes";

/**
 * URL compartible sin servidor.
 *
 * Formato compacto y versionado: /r/v1.<12 dígitos base36>.<lang>
 * Cada eje se codifica como un dígito base36 (0-9, a-z) que representa
 * el valor 0-100 escalado a 0-35 (valor / 100 * 35, redondeado).
 *
 * También aceptamos el query clásico por compatibilidad:
 * /r?h=70&a=65&d=80&...
 */

const VERSION = "v1";
const BASE36 = "0123456789abcdefghijklmnopqrstuvwxyz";

function toBase36(value: number): string {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  const scaled = Math.round((clamped / 100) * 35);
  return BASE36[scaled];
}

function fromBase36(char: string): number | null {
  const idx = BASE36.indexOf(char.toLowerCase());
  if (idx < 0) return null;
  return Math.round((idx / 35) * 100);
}

/** Codifica los 12 ejes en un payload compacto: v1.<12 chars>.<lang> */
export function encodeScores(scores: Scores, lang: string): string {
  const digits = AXES.map((axis) => toBase36(scores[axis.id] ?? 50)).join("");
  return `${VERSION}.${digits}.${lang}`;
}

/** Decodifica un payload. Devuelve null si es inválido. */
export function decodeScores(payload: string): { scores: Scores; lang: string } | null {
  const trimmed = payload.trim().toLowerCase();
  const match = /^v1\.([0-9a-z]{12})\.([a-z]{2})$/.exec(trimmed);
  if (!match) return null;

  const [, digits, lang] = match;
  if (lang !== "es" && lang !== "en") return null;

  const values: number[] = [];
  for (const char of digits) {
    const value = fromBase36(char);
    if (value === null) return null;
    values.push(value);
  }

  const scores = {} as Scores;
  AXES.forEach((axis, i) => {
    scores[axis.id] = values[i];
  });

  return { scores, lang };
}

/** Parsea el query clásico: /r?h=70&a=65&d=80&... */
export function decodeQueryParams(search: string): Scores | null {
  const params = new URLSearchParams(search);
  if (params.size === 0) return null;

  const scores = {} as Scores;
  let found = false;

  for (const [key, value] of params.entries()) {
    const axis = AXES.find((a) => a.id === key);
    if (!axis) continue;
    const num = Number(value);
    if (Number.isNaN(num)) continue;
    scores[axis.id] = Math.max(0, Math.min(100, Math.round(num)));
    found = true;
  }

  return found ? scores : null;
}

/** Construye la URL de resultado a partir de los scores. */
export function buildResultUrl(scores: Scores, lang: string): string {
  return `/r/${encodeScores(scores, lang)}`;
}

/** Extrae el payload de la ruta /r/:payload */
export function extractPayload(pathname: string): string | null {
  const match = /^\/r\/([^/]+)/.exec(pathname);
  return match ? match[1] : null;
}
