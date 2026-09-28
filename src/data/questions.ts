import type { AxisId, Lang } from "./axes";

export type Weight = 0.8 | 1 | 1.2;
export type Direction = "A" | "B";

export interface Question {
  id: string;
  axis: AxisId;
  weight: Weight;
  /** "A" empuja al polo A; "B" empuja al polo B */
  direction: Direction;
  text: Record<Lang, string>;
}

/**
 * 120 preguntas originales: 10 por eje.
 * Modos: corto = 3 por eje (36), estándar = 5 (60), hondo = 10 (120).
 * El modo selecciona aleatoriamente dentro de las 10 de cada eje.
 */
export const QUESTIONS: Question[] = [
  // ─── Hogar ↔ Imperio ───
  {
    id: "hi-1",
    axis: "hogar-imperio",
    weight: 1,
    direction: "A",
    text: {
      es: "El mejor gobierno es el que puedes mirar a los ojos en la calle.",
      en: "The best government is the one you can look in the eye on the street.",
    },
  },
  {
    id: "hi-2",
    axis: "hogar-imperio",
    weight: 1,
    direction: "B",
    text: {
      es: "Los problemas grandes exigen un poder grande, aunque viva lejos.",
      en: "Big problems demand big power, even if it lives far away.",
    },
  },
  {
    id: "hi-3",
    axis: "hogar-imperio",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Prefiero que mi pueblo decida mal a que una capital decida bien por mí.",
      en: "I'd rather my town decide badly than a capital decide well for me.",
    },
  },
  {
    id: "hi-4",
    axis: "hogar-imperio",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Un país sin gobierno central fuerte es un barco sin timón.",
      en: "A country without a strong central government is a ship without a rudder.",
    },
  },
  {
    id: "hi-5",
    axis: "hogar-imperio",
    weight: 1,
    direction: "A",
    text: {
      es: "Las decisiones deben tomarse lo más c posible de quienes las sufren.",
      en: "Decisions should be made as close as possible to those who suffer them.",
    },
  },
  {
    id: "hi-6",
    axis: "hogar-imperio",
    weight: 1,
    direction: "B",
    text: {
      es: "La fragmentación regional solo beneficia a los poderosos de siempre.",
      en: "Regional fragmentation only ever benefits the powerful.",
    },
  },
  {
    id: "hi-7",
    axis: "hogar-imperio",
    weight: 1,
    direction: "A",
    text: {
      es: "Un alcalde que conoces vale más que un ministerio que no ves.",
      en: "A mayor you know is worth more than a ministry you never see.",
    },
  },
  {
    id: "hi-8",
    axis: "hogar-imperio",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Sin un centro que coordine, las regiones se pelean y el país se apaga.",
      en: "Without a centre to coordinate, regions fight and the country goes dark.",
    },
  },
  {
    id: "hi-9",
    axis: "hogar-imperio",
    weight: 0.8,
    direction: "A",
    text: {
      es: "La verdadera patria se defiende en el barrio, no en los despachos.",
      en: "The true homeland is defended in the neighbourhood, not in offices.",
    },
  },
  {
    id: "hi-10",
    axis: "hogar-imperio",
    weight: 1,
    direction: "B",
    text: {
      es: "Un Estado que no puede imponer sus leyes en todo el territorio no es Estado.",
      en: "A state that cannot enforce its laws across its territory is no state.",
    },
  },

  // ─── Asamblea ↔ Cetro ───
  {
    id: "ac-1",
    axis: "asamblea-cetro",
    weight: 1,
    direction: "A",
    text: {
      es: "Todo gobernante debería poder ser destituido en cualquier momento.",
      en: "Every ruler should be removable at any moment.",
    },
  },
  {
    id: "ac-2",
    axis: "asamblea-cetro",
    weight: 1,
    direction: "B",
    text: {
      es: "Gobernar exige continuidad; cambiar de timón cada temporada es naufragio.",
      en: "Governing demands continuity; changing helms every season is shipwreck.",
    },
  },
  {
    id: "ac-3",
    axis: "asamblea-cetro",
    weight: 1.2,
    direction: "A",
    text: {
      es: "El poder que no se puede revocar deja de ser un servicio y se convierte en dueño.",
      en: "Power that cannot be revoked stops being a service and becomes an owner.",
    },
  },
  {
    id: "ac-4",
    axis: "asamblea-cetro",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Las asambleas interminables deciden poco y tarde.",
      en: "Endless assemblies decide little and late.",
    },
  },
  {
    id: "ac-5",
    axis: "asamblea-cetro",
    weight: 1,
    direction: "A",
    text: {
      es: "Mandatos largos y reelección indefinida son la puerta golpes de Estado blandos.",
      en: "Long mandates and indefinite re-election are the door to soft coups.",
    },
  },
  {
    id: "ac-6",
    axis: "asamblea-cetro",
    weight: 1,
    direction: "B",
    text: {
      es: "Un líder fuerte y estable da más confianza que una rotación de desconocidos.",
      en: "A strong, stable leader inspires more confidence than a rotation of strangers.",
    },
  },
  {
    id: "ac-7",
    axis: "asamblea-cetro",
    weight: 1,
    direction: "A",
    text: {
      es: "La obediencia ciega a un jefe es el fin de la política.",
      en: "Blind obedience to a boss is the end of politics.",
    },
  },
  {
    id: "ac-8",
    axis: "asamblea-cetro",
    weight: 1.2,
    direction: "B",
    text: {
      es: "En una crisis, lo que salva no es debatir: es alguien que decida.",
      en: "In a crisis, what saves is not debating: it is someone who decides.",
    },
  },
  {
    id: "ac-9",
    axis: "asamblea-cetro",
    weight: 0.8,
    direction: "A",
    text: {
      es: "El voto de los muchos, bien organizado, supera al capricho de uno.",
      en: "The vote of the many, well organised, surpasses the whim of one.",
    },
  },
  {
    id: "ac-10",
    axis: "asamblea-cetro",
    weight: 1,
    direction: "B",
    text: {
      es: "La democracia sin liderazgo es una orquesta sin director: ruido con buena intención.",
      en: "Democracy without leadership is an orchestra without a conductor: noise with good intentions.",
    },
  },

  // ─── Desorden vital ↔ Orden seguro ───
  {
    id: "do-1",
    axis: "desorden-orden",
    weight: 1,
    direction: "A",
    text: {
      es: "Una sociedad que regula cada costumbre termina regulando el pensamiento.",
      en: "A society that regulates every custom ends up regulating thought.",
    },
  },
  {
    id: "do-2",
    axis: "desorden-orden",
    weight: 1,
    direction: "B",
    text: {
      es: "La seguridad es la primera libertad: sin ella, las demás son adorno.",
      en: "Security is the first freedom: without it, the rest are decoration.",
    },
  },
  {
    id: "do-3",
    axis: "desorden-orden",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Prefiero una calle imprevisible a una vigilada hasta el aburrimiento.",
      en: "I'd rather an unpredictable street than a surveilled one, however safe.",
    },
  },
  {
    id: "do-4",
    axis: "desorden-orden",
    weight: 0.8,
    direction: "B",
    text: {
      es: "El que no puede caminar de noche no es libre, por muchas leyes que tenga.",
      en: "Whoever cannot walk at night is not free, however many laws they have.",
    },
  },
  {
    id: "do-5",
    axis: "desorden-orden",
    weight: 1,
    direction: "A",
    text: {
      es: "Las normas de convivencia se relajan solas cuando la gente tiene oficio.",
      en: "Rules of coexistence relax on their own when people have a trade.",
    },
  },
  {
    id: "do-6",
    axis: "desorden-orden",
    weight: 1,
    direction: "B",
    text: {
      es: "La disciplina no oprime: ordena la vida para que otros puedan hacer la suya.",
      en: "Discipline does not oppress: it orders life so others can live theirs.",
    },
  },
  {
    id: "do-7",
    axis: "desorden-orden",
    weight: 1,
    direction: "A",
    text: {
      es: "Prohibir por precaución es gobernar por miedo.",
      en: "Banning out of caution is governing out of fear.",
    },
  },
  {
    id: "do-8",
    axis: "desorden-orden",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Un Estado que no castiga el delito invita al delito a quedarse.",
      en: "A state that does not punish crime invites crime to stay.",
    },
  },
  {
    id: "do-9",
    axis: "desorden-orden",
    weight: 0.8,
    direction: "A",
    text: {
      es: "La diversidad de costumbres es riqueza, no un problema de orden público.",
      en: "Diversity of customs is wealth, not a public-order problem.",
    },
  },
  {
    id: "do-10",
    axis: "desorden-orden",
    weight: 1,
    direction: "B",
    text: {
      es: "El orden no se pide: se mantiene, y a veces se impone.",
      en: "Order is not requested: it is maintained, and sometimes imposed.",
    },
  },

  // ─── Raíz ↔ Tránsito ───
  {
    id: "rt-1",
    axis: "raiz-transito",
    weight: 1,
    direction: "A",
    text: {
      es: "Una comunidad con memoria propia es más fuerte que una con Wi-Fi rápido.",
      en: "A community with its own memory is stronger than one with fast Wi-Fi.",
    },
  },
  {
    id: "rt-2",
    axis: "raiz-transito",
    weight: 1,
    direction: "B",
    text: {
      es: "Las sociedades abiertas atraen talento; las cerradas, lo pierden.",
      en: "Open societies attract talent; closed ones lose it.",
    },
  },
  {
    id: "rt-3",
    axis: "raiz-transito",
    weight: 1.2,
    direction: "A",
    text: {
      es: "El recién llegado debería aprender las costumbres del lugar que lo recibe.",
      en: "The newcomer should learn the customs of the place that receives them.",
    },
  },
  {
    id: "rt-4",
    axis: "raiz-transito",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Exigir asimilación a los recién llegados es pedir que dejen de ser ellos.",
      en: "Demanding assimilation from newcomers asks them to stop being themselves.",
    },
  },
  {
    id: "rt-5",
    axis: "raiz-transito",
    weight: 1,
    direction: "A",
    text: {
      es: "Las tradiciones locales merecen protección, no solo tolerancia.",
      en: "Local traditions deserve protection, not just tolerance.",
    },
  },
  {
    id: "rt-6",
    axis: "raiz-transito",
    weight: 1,
    direction: "B",
    text: {
      es: "La identidad de un lugar se renueva con gente nueva, no con museos.",
      en: "A place's identity renews itself with new people, not with museums.",
    },
  },
  {
    id: "rt-7",
    axis: "raiz-transito",
    weight: 1,
    direction: "A",
    text: {
      es: "Un barrio que cambia de golpe pierde el alma y gana alquileres.",
      en: "A neighbourhood that changes overnight loses its soul and gains rents.",
    },
  },
  {
    id: "rt-8",
    axis: "raiz-transito",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Las fronteras culturales rígidas convierten la vida en un gueto con bandera.",
      en: "Rigid cultural borders turn life into a ghetto with a flag.",
    },
  },
  {
    id: "rt-9",
    axis: "raiz-transito",
    weight: 0.8,
    direction: "A",
    text: {
      es: "Hablar la lengua del lugar es un acto de respeto, no una obligación legal.",
      en: "Speaking the local language is an act of respect, not a legal obligation.",
    },
  },
  {
    id: "rt-10",
    axis: "raiz-transito",
    weight: 1,
    direction: "B",
    text: {
      es: "Ninguna cultura es propiedad privada: todas se mezclan o se mueren.",
      en: "No culture is private property: they all mix or they die.",
    },
  },

  // ─── Tregua ↔ Hierro ───
  {
    id: "th-1",
    axis: "tregua-hierro",
    weight: 1,
    direction: "A",
    text: {
      es: "La guerra es el fracaso de la política, no su continuación.",
      en: "War is the failure of politics, not its continuation.",
    },
  },
  {
    id: "th-2",
    axis: "tregua-hierro",
    weight: 1,
    direction: "B",
    text: {
      es: "La paz sin disuasión es una tregua que el fuerte rompe cuando quiere.",
      en: "Peace without deterrence is a truce the strong break whenever they like.",
    },
  },
  {
    id: "th-3",
    axis: "tregua-hierro",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Invertir en escuelas rinde más a largo plazo que invertir en tanques.",
      en: "Investing in schools pays more in the long run than investing in tanks.",
    },
  },
  {
    id: "th-4",
    axis: "tregua-hierro",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Quien no puede defenderse negocia de rodillas, por muy educado que sea.",
      en: "Whoever cannot defend themselves negotiates on their knees, however polite they are.",
    },
  },
  {
    id: "th-5",
    axis: "tregua-hierro",
    weight: 1,
    direction: "A",
    text: {
      es: "Ceder en una negociación no es perder: es comprar tiempo sin muertos.",
      en: "Conceding in a negotiation is not losing: it is buying time without bodies.",
    },
  },
  {
    id: "th-6",
    axis: "tregua-hierro",
    weight: 1,
    direction: "B",
    text: {
      es: "El respeto internacional se gana mostrando dientes, no sonrisas.",
      en: "International respect is earned by showing teeth, not smiles.",
    },
  },
  {
    id: "th-7",
    axis: "tregua-hierro",
    weight: 1,
    direction: "A",
    text: {
      es: "El gasto militar desmedido es robarle a los vivos para asustar a los imaginarios.",
      en: "Excessive military spending steals from the living to frighten the imaginary.",
    },
  },
  {
    id: "th-8",
    axis: "tregua-hierro",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Un país sin ejército es una casa sin puerta en una calle peligrosa.",
      en: "A country without an army is a house without a door on a dangerous street.",
    },
  },
  {
    id: "th-9",
    axis: "tregua-hierro",
    weight: 0.8,
    direction: "A",
    text: {
      es: "Los conflictos se apagan con oficio diplomático, no con desfiles.",
      en: "Conflicts are put out with diplomatic craft, not parades.",
    },
  },
  {
    id: "th-10",
    axis: "tregua-hierro",
    weight: 1,
    direction: "B",
    text: {
      es: "La historia la escriben quienes pudieron defender lo suyo.",
      en: "History is written by those who could defend their own.",
    },
  },

  // ─── Umbral ↔ Cruzada ───
  {
    id: "uc-1",
    axis: "umbral-cruzada",
    weight: 1,
    direction: "A",
    text: {
      es: "Cada pueblo debe arreglar sus propios demonios, sin padrinos extranjeros.",
      en: "Every people should sort out its own demons, without foreign godparents.",
    },
  },
  {
    id: "uc-2",
    axis: "umbral-cruzada",
    weight: 1,
    direction: "B",
    text: {
      es: "Hay injusticias que no entienden de fronteras ni de pasaportes.",
      en: "There are injustices that know no borders and no passports.",
    },
  },
  {
    id: "uc-3",
    axis: "umbral-cruzada",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Meterse en las guerras ajenas suele crear más problemas de los que resuelve.",
      en: "Meddling in others' wars usually creates more problems than it solves.",
    },
  },
  {
    id: "uc-4",
    axis: "umbral-cruzada",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Quedarse quieto ante un genocidio también es tomar partido.",
      en: "Standing still in the face of genocide is also taking a side.",
    },
  },
  {
    id: "uc-5",
    axis: "umbral-cruzada",
    weight: 1,
    direction: "A",
    text: {
      es: "El intervencionismo humanitario suele ser imperialismo con buena prensa.",
      en: "Humanitarian interventionism is usually imperialism with good press.",
    },
  },
  {
    id: "uc-6",
    axis: "umbral-cruzada",
    weight: 1,
    direction: "B",
    text: {
      es: "Si tienes el poder de parar una barbarie y no lo haces, eres cómplice.",
      en: "If you have the power to stop a barbarity and don't, you are complicit.",
    },
  },
  {
    id: "uc-7",
    axis: "umbral-cruzada",
    weight: 1,
    direction: "A",
    text: {
      es: "Nadie entiende mejor un conflicto que quienes viven dentro de él.",
      en: "No one understands a conflict better than those who live inside it.",
    },
  },
  {
    id: "uc-8",
    axis: "umbral-cruzada",
    weight: 1.2,
    direction: "B",
    text: {
      es: "El aislamiento es un lujo que no se puede pagar cuando el vecino arde.",
      en: "Isolation is a luxury you cannot afford when your neighbour is burning.",
    },
  },
  {
    id: "uc-9",
    axis: "umbral-cruzada",
    weight: 0.8,
    direction: "A",
    text: {
      es: "Exportar un modelo político a la fuerza es otra forma de colonialismo.",
      en: "Exporting a political model by force is another form of colonialism.",
    },
  },
  {
    id: "uc-10",
    axis: "umbral-cruzada",
    weight: 1,
    direction: "B",
    text: {
      es: "La responsabilidad de proteger no termina en la propia vereda.",
      en: "The responsibility to protect does not end at your own sidewalk.",
    },
  },

  // ─── Lo común ↔ Lo mío ───
  {
    id: "cm-1",
    axis: "comun-mio",
    weight: 1,
    direction: "A",
    text: {
      es: "La salud no debería depender del grosor de la cartera.",
      en: "Health should not depend on the thickness of one's wallet.",
    },
  },
  {
    id: "cm-2",
    axis: "comun-mio",
    weight: 1,
    direction: "B",
    text: {
      es: "Lo que es de todos no es de nadie, y lo que no es de nadie se descuida.",
      en: "What belongs to everyone belongs to nobody, and what belongs to nobody is neglected.",
    },
  },
  {
    id: "cm-3",
    axis: "comun-mio",
    weight: 1.2,
    direction: "A",
    text: {
      es: "El agua, las calles y el conocimiento son demasiado importantes para tener dueño.",
      en: "Water, streets and knowledge are too important to have an owner.",
    },
  },
  {
    id: "cm-4",
    axis: "comun-mio",
    weight: 0.8,
    direction: "B",
    text: {
      es: "La propiedad privada es el mejor invento para cuidar lo que importa.",
      en: "Private property is the best invention for caring about what matters.",
    },
  },
  {
    id: "cm-5",
    axis: "comun-mio",
    weight: 1,
    direction: "A",
    text: {
      es: "Un país con servicios públicos fuertes es más libre que uno con impuestos bajos.",
      en: "A country with strong public services is freer than one with low taxes.",
    },
  },
  {
    id: "cm-6",
    axis: "comun-mio",
    weight: 1,
    direction: "B",
    text: {
      es: "El que paga su casa, su médico y su colegio no depende del Estado.",
      en: "Whoever pays for their own home, doctor and school does not depend on the state.",
    },
  },
  {
    id: "cm-7",
    axis: "comun-mio",
    weight: 1,
    direction: "A",
    text: {
      es: "La caridad privada no alcanza: los derechos no pueden depender de la buena voluntad.",
      en: "Private charity is not enough: rights cannot depend on goodwill.",
    },
  },
  {
    id: "cm-8",
    axis: "comun-mio",
    weight: 1.2,
    direction: "B",
    text: {
      es: "El Estado que lo promete todo termina sin cumplir nada.",
      en: "The state that promises everything ends up delivering nothing.",
    },
  },
  {
    id: "cm-9",
    axis: "comun-mio",
    weight: 0.8,
    direction: "A",
    text: {
      es: "Los bienes comunes se defienden con normas, no con cercas.",
      en: "The commons are defended with rules, not fences.",
    },
  },
  {
    id: "cm-10",
    axis: "comun-mio",
    weight: 1,
    direction: "B",
    text: {
      es: "La iniciativa privada hace florecer donde lo público solo administra.",
      en: "Private initiative makes flourish where the public merely administers.",
    },
  },

  // ─── Plan ↔ Precio ───
  {
    id: "pp-1",
    axis: "plan-precio",
    weight: 1,
    direction: "A",
    text: {
      es: "La economía necesita una brújula: objetivos claros, no solo señales de precio.",
      en: "The economy needs a compass: clear goals, not just price signals.",
    },
  },
  {
    id: "pp-2",
    axis: "plan-precio",
    weight: 1,
    direction: "B",
    text: {
      es: "Ningún ministerio puede saber más que millones de precios dialogando a la vez.",
      en: "No ministry can know more than millions of prices talking at once.",
    },
  },
  {
    id: "pp-3",
    axis: "plan-precio",
    weight: 1.2,
    direction: "A",
    text: {
      es: "El mercado solo ve el beneficio; el plan puede ver el futuro.",
      en: "The market only sees profit; the plan can see the future.",
    },
  },
  {
    id: "pp-4",
    axis: "plan-precio",
    weight: 0.8,
    direction: "B",
    text: {
      es: "La planificación central produce escasez con buena intención.",
      en: "Central planning produces scarcity with good intentions.",
    },
  },
  {
    id: "pp-5",
    axis: "plan-precio",
    weight: 1,
    direction: "A",
    text: {
      es: "Hay sectores demasiado estratégicos para dejarlos al capricho del mercado.",
      en: "There are sectors too strategic to leave to the market's whim.",
    },
  },
  {
    id: "pp-6",
    axis: "plan-precio",
    weight: 1,
    direction: "B",
    text: {
      es: "El emprendedor que arriesga sabe más que el burócrata que regula.",
      en: "The entrepreneur who takes risks knows more than the bureaucrat who regulates.",
    },
  },
  {
    id: "pp-7",
    axis: "plan-precio",
    weight: 1,
    direction: "A",
    text: {
      es: "La especulación desbocada es un impuesto a los que no tienen cómo defenderse.",
      en: "Rampant speculation is a tax on those who cannot defend themselves.",
    },
  },
  {
    id: "pp-8",
    axis: "plan-precio",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Quien fija precios desde un despacho siempre llega tarde y se equivoca.",
      en: "Whoever sets prices from an office always arrives late and gets it wrong.",
    },
  },
  {
    id: "pp-9",
    axis: "plan-precio",
    weight: 0.8,
    direction: "A",
    text: {
      es: "La transición energética no la hace el mercado: la hacen las decisiones.",
      en: "The energy transition is not made by the market: it is made by decisions.",
    },
  },
  {
    id: "pp-10",
    axis: "plan-precio",
    weight: 1,
    direction: "B",
    text: {
      es: "La competencia bien regulada resuelve más problemas que mil planes quinquenales.",
      en: "Well-regulated competition solves more problems than a thousand five-year plans.",
    },
  },

  // ─── Muralla ↔ Puerto ───
  {
    id: "mp-1",
    axis: "muralla-puerto",
    weight: 1,
    direction: "A",
    text: {
      es: "Proteger la industria propia no es cerrarse: es no depender de otros para lo esencial.",
      en: "Protecting your own industry is not closing up: it is not depending on others for essentials.",
    },
  },
  {
    id: "mp-2",
    axis: "muralla-puerto",
    weight: 1,
    direction: "B",
    text: {
      es: "El libre comercio ha sacado de la pobreza a más gente que todos los discursos.",
      en: "Free trade has lifted more people out of poverty than all speeches combined.",
    },
  },
  {
    id: "mp-3",
    axis: "muralla-puerto",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Un país que no produce lo que come es un país a merced de los demás.",
      en: "A country that does not produce what it eats is at everyone else's mercy.",
    },
  },
  {
    id: "mp-4",
    axis: "muralla-puerto",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Los aranceles son un impuesto disfrazado al consumidor propio.",
      en: "Tariffs are a disguised tax on your own consumer.",
    },
  },
  {
    id: "mp-5",
    axis: "muralla-puerto",
    weight: 1,
    direction: "A",
    text: {
      es: "La moneda propia es soberanía; sin ella, se gobierna de prestado.",
      en: "Your own currency is sovereignty: without it, you govern on loan.",
    },
  },
  {
    id: "mp-6",
    axis: "muralla-puerto",
    weight: 1,
    direction: "B",
    text: {
      es: "Las cadenas globales de suministro hacen las guerras más caras y más raras.",
      en: "Global supply chains make wars more expensive and rarer.",
    },
  },
  {
    id: "mp-7",
    axis: "muralla-puerto",
    weight: 1,
    direction: "A",
    text: {
      es: "Depender de un solo proveedor extranjero es una bomba de relojería.",
      en: "Depending on a single foreign supplier is a time bomb.",
    },
  },
  {
    id: "mp-8",
    axis: "muralla-puerto",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Abrir la economía es abrir la mente: el proteccionismo encierra ambas.",
      en: "Opening the economy opens the mind: protectionism closes both.",
    },
  },
  {
    id: "mp-9",
    axis: "muralla-puerto",
    weight: 0.8,
    direction: "A",
    text: {
      es: "El campo que no se defiende desaparece bajo el asfalto y las importaciones.",
      en: "The countryside that is not defended disappears under asphalt and imports.",
    },
  },
  {
    id: "mp-10",
    axis: "muralla-puerto",
    weight: 1,
    direction: "B",
    text: {
      es: "El puerto abierto enriquece al país; la muralla, solo a los que la cobran.",
      en: "The open port enriches the country; the wall only enriches those who man it.",
    },
  },

  // ─── Altar ↔ Taller ───
  {
    id: "at-1",
    axis: "altar-taller",
    weight: 1,
    direction: "A",
    text: {
      es: "La vida pública necesita un techo de sentido que el contrato social no da.",
      en: "Public life needs a ceiling of meaning that the social contract does not provide.",
    },
  },
  {
    id: "at-2",
    axis: "altar-taller",
    weight: 1,
    direction: "B",
    text: {
      es: "La república se sostiene sobre la razón, no sobre el incienso.",
      en: "The republic rests on reason, not on incense.",
    },
  },
  {
    id: "at-3",
    axis: "altar-taller",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Una sociedad sin trascendencia se queda sin brújula moral.",
      en: "A society without transcendence is left without a moral compass.",
    },
  },
  {
    id: "at-4",
    axis: "altar-taller",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Mezclar lo sagrado con la política ha quemado más que iluminado.",
      en: "Mixing the sacred with politics has burned more than it has lit.",
    },
  },
  {
    id: "at-5",
    axis: "altar-taller",
    weight: 1,
    direction: "A",
    text: {
      es: "El ritual y la memoria colectiva atan a las generaciones entre sí.",
      en: "Ritual and collective memory tie the generations together.",
    },
  },
  {
    id: "at-6",
    axis: "altar-taller",
    weight: 1,
    direction: "B",
    text: {
      es: "El laicismo bien entendido es el único suelo donde todos pueden pisar.",
      en: "Secularism, properly understood, is the only ground where everyone can stand.",
    },
  },
  {
    id: "at-7",
    axis: "altar-taller",
    weight: 1,
    direction: "A",
    text: {
      es: "Las fiestas y los símbolos compartidos son el pegamento de una nación.",
      en: "Shared festivals and symbols are the glue of a nation.",
    },
  },
  {
    id: "at-8",
    axis: "altar-taller",
    weight: 1.2,
    direction: "B",
    text: {
      es: "El Estado no debe tener religión oficial, ni siquiera la de la mayoría.",
      en: "The state should have no official religion, not even that of the majority.",
    },
  },
  {
    id: "at-9",
    axis: "altar-taller",
    weight: 0.8,
    direction: "A",
    text: {
      es: "Lo sagrado recuerda al poder que hay algo por encima de él.",
      en: "The sacred reminds the power that there is something above it.",
    },
  },
  {
    id: "at-10",
    axis: "altar-taller",
    weight: 1,
    direction: "B",
    text: {
      es: "La ética no necesita altar: necesita argumentos y consecuencias.",
      en: "Ethics needs no altar: it needs arguments and consequences.",
    },
  },

  // ─── Herencia ↔ Quiebre ───
  {
    id: "hq-1",
    axis: "herencia-quiebre",
    weight: 1,
    direction: "A",
    text: {
      es: "Somos herederos de un edificio que habitamos: se reforma, no se demuele.",
      en: "We are heirs to a building we inhabit: it is renovated, not demolished.",
    },
  },
  {
    id: "hq-2",
    axis: "herencia-quiebre",
    weight: 1,
    direction: "B",
    text: {
      es: "A veces la tradición es solo el nombre elegante de la costumbre de no cambiar.",
      en: "Sometimes tradition is just the elegant name for the habit of not changing.",
    },
  },
  {
    id: "hq-3",
    axis: "herencia-quiebre",
    weight: 1.2,
    direction: "A",
    text: {
      es: "Quien desprecia el pasado de sus padres empieza de cero y suele terminar peor.",
      en: "Whoever scorns their parents' past starts from zero and often ends up worse.",
    },
  },
  {
    id: "hq-4",
    axis: "herencia-quiebre",
    weight: 0.8,
    direction: "B",
    text: {
      es: "Las instituciones viejas cargan los vicios de quienes las inventaron.",
      en: "Old institutions carry the vices of those who invented them.",
    },
  },
  {
    id: "hq-5",
    axis: "herencia-quiebre",
    weight: 1,
    direction: "A",
    text: {
      es: "La continuidad moral entre generaciones es un bien frágil que hay que cuidar.",
      en: "Moral continuity between generations is a fragile good worth caring for.",
    },
  },
  {
    id: "hq-6",
    axis: "herencia-quiebre",
    weight: 1,
    direction: "B",
    text: {
      es: "El progreso exige romperle el espejo al pasado de vez en cuando.",
      en: "Progress demands breaking the past's mirror from time to time.",
    },
  },
  {
    id: "hq-7",
    axis: "herencia-quiebre",
    weight: 1,
    direction: "A",
    text: {
      es: "Las revoluciones que lo queman todo suelen heredar lo que odiaban.",
      en: "Revolutions that burn everything usually inherit what they hated.",
    },
  },
  {
    id: "hq-8",
    axis: "herencia-quiebre",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Hay herencias que son deudas: lo que los padres disfrutaron, los hijos lo pagan.",
      en: "Some inheritances are debts: what the parents enjoyed, the children pay for.",
    },
  },
  {
    id: "hq-9",
    axis: "herencia-quiebre",
    weight: 0.8,
    direction: "A",
    text: {
      es: "El respeto por los mayores es el primer capítulo de la educación cívica.",
      en: "Respect for elders is the first chapter of civic education.",
    },
  },
  {
    id: "hq-10",
    axis: "herencia-quiebre",
    weight: 1,
    direction: "B",
    text: {
      es: "El futuro no se construye sobre las ruinas: se construye a pesar de ellas.",
      en: "The future is not built on ruins: it is built in spite of them.",
    },
  },

  // ─── Órgano ↔ Circuito ───
  {
    id: "oc-1",
    axis: "organo-circuito",
    weight: 1,
    direction: "A",
    text: {
      es: "Hay experimentos que no deberían hacerse porque no se pueden deshacer.",
      en: "There are experiments that should not be done because they cannot be undone.",
    },
  },
  {
    id: "oc-2",
    axis: "organo-circuito",
    weight: 1,
    direction: "B",
    text: {
      es: "La velocidad tecnológica es el tren de la historia: quien lo pierde, lo pierde todo.",
      en: "Technological speed is the train of history: whoever misses it, misses everything.",
    },
  },
  {
    id: "oc-3",
    axis: "organo-circuito",
    weight: 1.2,
    direction: "A",
    text: {
      es: "La ingeniería genética en humanos abre una caja que no tiene fondo.",
      en: "Human genetic engineering opens a box with no bottom.",
    },
  },
  {
    id: "oc-4",
    axis: "organo-circuito",
    weight: 0.8,
    direction: "B",
    text: {
      es: "La precaución excesiva es el lujo de quien no tiene prisa.",
      en: "Excessive caution is the luxury of those in no hurry.",
    },
  },
  {
    id: "oc-5",
    axis: "organo-circuito",
    weight: 1,
    direction: "A",
    text: {
      es: "El cuerpo y la mente no son hardware que se actualiza sin más.",
      en: "Body and mind are not hardware to be updated just like that.",
    },
  },
  {
    id: "oc-6",
    axis: "organo-circuito",
    weight: 1,
    direction: "B",
    text: {
      es: "La inteligencia artificial bien hecha puede curar más que cien ministerios.",
      en: "Well-made artificial intelligence can cure more than a hundred ministries.",
    },
  },
  {
    id: "oc-7",
    axis: "organo-circuito",
    weight: 1,
    direction: "A",
    text: {
      es: "La naturaleza no es un error que la técnica vino a corregir.",
      en: "Nature is not a mistake that technique came to correct.",
    },
  },
  {
    id: "oc-8",
    axis: "organo-circuito",
    weight: 1.2,
    direction: "B",
    text: {
      es: "Regular la tecnología después de inventarla es llegar con el agua al cuello.",
      en: "Regulating technology after inventing it is arriving with water up to your neck.",
    },
  },
  {
    id: "oc-9",
    axis: "organo-circuito",
    weight: 0.8,
    direction: "A",
    text: {
      es: "El límite ético a la ciencia no es un freno: es la condición para que sea ciencia.",
      en: "The ethical limit on science is not a brake: it is the condition for it to be science.",
    },
  },
  {
    id: "oc-10",
    axis: "organo-circuito",
    weight: 1,
    direction: "B",
    text: {
      es: "El progreso no se vota: se construye, y a veces se construye de noche.",
      en: "Progress is not voted on: it is built, and sometimes built at night.",
    },
  },
];

export const QUESTIONS_BY_AXIS: Record<AxisId, Question[]> = QUESTIONS.reduce(
  (acc, q) => {
    (acc[q.axis] ??= []).push(q);
    return acc;
  },
  {} as Record<AxisId, Question[]>,
);
