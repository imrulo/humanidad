import type { AxisId, Scores } from "../data/axes";
import { AXES } from "../data/axes";
import { IDEOLOGIES, type Ideology } from "../data/ideologies";
import { ARCHETYPES, type Archetype } from "../data/countries";
import { PEOPLE, type Person } from "../data/people";

/**
 * Motor de matching: distancia euclidiana en R^12.
 *
 * La distancia máxima posible entre dos vectores 0-100 en 12 dimensiones es
 * sqrt(12 * 100^2) = 100*sqrt(12) ≈ 346.41.
 * Compatibilidad = 100 * (1 - distance / maxDistance).
 */
export const MAX_DISTANCE = Math.sqrt(12 * 100 * 100);

export interface MatchEntry<T> {
  item: T;
  distance: number;
  compatibility: number; // 0-100
}

function euclidean(a: Scores, b: Scores): number {
  let sum = 0;
  for (const axis of AXES) {
    const diff = (a[axis.id] ?? 50) - (b[axis.id] ?? 50);
    sum += diff * diff;
  }
  return Math.sqrt(sum);
}

function matchAgainst<T extends { vector: Scores }>(
  scores: Scores,
  catalog: T[],
): MatchEntry<T>[] {
  return catalog
    .map((item) => {
      const distance = euclidean(scores, item.vector);
      return {
        item,
        distance,
        compatibility: Math.round(100 * (1 - distance / MAX_DISTANCE)),
      };
    })
    .sort((x, y) => y.compatibility - x.compatibility);
}

export interface MatchResult {
  topIdeology: MatchEntry<Ideology>;
  topIdeologies: MatchEntry<Ideology>[];
  topArchetype: MatchEntry<Archetype>;
  topArchetypes: MatchEntry<Archetype>[];
  topPerson: MatchEntry<Person>;
  topPeople: MatchEntry<Person>[];
  /** Eje más extremo del usuario vs la mediana del catálogo: "lo que te hace raro". */
  weirdestAxis: { axis: AxisId; value: number; median: number; delta: number };
  /** Eje más típico: más cercano a la mediana del catálogo. */
  typicalAxis: { axis: AxisId; value: number; median: number; delta: number };
  family: Ideology["family"];
}

const CATALOG_VECTORS = [
  ...IDEOLOGIES.map((i) => i.vector),
  ...ARCHETYPES.map((a) => a.vector),
  ...PEOPLE.map((p) => p.vector),
];

export function computeMatches(scores: Scores): MatchResult {
  const ideologies = matchAgainst(scores, IDEOLOGIES);
  const archetypes = matchAgainst(scores, ARCHETYPES);
  const people = matchAgainst(scores, PEOPLE);

  let weirdestAxis: MatchResult["weirdestAxis"] | null = null;
  let typicalAxis: MatchResult["typicalAxis"] | null = null;

  for (const axis of AXES) {
    const median = medianOf(CATALOG_VECTORS, axis.id);
    const delta = Math.abs((scores[axis.id] ?? 50) - median);
    if (!weirdestAxis || delta > weirdestAxis.delta) {
      weirdestAxis = { axis: axis.id, value: scores[axis.id] ?? 50, median, delta };
    }
    if (!typicalAxis || delta < typicalAxis.delta) {
      typicalAxis = { axis: axis.id, value: scores[axis.id] ?? 50, median, delta };
    }
  }

  return {
    topIdeology: ideologies[0],
    topIdeologies: ideologies.slice(0, 3),
    topArchetype: archetypes[0],
    topArchetypes: archetypes.slice(0, 3),
    topPerson: people[0],
    topPeople: people.slice(0, 3),
    weirdestAxis: weirdestAxis!,
    typicalAxis: typicalAxis!,
    family: ideologies[0].item.family,
  };
}

function medianOf(vectors: Scores[], axis: AxisId): number {
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
