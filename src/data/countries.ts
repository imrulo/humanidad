import type { Lang, Scores } from "./axes";

export type ArchetypeKind = "pais" | "ciudad-estado" | "epoca" | "region";

export interface Archetype {
  id: string;
  name: Record<Lang, string>;
  kind: ArchetypeKind;
  summary: Record<Lang, string>;
  vector: Scores;
  tint: string;
}

const v = (partial: Partial<Scores>): Scores => ({
  "hogar-imperio": 50,
  "asamblea-cetro": 50,
  "desorden-orden": 50,
  "raiz-transito": 50,
  "tregua-hierro": 50,
  "umbral-cruzada": 50,
  "comun-mio": 50,
  "plan-precio": 50,
  "muralla-puerto": 50,
  "altar-taller": 50,
  "herencia-quiebre": 50,
  "organo-circuito": 50,
  ...partial,
});

/**
 * Arquetipos cultural-políticos, NO promedios científicos de encuestas.
 * Sirven como espejo aproximado, no como diagnóstico empírico.
 */
export const ARCHETYPES: Archetype[] = [
  {
    id: "islandia-medieval",
    name: { es: "Islandia medieval", en: "Medieval Iceland" },
    kind: "epoca",
    summary: {
      es: "Una república de campesinos con Althing y sin rey: poder disperso, venganza privada regulada y poetas que hacían las veces de constitución.",
      en: "A republic of free farmers with an Althing and no king: dispersed power, regulated blood feud, and poets serving as constitution.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 20, "desorden-orden": 35, "raiz-transito": 60, "tregua-hierro": 40, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 30, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#7fa8a0",
  },
  {
    id: "suiza-contemporanea",
    name: { es: "Suiza contemporánea", en: "Contemporary Switzerland" },
    kind: "pais",
    summary: {
      es: "Federalismo extremo, referéndums constantes y neutralidad armada. El poder vive en los cantones y el pueblo vetando leyes.",
      en: "Extreme federalism, constant referendums and armed neutrality. Power lives in the cantons and the people vetoing laws.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 25, "desorden-orden": 55, "raiz-transito": 55, "tregua-hierro": 45, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#c96a6a",
  },
  {
    id: "singapur",
    name: { es: "Singapur", en: "Singapore" },
    kind: "pais",
    summary: {
      es: "Autoritarismo tecnocrático con economía abierta: mano dura en lo social, puerto franco en lo económico y limpieza ejemplar en las calles.",
      en: "Technocratic authoritarianism with an open economy: firm hand in society, free port in economics, exemplary cleanliness in the streets.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 75, "desorden-orden": 85, "raiz-transito": 40, "tregua-hierro": 55, "comun-mio": 45, "plan-precio": 35, "muralla-puerto": 20, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#c9b06a",
  },
  {
    id: "liechtenstein",
    name: { es: "Liechtenstein", en: "Liechtenstein" },
    kind: "pais",
    summary: {
      es: "Principado diminuto con monarca fuerte, impuestos bajos y bancos discretos. El poder es familiar y la neutralidad, una tradición rentable.",
      en: "Tiny principality with a strong monarch, low taxes and discreet banks. Power is familial and neutrality a profitable tradition.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 60, "desorden-orden": 55, "raiz-transito": 60, "tregua-hierro": 40, "comun-mio": 35, "plan-precio": 25, "muralla-puerto": 25, "altar-taller": 60, "herencia-quiebre": 65 }),
    tint: "#b08cc9",
  },
  {
    id: "wyoming",
    name: { es: "Wyoming", en: "Wyoming" },
    kind: "region",
    summary: {
      es: "El estado más vacío de Estados Unidos: individualismo duro, desconfianza del gobierno federal y cielos que no perdonan la debilidad.",
      en: "The emptiest state in the US: hard individualism, distrust of the federal government and skies that forgive no weakness.",
    },
    vector: v({ "hogar-imperio": 20, "asamblea-cetro": 35, "desorden-orden": 30, "raiz-transito": 55, "tregua-hierro": 50, "comun-mio": 20, "plan-precio": 20, "muralla-puerto": 30, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#c98a5e",
  },
  {
    id: "vermont",
    name: { es: "Vermont", en: "Vermont" },
    kind: "region",
    summary: {
      es: "Pueblos pequeños, reuniones municipales y una ética de autosuficiencia con conciencia ecológica. La comunidad se gobierna en persona.",
      en: "Small towns, town meetings and an ethic of self-sufficiency with ecological awareness. The community governs in person.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 20, "desorden-orden": 40, "raiz-transito": 60, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#8ac98a",
  },
  {
    id: "dubai",
    name: { es: "Dubái", en: "Dubai" },
    kind: "ciudad-estado",
    summary: {
      es: "Monarquía absoluta con rascacielos: cero impuestos, cero disidencia y todo a escala desértica. El lujo es la política.",
      en: "Absolute monarchy with skyscrapers: zero taxes, zero dissent and everything at desert scale. Luxury is the policy.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 80, "desorden-orden": 75, "raiz-transito": 30, "tregua-hierro": 50, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 25, "altar-taller": 45, "herencia-quiebre": 55 }),
    tint: "#c9a05a",
  },
  {
    id: "hong-kong-historico",
    name: { es: "Hong Kong histórico", en: "Historical Hong Kong" },
    kind: "epoca",
    summary: {
      es: "Colonia británica con puerto franco, Estado mínimo y sociedad civil densa. La libertad era un negocio y el negocio, una libertad.",
      en: "British colony with a free port, minimal state and dense civil society. Freedom was a business and business a freedom.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 50, "raiz-transito": 35, "tregua-hierro": 40, "comun-mio": 25, "plan-precio": 20, "muralla-puerto": 15, "altar-taller": 40, "herencia-quiebre": 45 }),
    tint: "#6a8ac9",
  },
  {
    id: "amsterdam-siglo-xvii",
    name: { es: "Ámsterdam siglo XVII", en: "17th-century Amsterdam" },
    kind: "epoca",
    summary: {
      es: "República mercantile donde los regentes negociaban más que los reyes. Tolerancia religiosa a cambio de orden y comercio.",
      en: "Mercantile republic where regents bargained more than kings. Religious tolerance in exchange for order and trade.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 35, "tregua-hierro": 40, "comun-mio": 35, "plan-precio": 25, "muralla-puerto": 20, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#c98ab0",
  },
  {
    id: "venecia",
    name: { es: "Venecia", en: "Venice" },
    kind: "ciudad-estado",
    summary: {
      es: "República aristocrática de mercaderes con un doge vitalicio y un consejo que lo vigilaba. El poder se equilibraba para que nadie lo tuviera.",
      en: "Aristocratic merchant republic with a lifetime doge and a council watching him. Power was balanced so no one would hold it.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 50, "tregua-hierro": 45, "comun-mio": 40, "plan-precio": 30, "muralla-puerto": 25, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#6a8ac9",
  },
  {
    id: "genova",
    name: { es: "Génova", en: "Genoa" },
    kind: "ciudad-estado",
    summary: {
      es: "Banqueros y armadores que gobernaban sin ejército propio. El crédito era la flota y la república, un libro de contabilidad.",
      en: "Bankers and shipowners who governed without their own army. Credit was the fleet and the republic a ledger.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 45, "tregua-hierro": 40, "comun-mio": 30, "plan-precio": 25, "muralla-puerto": 20, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#7fa8a0",
  },
  {
    id: "flandes-medieval",
    name: { es: "Flandes medieval", en: "Medieval Flanders" },
    kind: "epoca",
    summary: {
      es: "Ciudades tejedoras con gremios poderosos y condes que pedían permiso. La riqueza nacía del telar y el poder, del gremio.",
      en: "Weaving cities with powerful guilds and counts who asked permission. Wealth was born of the loom and power of the guild.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 35, "desorden-orden": 50, "raiz-transito": 55, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 30, "altar-taller": 60, "herencia-quiebre": 60 }),
    tint: "#b08cc9",
  },
  {
    id: "cataluna-industrial",
    name: { es: "Cataluña industrial", en: "Industrial Catalonia" },
    kind: "epoca",
    summary: {
      es: "Fábricas, ateneos y cooperativas: obreros que leían y burgueses que construían. La modernidad llegó en tren y se quedó en la fábrica.",
      en: "Factories, athenaeums and cooperatives: workers who read and bourgeois who built. Modernity arrived by train and stayed in the factory.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 40, "desorden-orden": 50, "raiz-transito": 50, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#c98a5e",
  },
  {
    id: "quebec",
    name: { es: "Quebec", en: "Quebec" },
    kind: "region",
    summary: {
      es: "Nación sin Estado con lengua propia, Estado de bienestar y laicismo reciente. La identidad se defiende en la escuela y en la ley.",
      en: "A nation without a state, with its own language, welfare state and recent secularism. Identity is defended in school and in law.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 65, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 45, "herencia-quiebre": 60 }),
    tint: "#6a8ac9",
  },
  {
    id: "irlanda",
    name: { es: "Irlanda", en: "Ireland" },
    kind: "pais",
    summary: {
      es: "Isla católica con historia de ocupación, emigración masiva y un Estado que se modernizó tarde. La identidad es religiosa y la desconfianza, histórica.",
      en: "Catholic island with a history of occupation, mass emigration and a state that modernised late. Identity is religious and distrust historical.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 55, "raiz-transito": 70, "tregua-hierro": 45, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 75, "herencia-quiebre": 65 }),
    tint: "#5a8a5a",
  },
  {
    id: "nueva-zelanda",
    name: { es: "Nueva Zelanda", en: "New Zealand" },
    kind: "pais",
    summary: {
      es: "Laboratorio social en el Pacífico: reformas audaces, aislamiento geográfico y un pragmatismo que desconfía de las ideologías.",
      en: "Social laboratory in the Pacific: bold reforms, geographic isolation and a pragmatism that distrusts ideologies.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 45, "tregua-hierro": 40, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#7fa8a0",
  },
  {
    id: "uruguay",
    name: { es: "Uruguay", en: "Uruguay" },
    kind: "pais",
    summary: {
      es: "República de clases medias con Estado de bienestar temprano y laicismo militante. El fútbol y la política son las dos religiones.",
      en: "Republic of the middle classes with an early welfare state and militant secularism. Football and politics are the two religions.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 50, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 40, "herencia-quiebre": 50 }),
    tint: "#6a8ac9",
  },
  {
    id: "chile-liberal",
    name: { es: "Chile liberal", en: "Liberal Chile" },
    kind: "epoca",
    summary: {
      es: "República portaliana con orden fuerte, propiedad privada sagrada y un Congreso que discutía. El orden era la condición del progreso.",
      en: "Portalian republic with strong order, sacred private property and a debating Congress. Order was the condition of progress.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 55, "desorden-orden": 70, "raiz-transito": 55, "tregua-hierro": 55, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 40, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#c98a5e",
  },
  {
    id: "argentina-liberal-reformista",
    name: { es: "Argentina liberal-reformista", en: "Liberal-reformist Argentina" },
    kind: "epoca",
    summary: {
      es: "Generación del 80: inmigración masiva, ferrocarril y escuela pública laica. El progreso se medía en trenes y en alumnos.",
      en: "Generation of 1880: mass immigration, railways and secular public school. Progress was measured in trains and students.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 30, "tregua-hierro": 50, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 30, "altar-taller": 40, "herencia-quiebre": 50 }),
    tint: "#c9b06a",
  },
  {
    id: "costa-rica",
    name: { es: "Costa Rica", en: "Costa Rica" },
    kind: "pais",
    summary: {
      es: "Sin ejército desde 1948, con escuelas y clínicas en cada pueblo. La abolición de las armas fue la apuesta por la palabra.",
      en: "Without an army since 1948, with schools and clinics in every town. The abolition of arms was a bet on the word.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 50, "tregua-hierro": 25, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#8ac98a",
  },
  {
    id: "botsuana",
    name: { es: "Botsuana", en: "Botswana" },
    kind: "pais",
    summary: {
      es: "Democracia estable con diamantes y gestión prudente. La tradición tribal y el Estado moderno se repartieron el poder sin romperse.",
      en: "Stable democracy with diamonds and prudent management. Tribal tradition and the modern state shared power without breaking.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 60, "tregua-hierro": 45, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#c9a05a",
  },
  {
    id: "estonia-digital",
    name: { es: "Estonia digital", en: "Digital Estonia" },
    kind: "pais",
    summary: {
      es: "El Estado que cabe en un chip: voto electrónico, servicios digitales y desconfianza histórica del vecino grande. La tecnología como escudo.",
      en: "The state that fits on a chip: e-voting, digital services and historical distrust of the big neighbour. Technology as shield.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 50, "raiz-transito": 45, "tregua-hierro": 50, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 30, "altar-taller": 40, "herencia-quiebre": 50, "organo-circuito": 65 }),
    tint: "#6a8ac9",
  },
  {
    id: "corea-del-sur",
    name: { es: "Corea del Sur", en: "South Korea" },
    kind: "pais",
    summary: {
      es: "Milagro industrial con chaebols, educación férrea y una frontera que no perdona. El esfuerzo es la religión y el examen, el rito.",
      en: "Industrial miracle with chaebols, iron education and a border that forgives nothing. Effort is the religion and the exam the rite.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 60, "desorden-orden": 70, "raiz-transito": 55, "tregua-hierro": 60, "comun-mio": 40, "plan-precio": 30, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#c96a6a",
  },
  {
    id: "japon-meiji",
    name: { es: "Japón Meiji", en: "Meiji Japan" },
    kind: "epoca",
    summary: {
      es: "Modernización sin occidentalización: emperador restaurado, industria estatal y samuráis con corbata. El progreso con kimono.",
      en: "Modernisation without Westernisation: restored emperor, state industry and samurai in ties. Progress in a kimono.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 65, "desorden-orden": 70, "raiz-transito": 65, "tregua-hierro": 60, "comun-mio": 40, "plan-precio": 30, "muralla-puerto": 40, "altar-taller": 65, "herencia-quiebre": 60 }),
    tint: "#c98a5e",
  },
  {
    id: "taiwan",
    name: { es: "Taiwán", en: "Taiwan" },
    kind: "pais",
    summary: {
      es: "Isla que se hizo fábrica y democracia a la vez. La amenaza externa unió a la sociedad y la tecnología la hizo rica.",
      en: "An island that became a factory and a democracy at once. The external threat united society and technology made it rich.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 50, "tregua-hierro": 55, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 30, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#7fa8a0",
  },
  {
    id: "israel",
    name: { es: "Israel", en: "Israel" },
    kind: "pais",
    summary: {
      es: "Estado pionero con kibutzim, servicio militar universal y una diáspora que pesa. La seguridad es la primera política y la innovación, la segunda.",
      en: "Pioneer state with kibbutzim, universal military service and a diaspora that weighs. Security is the first policy and innovation the second.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 55, "desorden-orden": 65, "raiz-transito": 60, "tregua-hierro": 65, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 40, "altar-taller": 55, "herencia-quiebre": 55 }),
    tint: "#c9b06a",
  },
  {
    id: "emiratos",
    name: { es: "Emiratos Árabes", en: "United Arab Emirates" },
    kind: "pais",
    summary: {
      es: "Petroleo, rascacielos y tribus que se modernizaron sin abrir la puerta. El lujo es la identidad y la tradición, el marco.",
      en: "Oil, skyscrapers and tribes that modernised without opening the door. Luxury is the identity and tradition the frame.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 75, "desorden-orden": 70, "raiz-transito": 40, "tregua-hierro": 55, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 30, "altar-taller": 60, "herencia-quiebre": 60 }),
    tint: "#c9a05a",
  },
  {
    id: "monaco",
    name: { es: "Mónaco", en: "Monaco" },
    kind: "ciudad-estado",
    summary: {
      es: "Casino, yates y un príncipe que hace cuentas. El lujo es la industria y la discreción, la ley.",
      en: "Casino, yachts and a prince who does the accounts. Luxury is the industry and discretion the law.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 65, "desorden-orden": 55, "raiz-transito": 40, "tregua-hierro": 40, "comun-mio": 30, "plan-precio": 25, "muralla-puerto": 20, "altar-taller": 50, "herencia-quiebre": 60 }),
    tint: "#b08cc9",
  },
  {
    id: "andorra",
    name: { es: "Andorra", en: "Andorra" },
    kind: "pais",
    summary: {
      es: "Coprincipado de montaña con dos jefes de Estado y una sola parroquia que se conoce. El poder es pequeño y la nieve, grande.",
      en: "Mountain co-principality with two heads of state and one parish that knows itself. Power is small and the snow is big.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 50, "desorden-orden": 50, "raiz-transito": 55, "tregua-hierro": 35, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 25, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#8fb8a8",
  },
  {
    id: "san-marino",
    name: { es: "San Marino", en: "San Marino" },
    kind: "ciudad-estado",
    summary: {
      es: "La república más vieja del mundo, con dos capitanes regentes cada seis meses. La tradición es la constitución y la montaña, el muro.",
      en: "The oldest republic in the world, with two captains regent every six months. Tradition is the constitution and the mountain the wall.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 40, "desorden-orden": 50, "raiz-transito": 60, "tregua-hierro": 40, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 30, "altar-taller": 60, "herencia-quiebre": 70 }),
    tint: "#c98a5e",
  },
  {
    id: "islandia-contemporanea",
    name: { es: "Islandia contemporánea", en: "Contemporary Iceland" },
    kind: "pais",
    summary: {
      es: "Islandia moderna: Estado de bienestar nórdico, pesca regulada y volcanes que recuerdan quién manda. La naturaleza es el límite y la riqueza.",
      en: "Modern Iceland: Nordic welfare state, regulated fishing and volcanoes reminding who is in charge. Nature is the limit and the wealth.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 40, "desorden-orden": 50, "raiz-transito": 55, "tregua-hierro": 35, "comun-mio": 45, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 45, "herencia-quiebre": 55 }),
    tint: "#7fa8a0",
  },
  {
    id: "dinamarca",
    name: { es: "Dinamarca", en: "Denmark" },
    kind: "pais",
    summary: {
      es: "Hygge y Estado de bienestar: confianza alta, impuestos altos y una sonrisa que esconde un contrato social sólido.",
      en: "Hygge and welfare state: high trust, high taxes and a smile hiding a solid social contract.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 50, "tregua-hierro": 40, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#6a8ac9",
  },
  {
    id: "noruega",
    name: { es: "Noruega", en: "Norway" },
    kind: "pais",
    summary: {
      es: "Petróleo, fiordos y un fondo soberano que piensa en las generaciones que no nacieron. La riqueza se guarda y la naturaleza se respeta.",
      en: "Oil, fjords and a sovereign fund thinking of generations not yet born. Wealth is saved and nature respected.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 50, "tregua-hierro": 40, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#7fa8a0",
  },
  {
    id: "finlandia",
    name: { es: "Finlandia", en: "Finlandia" },
    kind: "pais",
    summary: {
      es: "Sauna, silencio y una educación que es la envidia del mundo. La confianza social se construye en la escuela y se prueba en el invierno.",
      en: "Sauna, silence and an education that is the envy of the world. Social trust is built in school and tested in winter.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 50, "tregua-hierro": 45, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#8fb8a8",
  },
  {
    id: "portugal",
    name: { es: "Portugal", en: "Portugal" },
    kind: "pais",
    summary: {
      es: "Fado, azulejos y una revolución de claveles que se hizo sin balas. La nostalgia es la patria y la mesa, el parlamento.",
      en: "Fado, tiles and a carnation revolution made without bullets. Nostalgia is the homeland and the table the parliament.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 60, "tregua-hierro": 35, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 60, "herencia-quiebre": 60 }),
    tint: "#c98a5e",
  },
  {
    id: "grecia",
    name: { es: "Grecia", en: "Greece" },
    kind: "pais",
    summary: {
      es: "La cuna de la democracia con una deuda que no perdona. La plaza es el parlamento y la familia, el Estado de bienestar.",
      en: "The cradle of democracy with a debt that forgives nothing. The square is the parliament and the family the welfare state.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 60, "tregua-hierro": 45, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 65, "herencia-quiebre": 60 }),
    tint: "#6a8ac9",
  },
  {
    id: "polonia",
    name: { es: "Polonia", en: "Poland" },
    kind: "pais",
    summary: {
      es: "Un país que perdió el mapa tres veces y conservó la identidad. La Iglesia, la familia y la memoria son los tres pilares.",
      en: "A country that lost its map three times and kept its identity. Church, family and memory are the three pillars.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 60, "raiz-transito": 70, "tregua-hierro": 50, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 45, "altar-taller": 75, "herencia-quiebre": 65 }),
    tint: "#c96a6a",
  },
  {
    id: "republica-checa",
    name: { es: "República Checa", en: "Czech Republic" },
    kind: "pais",
    summary: {
      es: "Cerveza, castillos y un escepticismo que viene de lejos. La desconfianza del poder es la primera virtud cívica.",
      en: "Beer, castles and a scepticism that comes from far away. Distrust of power is the first civic virtue.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 50, "raiz-transito": 50, "tregua-hierro": 45, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#b08cc9",
  },
  {
    id: "georgia",
    name: { es: "Georgia", en: "Georgia" },
    kind: "pais",
    summary: {
      es: "Vino, montañas y una encrucijada que nunca fue encrucijada fácil. La hospitalidad es la ley y la canción, la constitución.",
      en: "Wine, mountains and a crossroads that was never an easy crossroads. Hospitality is the law and the song the constitution.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 65, "tregua-hierro": 45, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 65, "herencia-quiebre": 60 }),
    tint: "#c9a05a",
  },
  {
    id: "mongolia",
    name: { es: "Mongolia", en: "Mongolia" },
    kind: "pais",
    summary: {
      es: "Estepa, caballos y un imperio que fue el más grande y ahora es el más silencioso. El cielo es el techo y la tradición, la ley.",
      en: "Steppe, horses and an empire that was the largest and is now the most silent. The sky is the roof and tradition the law.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 45, "desorden-orden": 45, "raiz-transito": 65, "tregua-hierro": 50, "comun-mio": 35, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#c9b06a",
  },
  {
    id: "butan",
    name: { es: "Bután", en: "Bhutan" },
    kind: "pais",
    summary: {
      es: "Felicidad nacional bruta en lugar de producto interno bruto. El budismo es la constitución y el monarca, el padre.",
      en: "Gross national happiness instead of gross domestic product. Buddhism is the constitution and the monarch the father.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 60, "desorden-orden": 55, "raiz-transito": 70, "tregua-hierro": 40, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 75, "herencia-quiebre": 65 }),
    tint: "#8ac98a",
  },
  {
    id: "kerala",
    name: { es: "Kerala", en: "Kerala" },
    kind: "region",
    summary: {
      es: "Estado indio con alfabetización alta, comunismo democrático y playas que no perdonan. La educación es la revolución y la revolución, cotidiana.",
      en: "Indian state with high literacy, democratic communism and beaches that forgive nothing. Education is the revolution and the revolution daily.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 55, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#5a8a5a",
  },
  {
    id: "escocia",
    name: { es: "Escocia", en: "Scotland" },
    kind: "region",
    summary: {
      es: "Kilts, gaitas y una identidad que cabe en una isla y en una diáspora. El whisky es la exportación y la desconfianza, la tradición.",
      en: "Kilts, bagpipes and an identity that fits on an island and in a diaspora. Whisky is the export and distrust the tradition.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 50, "raiz-transito": 60, "tregua-hierro": 40, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#6a8ac9",
  },
  {
    id: "pais-vasco",
    name: { es: "País Vasco", en: "Basque Country" },
    kind: "region",
    summary: {
      es: "Montañas, pelota y una lengua que sobrevivió a todo. La identidad se defiende en la frontxa y en la cocina.",
      en: "Mountains, pelota and a language that survived everything. Identity is defended in the fronton and in the kitchen.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 40, "desorden-orden": 50, "raiz-transito": 70, "comun-mio": 35, "plan-precio": 40, "muralla-puerto": 35, "altar-taller": 60, "herencia-quiebre": 65 }),
    tint: "#c96a6a",
  },
];
