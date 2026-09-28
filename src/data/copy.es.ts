export interface Copy {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    axes: string;
    method: string;
    about: string;
    donate: string;
    compare: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    ctaSecondary: string;
    sizesTitle: string;
    sizeShort: string;
    sizeStandard: string;
    sizeDeep: string;
    sizeShortTime: string;
    sizeStandardTime: string;
    sizeDeepTime: string;
    sizeShortDesc: string;
    sizeStandardDesc: string;
    sizeDeepDesc: string;
    mirrorTitle: string;
    mirrorText: string;
    exampleTitle: string;
    exampleText: string;
    footerNote: string;
  };
  axes: {
    title: string;
    subtitle: string;
    guide: string;
  };
  quiz: {
    title: string;
    progress: string;
    questionOf: string;
    back: string;
    skip: string;
    skipWarning: string;
    seriousQuestion: string;
    seriousYes: string;
    seriousNo: string;
    seriousNote: string;
    start: string;
    chooseMode: string;
    modeShort: string;
    modeStandard: string;
    modeDeep: string;
    draftSaved: string;
    continue: string;
    restart: string;
    answers: {
      strongA: string;
      a: string;
      neutral: string;
      b: string;
      strongB: string;
    };
  };
  results: {
    title: string;
    compatibility: string;
    withIdeology: string;
    weirdAxis: string;
    weirdText: string;
    typicalAxis: string;
    typicalText: string;
    archetype: string;
    archetypeNote: string;
    people: string;
    ideologies: string;
    download: string;
    copyLink: string;
    copied: string;
    shareX: string;
    shareText: string;
    repeat: string;
    compare: string;
    invalidTitle: string;
    invalidText: string;
    invalidCta: string;
    family: string;
    embed: string;
  };
  method: {
    title: string;
    subtitle: string;
    howTitle: string;
    howText: string;
    matchTitle: string;
    matchText: string;
    limitsTitle: string;
    limitsText: string;
    dataTitle: string;
    dataText: string;
    whyTitle: string;
    whyText: string;
  };
  about: {
    title: string;
    subtitle: string;
    whatTitle: string;
    whatText: string;
    whyTitle: string;
    whyText: string;
    creditsTitle: string;
    creditsText: string;
    licenseTitle: string;
    licenseText: string;
  };
  donate: {
    title: string;
    subtitle: string;
    note: string;
    lightning: string;
    bitcoin: string;
    monero: string;
    ethereum: string;
    copy: string;
    copied: string;
  };
  compare: {
    title: string;
    subtitle: string;
    labelA: string;
    labelB: string;
    placeholder: string;
    compare: string;
    error: string;
    compatibility: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  lang: {
    es: string;
    en: string;
  };
}

