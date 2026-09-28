export type Lang = "es" | "en";

export type AxisId =
  | "hogar-imperio"
  | "asamblea-cetro"
  | "desorden-orden"
  | "raiz-transito"
  | "tregua-hierro"
  | "umbral-cruzada"
  | "comun-mio"
  | "plan-precio"
  | "muralla-puerto"
  | "altar-taller"
  | "herencia-quiebre"
  | "organo-circuito";

export interface Axis {
  id: AxisId;
  /** Polo 0 — nombre del extremo A */
  poleA: string;
  /** Polo 100 — nombre del extremo B */
  poleB: string;
  /** Etiqueta corta del eje */
  shortLabel: string;
  longExplanation: Record<Lang, string>;
  /** Color del eje (hex) */
  color: string;
  /** Pregunta guía de una línea */
  guide: Record<Lang, string>;
}

export const AXES: Axis[] = [
  {
    id: "hogar-imperio",
    poleA: "Hogar",
    poleB: "Imperio",
    shortLabel: "Hogar ↔ Imperio",
    longExplanation: {
      es: "¿Dónde debe vivir el poder? En la casa de al lado, en el concejo que conoces por su nombre, en la ciudad que te vio crecer. O en un centro único, lejano, que decide por todos porque entiende el mapa completo. El hogar apuesta por lo pequeño y lo cercano; el imperio, por lo grande y lo unitario.",
      en: "Where should power live? Next door, in a council you know by name, in the town that watched you grow. Or in a single distant centre that decides for everyone because it sees the whole map. The home bets on the small and the near; the empire, on the large and the unitary.",
    },
    color: "#a8b06a",
    guide: {
      es: "¿Quién decide mejor: quien vive al lado o quien ve el mapa entero?",
      en: "Who decides better: the one who lives next door, or the one who sees the whole map?",
    },
  },
  {
    id: "asamblea-cetro",
    poleA: "Asamblea",
    poleB: "Cetro",
    shortLabel: "Asamblea ↔ Cetro",
    longExplanation: {
      es: "La asamblea cree que manda quien puede revocarse: voces muchas, mandatos cortos, cuentas claras. El cetro cree que gobernar es un oficio que exige mano firme y tiempo largo, y que la unanimidad de los muchos suele ser la tiranía de nadie. Uno teme al jefe; el otro, a la multitud.",
      en: "The assembly believes authority belongs to whoever can be removed: many voices, short mandates, clear accounts. The sceptre believes governing is a craft that demands a firm hand and a long view, and that the unanimity of the many is often the tyranny of no one. One fears the boss; the other, the crowd.",
    },
    color: "#c98a5e",
    guide: {
      es: "¿Prefieres que mande quien puedes correr, o quien no puedes?",
      en: "Do you prefer to be ruled by someone you can remove, or someone you cannot?",
    },
  },
  {
    id: "desorden-orden",
    poleA: "Desorden vital",
    poleB: "Orden seguro",
    shortLabel: "Desorden ↔ Orden",
    longExplanation: {
      es: "El desorden vital defiende que la vida es más ancha que las normas: horarios, costumbres y libertades personales mandan sobre la disciplina. El orden seguro responde que la libertad sin suelo firme es ruido: primero reglas claras, calles previsibles y un Estado que cumpla lo que promete.",
      en: "Vital disorder holds that life is wider than rules: schedules, customs and personal freedoms outrank discipline. Safe order answers that freedom without solid ground is noise: clear rules, predictable streets, and a state that keeps its promises.",
    },
    color: "#7fa8a0",
    guide: {
      es: "¿Qué estorba más: la norma que aprieta o el caos que asusta?",
      en: "What bothers you more: the rule that tightens, or the chaos that frightens?",
    },
  },
  {
    id: "raiz-transito",
    poleA: "Raíz",
    poleB: "Tránsito",
    shortLabel: "Raíz ↔ Tránsito",
    longExplanation: {
      es: "La raíz quiere comunidad densa: lengua, memoria, oficios y familias que se quedan, y recién llegados que se dejan asimilar. El tránsito quiere sociedad abierta y múltiple, donde llegar no exige pedir permiso y la identidad se renueva como cambia la gente.",
      en: "The root wants a dense community: language, memory, trades and families that stay, and newcomers who let themselves be assimilated. Transit wants an open, multiple society, where arriving requires no permission and identity renews itself as people change.",
    },
    color: "#b08cc9",
    guide: {
      es: "¿Llegar a un lugar es heredarlo o alquilarlo?",
      en: "Is arriving somewhere inheriting it, or renting it?",
    },
  },
  {
    id: "tregua-hierro",
    poleA: "Tregua",
    poleB: "Hierro",
    shortLabel: "Tregua ↔ Hierro",
    longExplanation: {
      es: "La tregua cree que la fuerza es el último recurso y casi siempre el peor: negocia, cede, espera. El hierro cree que la paz se sostiene sobre la disposición a usarla, y que quien no puede golpear fuerte negocia de rodillas. Uno ve virtud en la paciencia; el otro, ingenuidad.",
      en: "The truce believes force is the last resort and almost always the worst: negotiate, concede, wait. Iron believes peace rests on the willingness to use it, and that whoever cannot strike strong negotiates on their knees. One sees virtue in patience; the other, naivety.",
    },
    color: "#c96a6a",
    guide: {
      es: "¿La paz se gana cediendo o pudiendo?",
      en: "Is peace won by conceding, or by being able to?",
    },
  },
  {
    id: "umbral-cruzada",
    poleA: "Umbral",
    poleB: "Cruzada",
    shortLabel: "Umbral ↔ Cruzada",
    longExplanation: {
      es: "El umbral defiende la casa ajena: cada pueblo tiene sus demonios y sus arreglos, y meter la cuchara fuera de casa trae más problemas que glorias. La cruzada cree que hay causas que no entienden fronteras y que quedarse quieto, cuando se puede actuar, también es una decisión.",
      en: "The threshold defends other people's houses: every town has its own demons and its own arrangements, and meddling abroad brings more trouble than glory. The crusade believes some causes know no borders, and that standing still when you can act is also a decision.",
    },
    color: "#6a8ac9",
    guide: {
      es: "¿Hasta dónde llega tu responsabilidad: la vereda o el mapa?",
      en: "How far does your responsibility reach: the sidewalk, or the map?",
    },
  },
  {
    id: "comun-mio",
    poleA: "Lo común",
    poleB: "Lo mío",
    shortLabel: "Común ↔ Mío",
    longExplanation: {
      es: "Lo común sostiene que hay bienes que no deben tener dueño: salud, agua, calles, conocimiento. Lo mío responde que nada cuida mejor lo propio que la propiedad, y que lo público de todos suele ser el patio de nadie. Uno mira la mesa; el otro, la cerca.",
      en: "The commons holds that some goods should have no owner: health, water, streets, knowledge. The mine answers that nothing cares for things like ownership does, and that what belongs to everyone is usually nobody's yard. One looks at the table; the other, at the fence.",
    },
    color: "#c9b06a",
    guide: {
      es: "¿Qué cuida mejor lo tuyo: compartirlo o cercarlo?",
      en: "What cares for what's yours better: sharing it, or fencing it?",
    },
  },
  {
    id: "plan-precio",
    poleA: "Plan",
    poleB: "Precio",
    shortLabel: "Plan ↔ Precio",
    longExplanation: {
      es: "El plan cree que la economía se puede y debe dirigirse: objetivos, prioridades, mano visible. El precio cree que el mercado, con sus señales y sus castigos, coordina mejor que cualquier despacho. Uno confía en la brújula; el otro, en la marea.",
      en: "The plan believes the economy can and should be steered: goals, priorities, a visible hand. The price believes the market, with its signals and its punishments, coordinates better than any office. One trusts the compass; the other, the tide.",
    },
    color: "#8ac98a",
    guide: {
      es: "¿Quién ordena mejor la casa: el arquitecto o el mercado?",
      en: "Who orders the house better: the architect, or the market?",
    },
  },
  {
    id: "muralla-puerto",
    poleA: "Muralla",
    poleB: "Puerto",
    shortLabel: "Muralla ↔ Puerto",
    longExplanation: {
      es: "La muralla protege lo propio: industria, trabajo, moneda, frontera. El puerto abre el muelle: que entren mercancías, capitales y gente, y que la competencia haga su trabajo de poda. Uno ve la aduana como escudo; el otro, como peaje.",
      en: "The wall protects what is one's own: industry, work, currency, border. The port opens the dock: let goods, capital and people in, and let competition do its pruning. One sees the customs house as a shield; the other, as a toll.",
    },
    color: "#c98ab0",
    guide: {
      es: "¿La frontera es escudo o peaje?",
      en: "Is the border a shield or a toll?",
    },
  },
  {
    id: "altar-taller",
    poleA: "Altar",
    poleB: "Taller",
    shortLabel: "Altar ↔ Taller",
    longExplanation: {
      es: "El altar cree que la vida pública necesita un techo sagrado: trascendencia, ritual, algo que esté por encima del martes. El taller cree que la república se arregla a martillazos, sin sagrados, con la razón como única herramienta. Uno repara en el cielo; el otro, en el tornillo.",
      en: "The altar believes public life needs a sacred ceiling: transcendence, ritual, something above Tuesday. The workshop believes the republic is fixed with hammer blows, with no sacred, reason as the only tool. One looks to the sky; the other, to the screw.",
    },
    color: "#9a8ac9",
    guide: {
      es: "¿La república necesita cielo o solo tornillos?",
      en: "Does the republic need a sky, or just screws?",
    },
  },
  {
    id: "herencia-quiebre",
    poleA: "Herencia",
    poleB: "Quiebre",
    shortLabel: "Herencia ↔ Quiebre",
    longExplanation: {
      es: "La herencia trata el pasado como una casa habitada: se reforma, no se demuela. La quiebre trata el pasado como una deuda: hay que romper, empezar de nuevo, no repetir los errores de los padres. Uno hereda; el otro reniega.",
      en: "Inheritance treats the past as an inhabited house: renovate it, don't demolish it. Rupture treats the past as a debt: break, start anew, don't repeat the parents' mistakes. One inherits; the other disowns.",
    },
    color: "#c9a08a",
    guide: {
      es: "¿El pasado es casa habitada o deuda?",
      en: "Is the past an inhabited house, or a debt?",
    },
  },
  {
    id: "organo-circuito",
    poleA: "Órgano",
    poleB: "Circuito",
    shortLabel: "Órgano ↔ Circuito",
    longExplanation: {
      es: "El órgano pone límites: hay cosas que la técnica no debe tocar porque no se pueden deshacer. El circuito acelera: si se puede hacer, se hace, y los límites se discuten después. Uno teme al botón; el otro, a quedarse atrás.",
      en: "The organ sets limits: there are things technique must not touch because they cannot be undone. The circuit accelerates: if it can be done, it is done, and limits are discussed afterwards. One fears the button; the other, being left behind.",
    },
    color: "#6ac9b0",
    guide: {
      es: "¿La técnica necesita freno o pista?",
      en: "Does technique need a brake, or a track?",
    },
  },
];

export const AXIS_MAP: Record<AxisId, Axis> = Object.fromEntries(
  AXES.map((a) => [a.id, a]),
) as Record<AxisId, Axis>;

export type Scores = Record<AxisId, number>;

export const EMPTY_SCORES: Scores = Object.fromEntries(
  AXES.map((a) => [a.id, 50]),
) as Scores;
