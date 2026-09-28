/**
 * Semilla de orden para el quiz.
 *
 * Se guarda en sessionStorage para que, si el usuario recarga a mitad del test,
 * el orden de las preguntas sea el mismo. No se usa azar en el score final,
 * solo en la presentación.
 */

const SESSION_KEY = "humani.quiz.seed";

/** Genera una semilla numérica aleatoria. */
export function generateSeed(): number {
  return Math.floor(Math.random() * 2 ** 31);
}

/** Obtiene o crea la semilla de sesión. */
export function getSessionSeed(): number {
  try {
    const existing = sessionStorage.getItem(SESSION_KEY);
    if (existing !== null) {
      const parsed = Number(existing);
      if (!Number.isNaN(parsed)) return parsed;
    }
    const seed = generateSeed();
    sessionStorage.setItem(SESSION_KEY, String(seed));
    return seed;
  } catch {
    // sessionStorage no disponible: devolver una semilla aleatoria de respaldo.
    return generateSeed();
  }
}

/** Limpia la semilla de sesión (al terminar el test). */
export function clearSessionSeed(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Ignorar errores de almacenamiento.
  }
}

/** Baraja un array usando la semilla (Fisher-Yates con PRNG determinista). */
export function seededShuffle<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let state = seed || 1;

  const random = () => {
    // PRNG simple: xorshift32.
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 2 ** 32;
  };

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