export const copyEs: Copy = {
  meta: {
    title: "humani.dad — Qué clase de humano político eres",
    description:
      "Doce ejes, cien preguntas posibles, un perfil. Gratis para siempre. Sin cuentas, sin cookies, sin servidor.",
  },
  nav: {
    home: "Inicio",
    axes: "Los 12 ejes",
    method: "Método",
    about: "Nosotros",
    donate: "Donar",
    compare: "Comparar",
  },
  home: {
    heroTitle: "Qué clase de humano político eres.",
    heroSubtitle:
      "Doce ejes. Cien preguntas posibles. Un perfil que puedes compartir, comparar y discutir. Gratis para siempre.",
    cta: "Descubrir mi perfil",
    ctaSecondary: "Ver los 12 ejes",
    sizesTitle: "Elige tu tamaño",
    sizeShort: "Corto",
    sizeStandard: "Estándar",
    sizeDeep: "Hondo",
    sizeShortTime: "4 min",
    sizeStandardTime: "8 min",
    sizeDeepTime: "18 min",
    sizeShortDesc: "36 preguntas. Para empezar.",
    sizeStandardDesc: "60 preguntas. El punto justo.",
    sizeDeepDesc: "120 preguntas. Para irse a dormir pensando.",
    mirrorTitle: "No es un diagnóstico. Es un espejo.",
    mirrorText:
      "humani.dad no te dice quién eres. Te dice dónde estás parado en doce ejes que atraviesan la política, la economía, la guerra, la fe y la técnica. No hay un bando correcto. No hay una respuesta mejor. Solo hay un perfil que puedes mirar, compartir y discutir.",
    exampleTitle: "Ejemplo de tarjeta",
    exampleText:
      "Así se ve un resultado. Doce barras, un perfil, una persona compatible y un arquetipo territorial. Todo se calcula en tu navegador y se guarda en la URL.",
    footerNote: "Gratis. Sin vigilancia. Sin servidor.",
  },
  axes: {
    title: "Los 12 ejes",
    subtitle:
      "Cada eje va de 0 a 100. Cero es el polo A, cien es el polo B. No hay un lado correcto: hay un espectro.",
    guide: "Pregunta guía",
  },
  quiz: {
    title: "El test",
    progress: "Progreso",
    questionOf: "Pregunta {current} de {total}",
    back: "Volver",
    skip: "No lo sé",
    skipWarning:
      "Has usado demasiados saltos. Las respuestas honestas dan perfiles más precisos.",
    seriousQuestion: "¿Estás respondiendo en serio?",
    seriousYes: "Sí, en serio",
    seriousNo: "Solo curioseando",
    seriousNote:
      "No pasa nada si solo curioseas. Pero el perfil será más útil si respondes con honestidad.",
    start: "Empezar",
    chooseMode: "Elige el tamaño",
    modeShort: "Corto — 36 preguntas, ~4 min",
    modeStandard: "Estándar — 60 preguntas, ~8 min",
    modeDeep: "Hondo — 120 preguntas, ~18 min",
    draftSaved: "Borrador guardado. Puedes seguir donde lo dejaste.",
    continue: "Continuar",
    restart: "Empezar de nuevo",
    answers: {
      strongA: "Muy en desacuerdo",
      a: "En desacuerdo",
      neutral: "Neutral",
      b: "De acuerdo",
      strongB: "Muy de acuerdo",
    },
  },
  results: {
    title: "Tu perfil",
    compatibility: "compatibilidad",
    withIdeology: "con",
    weirdAxis: "Lo que te hace raro",
    weirdText:
      "En el eje {axis}, estás a {delta} puntos de la mediana del catálogo. Eso te hace más raro que el 90% de los perfiles.",
    typicalAxis: "Lo más típico de ti",
    typicalText:
      "En el eje {axis}, estás a solo {delta} puntos de la mediana. Casi un ciudadano promedio del catálogo.",
    archetype: "Arquetipo territorial",
    archetypeNote:
      "Esto es un arquetipo cultural-político, no un promedio científico de encuestas.",
    people: "Personas compatibles",
    ideologies: "Ideologías cercanas",
    download: "Descargar tarjeta PNG",
    copyLink: "Copiar enlace",
    copied: "Enlace copiado",
    shareX: "Compartir en X",
    shareText: "Hice el test de humani.dad y esto es lo que salió:",
    repeat: "Repetir test",
    compare: "Comparar con otra URL",
    invalidTitle: "Este enlace no funciona",
    invalidText:
      "El payload de la URL está corrupto o es de una versión antigua. Puedes empezar un test nuevo.",
    invalidCta: "Empezar test",
    family: "Familia política aproximada",
    embed: "Versión limpia para screenshot",
  },
  method: {
    title: "Método",
    subtitle: "Cómo se calcula, qué no es y qué datos se guardan.",
    howTitle: "Cómo se calcula",
    howText:
      "Cada pregunta tiene un eje, un peso (0.8, 1 o 1.2) y una dirección (A o B). Tu respuesta se convierte en un número de 0 a 100. Si la pregunta empuja al polo A, se invierte. Luego se suma ponderadamente por eje y se normaliza a 0-100. Sin azar. Sin sorpresas.",
    matchTitle: "Cómo se calcula el match",
    matchText:
      "Comparamos tu vector de 12 dimensiones con un catálogo de ideologías, arquetipos territoriales y figuras históricas usando distancia euclidiana. La compatibilidad es 100 * (1 - distancia / distancia máxima). La distancia máxima en 12 dimensiones es 100*sqrt(12) ≈ 346.41.",
    limitsTitle: "Límites",
    limitsText:
      "Esto no es ciencia. Es un espejo con matemáticas. Los vectores del catálogo son aproximaciones razonables, no mediciones empíricas. El match de país es un arquetipo cultural-político, no un promedio de encuestas. Y tu perfil depende de tu honestidad, no de tu conocimiento.",
    dataTitle: "Qué datos se guardan",
    dataText:
      "Ninguno en un servidor. No hay servidor. Tu borrador se guarda en localStorage y se borra al terminar. El resultado vive en la URL: quien abra el link ve el mismo perfil sin haber hecho el test. No hay cookies de tracking, no hay analytics, no hay email, no hay geolocalización.",
    whyTitle: "Por qué no es ciencia",
    whyText:
      "Porque las preguntas no están validadas estadísticamente, porque los vectores del catálogo son juicios razonables y porque la política no es un espectrómetro. Pero eso no lo hace inútil: lo hace honesto. Es un espejo, no un diagnóstico.",
  },
  about: {
    title: "Nosotros",
    subtitle: "Qué es humani.dad, por qué existe y quién lo hizo.",
    whatTitle: "Qué es",
    whatText:
      "humani.dad es un test de perfil humano-político de 12 ejes. Es estático, gratis de operar para siempre y no tiene servidor. Todo el cálculo ocurre en tu navegador.",
    whyTitle: "Por qué existe",
    whyText:
      "Porque los tests políticos existentes son o demasiado simples (izquierda-derecha) o demasiado complejos (12 ejes copiados). humani.dad intenta ser el punto justo: doce ejes que atraviesan la política, la economía, la guerra, la fe y la técnica, con preguntas concretas y un resultado compartible.",
    creditsTitle: "Créditos",
    creditsText:
      "Tipografías: Fraunces y Atkinson Hyperlegible, autoalojadas con @fontsource (OFL). Iconos: licide-react (MIT). Código: React, TypeScript, Vite, Tailwind CSS, Zustand, framer-motion, html-to-image. Todo el contenido es original.",
    licenseTitle: "Licencia",
    licenseText:
      "El código está bajo licencia MIT. El contenido (preguntas, ideologías, arquetipos, personas) está bajo licencia CC BY-SA 4.0. Puedes usarlo, modificarlo y compartirlo, siempre que des crédito y compartas con la misma licencia.",
  },
  donate: {
    title: "Donar",
    subtitle: "El sitio es gratis y sin vigilancia. Si quieres sostenerlo, puedes.",
    note: "No hay procesadores, no hay rastros, no hay agradecimientos públicos. Solo direcciones estáticas.",
    lightning: "Lightning (LNURL)",
    bitcoin: "Bitcoin (on-chain)",
    monero: "Monero",
    ethereum: "Ethereum",
    copy: "Copiar",
    copied: "Copiado",
  },
  compare: {
    title: "Comparar",
    subtitle: "Pega dos URLs o dos payloads y mira cómo se superponen.",
    labelA: "Perfil A",
    labelB: "Perfil B",
    placeholder: "Pega una URL de humani.dad o un payload v1.xxxx",
    compare: "Comparar",
    error: "No se pudo leer ese enlace. Pega una URL válida de humani.dad.",
    compatibility: "compatibilidad entre ambos",
  },
  notFound: {
    title: "404",
    text: "Esta página no existe. Como muchas ideas políticas: buena en teoría, inexistente en la práctica.",
    cta: "Volver al inicio",
  },
  theme: {
    light: "Claro",
    dark: "Oscuro",
  },
  lang: {
    es: "Español",
    en: "English",
  },
};
