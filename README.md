# humani.dad

**Qué clase de humano político eres.**

Un test de perfil humano-político de 12 ejes, estático, gratis de operar y sin vigilancia. Todo el cálculo ocurre en el navegador. No hay servidor, no hay base de datos, no hay cookies de tracking.

## Qué es

humani.dad te hace 36, 60 o 120 preguntas concretas sobre política, economía, guerra, frontera, técnica, familia y ciudad. Tu resultado son 12 porcentajes (uno por eje) que se codifican en una URL compartible. Quien abra tu link ve el mismo perfil sin haber hecho el test.

Los 12 ejes:

1. **Hogar ↔ Imperio** — poder local vs poder central
2. **Asamblea ↔ Cetro** — mandato revocable vs autoridad concentrada
3. **Desorden vital ↔ Orden seguro** — libertad personal vs seguridad
4. **Raíz ↔ Tránsito** — comunidad densa vs sociedad abierta
5. **Tregua ↔ Hierro** — pacifismo vs disposición a la fuerza
6. **Umbral ↔ Cruzada** — no meterse en casas ajenas vs proyectar poder
7. **Lo común ↔ Lo mío** — bienes públicos vs propiedad privada
8. **Plan ↔ Precio** — dirección económica vs mercado
9. **Muralla ↔ Puerto** — proteger la economía vs abrirla
10. **Altar ↔ Taller** — lo sagrado en lo público vs lo secular
11. **Herencia ↔ Quiebre** — continuidad vs reforma
12. **Órgano ↔ Circuito** — límite natural vs apuesta técnica

## Cómo correr local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Cómo publicar en Cloudflare Pages

1. Sube este repositorio a GitHub.
2. En Cloudflare Pages, crea un nuevo proyecto conectado al repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Despliega. Cloudflare detecta Vite automáticamente.

## Cómo publicar en Vercel

1. Sube este repositorio a GitHub.
2. En Vercel, importa el proyecto.
3. Vercel detecta Vite automáticamente:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Despliega.

## Cómo apuntar humani.dad

1. Compra el dominio (Namecheap, Cloudflare, etc.).
2. En Cloudflare Pages, ve a **Custom domains** y añade `humani.dad`.
3. Configura los DNS según las instrucciones de Cloudflare.
4. El sitio está live con HTTPS automático.

## Cómo editar preguntas, ideologías y donaciones

Todo el contenido vive en `src/data/`:

- **`questions.ts`** — 120 preguntas originales (10 por eje). Cada una tiene `id`, `axis`, `weight` (0.8|1|1.2), `direction` ("A"|"B") y `text` en ES/EN.
- **`ideologies.ts`** — 64 perfiles con vector de 12 ejes, familia, resumen y color.
- **`countries.ts`** — 36 arquetipos territoriales (países, ciudades-estado, épocas, regiones).
- **`people.ts`** — 36 figuras históricas con vector, oficio y descripción original.
- **`axes.ts`** — los 12 ejes con polos, explicaciones, colores y preguntas guía.
- **`donations.ts`** — direcciones estáticas de donación (edita las tuyas).
- **`copy.es.ts` / `copy.en.ts`** — todo el texto de la interfaz.

Para añadir una pregunta: crea un objeto con `id` único, `axis` válido, `weight`, `direction` y `text` en ambos idiomas. El sistema la incluye automáticamente en los modos que aplican.

## Cómo funciona el score

En `src/lib/score.ts`:

1. Cada respuesta se convierte a 0-100 (Muy en desacuerdo = 0, Neutral = 50, Muy de acuerdo = 100).
2. Si la pregunta tiene `direction: "A"`, se invierte (100 - valor).
3. Se suma ponderadamente por eje según el `weight` de cada pregunta.
4. Se normaliza a 0-100, se hace clamp y se redondea a entero.
5. No hay azar: el mismo set de respuestas siempre da el mismo resultado.

## Cómo funciona el match

En `src/lib/match.ts`:

1. Tu vector de 12 dimensiones se compara con un catálogo de 64 ideologías, 36 arquetipos y 36 personas.
2. Se calcula la distancia euclidiana en R^12.
3. Compatibilidad = 100 * (1 - distancia / 346.41).
4. Se devuelven los top 3 de cada categoría, el eje más extremo ("lo que te hace raro") y el eje más típico.

## URL compartible

El resultado vive en la URL con formato compacto y versionado:

```
/r/v1.<12 dígitos base36>.<lang>
```

Ejemplo: `/r/v1.4k2a7f9b3c1e.es`

También se acepta el query clásico por compatibilidad:

```
/r?hogar-imperio=30&asamblea-cetro=25&...
```

## PWA

El sitio se puede instalar y funciona offline si ya se visitó. El service worker (`public/sw.js`) usa cache-first para assets y network-first para navegación.

## Accesibilidad

- Foco visible en todos los elementos interactivos.
- Contraste AA en todos los textos.
- `prefers-reduced-motion` respetado.
- Navegación por teclado completa.
- Labels en todos los formularios.

## Advertencia legal

Este proyecto es una obra de entretenimiento y reflexión. No es un instrumento científico, no es un diagnóstico psicológico y no es asesoría política. Los resultados son aproximaciones basadas en un modelo simplificado del pensamiento político. El match de país es un arquetipo cultural-político, no un promedio de encuestas. No recopilamos datos personales, no usamos cookies de tracking y no compartimos información con terceros.

## Licencia

- **Código:** MIT
- **Contenido:** CC BY-SA 4.0
