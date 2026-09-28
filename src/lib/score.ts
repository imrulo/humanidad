import type { AxisId, Scores } from "../data/axes";
import { AXES } from "../data/axes";
import type { Question, Direction } from "../data/questions";

/** Valor numérico de cada respuesta en la escala de 5 puntos (0-100 hacia el polo B). */
export const ANSWER_VALUES = {
  strongA: 0,
  a: 25,
  neutral: 50,
  b: 75,
  strongB: 100,
} as const;

export type AnswerKey = keyof typeof ANSWER_VALUES;

export const ANSWER_KEYS: AnswerKey[] = [
  "strongA",
  "a",
  "neutral",
  "b",
  "strongB",
];

export interface Answer {
  questionId: string;
  value: number; // 0, 25, 50, 75, 100
}

/**
 * Calcula los 12 ejes a partir de las respuestas.
 *
 * - Para cada eje: suma ponderada según direction y respuesta.
 * - Si direction === "A", se invierte (100 - valor) antes de ponderar.
 * - Se normaliza a 0-100, se hace clamp y se redondea a entero.
 * - No hay azar: el mismo set de respuestas siempre da el mismo resultado.
 */
export function computeScores(
  questions: Question[],
  answers: Record<string, number>,
): Scores {
  const sums = new Map<AxisId, { weighted: number; weightSum: number }>();

  for (const axis of AXES) {
    sums.set(axis.id, { weighted: 0, weightSum: 0 });
  }

  for (const q of questions) {
    const raw = answers[q.id];
    if (raw === undefined || Number.isNaN(raw)) continue;

    // Dirección: si la pregunta empuja al polo A, invertimos para que todo sume hacia B.
    const direction: Direction = q.direction;
    const towardB = direction === "A" ? 100 - raw : raw;

    const entry = sums.get(q.axis)!;
    entry.weighted += towardB * q.weight;
    entry.weightSum += q.weight;
  }

  const scores = {} as Scores;
  for (const axis of AXES) {
    const { weighted, weightSum } = sums.get(axis.id)!;
    const normalized = weightSum > 0 ? weighted / weightSum : 50;
    const clamped = Math.max(0, Math.min(100, normalized));
    scores[axis.id] = Math.round(clamped);
  }

  return scores;
}

/** Mediana de los valores de un eje en un catálogo de vectores. */
export function medianAxisValue(vectors: Record<AxisId, number>[], axis: AxisId): number {
  const values = vectors
    .map((v) => v[axis])
    .filter((n) => typeof n === "number" && !Number.isNaN(n))
    .sort((a, b) => a - b);
  if (values.length === 0) return 50;
  const mid = Math.floor(values.length / 2);
  return values.length % 2 !== 0
    ? values[mid]
    : Math.round((values[mid - 1] + values[mid]) / 2);
}
