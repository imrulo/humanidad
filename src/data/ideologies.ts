import type { Lang, Scores } from "./axes";

export type Family =
  | "libertario"
  | "liberal"
  | "social"
  | "conservador"
  | "autoritario"
  | "anarquista"
  | "tecnocultural"
  | "tradicional"
  | "hibrido";

export interface Ideology {
  id: string;
  name: Record<Lang, string>;
  family: Family;
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

export const IDEOLOGIES: Ideology[] = [
  {
    id: "comunalista-hogareno",
    name: { es: "Comunalista hogareño", en: "Home communalist" },
    family: "anarquista",
    summary: {
      es: "Cree que la vida política empieza en la puerta de casa y que todo poder superior es un préstamo revocable. Desconfía de los centros lejanos y de las promesas grandes.",
      en: "Believes political life starts at your own front door and that all higher power is a revocable loan. Distrusts distant centres and grand promises.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 20, "comun-mio": 25, "plan-precio": 35, "muralla-puerto": 30, "herencia-quiebre": 35 }),
    tint: "#a8b06a",
  },
  {
    id: "municipalista",
    name: { es: "Municipalista", en: "Municipalist" },
    family: "libertario",
    summary: {
      es: "Defiende el concejo abierto, la ciudad pequeña como escuela de ciudadanía y la federación de abajo arriba. El poder debe ser vecinal o no ser.",
      en: "Defends the open council, the small city as a school of citizenship, and federation from below. Power should be neighbourly or not exist.",
    },
    vector: v({ "hogar-imperio": 10, "asamblea-cetro": 15, "desorden-orden": 40, "comun-mio": 35, "umbral-cruzada": 20, "herencia-quiebre": 40 }),
    tint: "#8fb8a8",
  },
  {
    id: "anarcosindicalista",
    name: { es: "Anarcosindicalista", en: "Anarcho-syndicalist" },
    family: "anarquista",
    summary: {
      es: "Organiza la emancipación desde el sindicato y la huelga general, sin partidos ni estados. La revolución se ensaya cada día en la fábrica.",
      en: "Organises emancipation through unions and the general strike, without parties or states. The revolution is rehearsed daily in the factory.",
    },
    vector: v({ "hogar-imperio": 20, "asamblea-cetro": 10, "comun-mio": 15, "plan-precio": 25, "tregua-hierro": 35, "herencia-quiebre": 60 }),
    tint: "#c96a6a",
  },
  {
    id: "anarcocomunista",
    name: { es: "Anarcocomunista", en: "Anarcho-communist" },
    family: "anarquista",
    summary: {
      es: "Quiere abolir el Estado y el salario a la vez, y repartir según la necesidad. Confía en la ayuda mutua más que en cualquier constitución.",
      en: "Wants to abolish the state and wages at once, and distribute according to need. Trusts mutual aid more than any constitution.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 10, "comun-mio": 10, "plan-precio": 20, "desorden-orden": 25, "herencia-quiebre": 55 }),
    tint: "#b05a5a",
  },
  {
    id: "liberal-clasico",
    name: { es: "Liberal clásico", en: "Classical liberal" },
    family: "liberal",
    summary: {
      es: "Pone el límite del Estado en la propiedad y la conciencia del individuo. Desconfía por igual del rey, la multitud y el planificador.",
      en: "Sets the limit of the state at the property and conscience of the individual. Distrusts the king, the crowd and the planner alike.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 40, "desorden-orden": 30, "comun-mio": 25, "plan-precio": 20, "muralla-puerto": 30, "altar-taller": 40, "herencia-quiebre": 45 }),
    tint: "#6a8ac9",
  },
  {
    id: "liberal-social",
    name: { es: "Liberal social", en: "Social liberal" },
    family: "liberal",
    summary: {
      es: "Defiende las libertades individuales pero cree que sin un piso de igualdad de oportunidades son papel mojado. El Estado debe nivelar, no mandar.",
      en: "Defends individual freedoms but believes that without a floor of equal opportunity they are wet paper. The state must level, not command.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 35, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#7fa0c9",
  },
  {
    id: "socialdemocrata",
    name: { es: "Socialdemócrata", en: "Social democrat" },
    family: "social",
    summary: {
      es: "Quiere mercado con Estado de bienestar: propiedad privada sí, pero con servicios públicos que la hagan soportable. La libertad necesita colegio y hospital.",
      en: "Wants a market with a welfare state: private property yes, but with public services to make it bearable. Freedom needs school and hospital.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 45, "altar-taller": 50, "herencia-quiebre": 50 }),
    tint: "#5a8ac9",
  },
  {
    id: "socialista-democratico",
    name: { es: "Socialista democrático", en: "Democratic socialist" },
    family: "social",
    summary: {
      es: "Cree que la democracia debe entrar también a la fábrica y al banco. No quiere la dictadura del proletariado, quiere la propiedad social con voto.",
      en: "Believes democracy should enter the factory and the bank too. Does not want the dictatorship of the proletariat, wants social ownership with a vote.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "comun-mio": 30, "plan-precio": 30, "muralla-puerto": 40, "tregua-hierro": 40, "herencia-quiebre": 55 }),
    tint: "#c95a7a",
  },
  {
    id: "comunista-consejista",
    name: { es: "Comunista consejista", en: "Council communist" },
    family: "social",
    summary: {
      es: "Apuesta por los consejos de trabajadores como célula del poder nuevo, contra el partido único. La emancipación no se delega ni se vota una vez cada cuatro años.",
      en: "Bets on workers' councils as the cell of the new power, against the one-party state. Emancipation is neither delegated nor voted once every four years.",
    },
    vector: v({ "hogar-imperio": 25, "asamblea-cetro": 15, "comun-mio": 15, "plan-precio": 20, "herencia-quiebre": 60 }),
    tint: "#c94a4a",
  },
  {
    id: "marxista-leninista",
    name: { es: "Marxista-leninista", en: "Marxist-Leninist" },
    family: "autoritario",
    summary: {
      es: "Cree que la revolución necesita un partido de vanguardia y una dictadura transitoria que no admite vuelta atrás. La historia tiene dirección y hay que empujarla.",
      en: "Believes revolution needs a vanguard party and a transitional dictatorship with no way back. History has a direction and must be pushed.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 75, "comun-mio": 20, "plan-precio": 15, "desorden-orden": 65, "umbral-cruzada": 60, "herencia-quiebre": 70 }),
    tint: "#a83a3a",
  },
  {
    id: "conservador-tradicional",
    name: { es: "Conservador tradicional", en: "Traditional conservative" },
    family: "conservador",
    summary: {
      es: "Trata la sociedad como un organismo que crece, no como un contrato que se firma. Defiende la familia, la Iglesia y las costumbres contra el cambio por decreto.",
      en: "Treats society as an organism that grows, not a contract that is signed. Defends family, Church and customs against change by decree.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 55, "desorden-orden": 70, "raiz-transito": 75, "tregua-hierro": 55, "comun-mio": 45, "plan-precio": 45, "muralla-puerto": 55, "altar-taller": 80, "herencia-quiebre": 85 }),
    tint: "#8a7a5a",
  },
  {
    id: "conservador-nacional",
    name: { es: "Conservador nacional", en: "National conservative" },
    family: "conservador",
    summary: {
      es: "Une la defensa de las tradiciones con la defensa del Estado-nación como marco de ambas. Sospecha de lo supranacional y de lo cosmopolita sin raíces.",
      en: "Joins the defence of traditions with the defence of the nation-state as their frame. Suspects the supranational and the rootless cosmopolitan.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 60, "desorden-orden": 70, "raiz-transito": 80, "tregua-hierro": 60, "comun-mio": 50, "plan-precio": 50, "muralla-puerto": 65, "altar-taller": 75, "herencia-quiebre": 80 }),
    tint: "#7a6a4a",
  },
  {
    id: "democristiano",
    name: { es: "Democristiano", en: "Christian democrat" },
    family: "conservador",
    summary: {
      es: "Busca una tercera vía entre el capitalismo salvaje y el colectivismo, apoyado en la doctrina social de la Iglesia. La persona es anterior al Estado y al mercado.",
      en: "Seeks a third way between savage capitalism and collectivism, resting on the Church's social doctrine. The person precedes both state and market.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 60, "raiz-transito": 60, "comun-mio": 45, "plan-precio": 45, "muralla-puerto": 50, "altar-taller": 75, "herencia-quiebre": 70 }),
    tint: "#9a8a6a",
  },
  {
    id: "monarquico-parlamentario",
    name: { es: "Monárquico parlamentario", en: "Parliamentary monarchist" },
    family: "conservador",
    summary: {
      es: "Defiende la corona como símbolo de continuidad por encima de las elecciones, con el parlamento mandando en lo cotidiano. La legitimidad también puede heredarse.",
      en: "Defends the crown as a symbol of continuity above elections, with parliament ruling the everyday. Legitimacy can also be inherited.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 60, "desorden-orden": 60, "raiz-transito": 65, "comun-mio": 50, "plan-precio": 50, "muralla-puerto": 55, "altar-taller": 70, "herencia-quiebre": 85 }),
    tint: "#8a6a5a",
  },
  {
    id: "autoritario-tecnocrata",
    name: { es: "Autoritario tecnocrático", en: "Technocratic authoritarian" },
    family: "autoritario",
    summary: {
      es: "Cree que la política es un problema de ingeniería y que los expertos deberían gobernar sin ruido electoral. La eficiencia manda; la deliberación entorpece.",
      en: "Believes politics is an engineering problem and experts should govern without electoral noise. Efficiency commands; deliberation hinders.",
    },
    vector: v({ "hogar-imperio": 65, "asamblea-cetro": 80, "desorden-orden": 75, "raiz-transito": 55, "tregua-hierro": 60, "comun-mio": 55, "plan-precio": 30, "muralla-puerto": 50, "altar-taller": 55, "herencia-quiebre": 50 }),
    tint: "#6a6a7a",
  },
  {
    id: "estatalista-desarrollista",
    name: { es: "Estatalista desarrollista", en: "Developmental statist" },
    family: "autoritario",
    summary: {
      es: "Apuesta por un Estado fuerte que industrialice y modernice al país, con mano firme y planificación nacional. La soberanía económica es la primera soberanía.",
      en: "Bets on a strong state that industrialises and modernises the country, with a firm hand and national planning. Economic sovereignty is the first sovereignty.",
    },
    vector: v({ "hogar-imperio": 65, "asamblea-cetro": 70, "desorden-orden": 65, "raiz-transito": 60, "tregua-hierro": 60, "comun-mio": 40, "plan-precio": 25, "muralla-puerto": 70, "altar-taller": 55, "herencia-quiebre": 55 }),
    tint: "#7a5a4a",
  },
  {
    id: "nacional-sindicalista",
    name: { es: "Nacional-sindicalista", en: "National syndicalist" },
    family: "autoritario",
    summary: {
      es: "Quiere un Estado corporativo donde sindicatos y patronos negocien bajo la batuta del interés nacional. Rechaza tanto el liberalismo como la lucha de clases.",
      en: "Wants a corporatist state where unions and employers negotiate under the baton of national interest. Rejects both liberalism and class struggle.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 70, "desorden-orden": 70, "raiz-transito": 70, "tregua-hierro": 65, "comun-mio": 40, "plan-precio": 30, "muralla-puerto": 65, "altar-taller": 65, "herencia-quiebre": 65 }),
    tint: "#6a4a3a",
  },
  {
    id: "anarcocapitalista",
    name: { es: "Anarcocapitalista", en: "Anarcho-capitalist" },
    family: "libertario",
    summary: {
      es: "Cree que hasta la seguridad y la justicia pueden venderse en el mercado y que el Estado es un monopolio innecesario. Todo contrato es legítimo si es voluntario.",
      en: "Believes even security and justice can be sold in the market and the state is an unnecessary monopoly. Every contract is legitimate if voluntary.",
    },
    vector: v({ "hogar-imperio": 20, "asamblea-cetro": 30, "desorden-orden": 25, "comun-mio": 10, "plan-precio": 10, "muralla-puerto": 20, "altar-taller": 35, "herencia-quiebre": 40 }),
    tint: "#c9a05a",
  },
  {
    id: "minarquista",
    name: { es: "Minarquista", en: "Minarchist" },
    family: "libertario",
    summary: {
      es: "Reduce el Estado a policía, tribunales y defensa, y nada más. Todo lo demás puede comprarse, donarse o arreglarse entre particulares.",
      en: "Reduces the state to police, courts and defence, and nothing else. Everything else can be bought, donated or sorted between private parties.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 35, "desorden-orden": 35, "comun-mio": 15, "plan-precio": 15, "muralla-puerto": 25, "altar-taller": 40, "herencia-quiebre": 45 }),
    tint: "#b0905a",
  },
  {
    id: "georgista",
    name: { es: "Georgista", en: "Georgist" },
    family: "hibrido",
    summary: {
      es: "Cree que la tierra y los recursos naturales pertenecen a todos, pero el fruto del trabajo es sagrado. Propone un impuesto único al valor del suelo.",
      en: "Believes land and natural resources belong to everyone, but the fruit of labour is sacred. Proposes a single tax on land value.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 40, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 35, "herencia-quiebre": 50 }),
    tint: "#8aa86a",
  },
  {
    id: "mutualista",
    name: { es: "Mutualista", en: "Mutualist" },
    family: "anarquista",
    summary: {
      es: "Defiende el crédito sin interés, las cooperativas y el intercambio igual a igual. La emancipación se construye con asociaciones voluntarias, no con decretos.",
      en: "Defends interest-free credit, cooperatives and equal exchange. Emancipation is built with voluntary associations, not decrees.",
    },
    vector: v({ "hogar-imperio": 25, "asamblea-cetro": 20, "comun-mio": 25, "plan-precio": 25, "muralla-puerto": 30, "herencia-quiebre": 45 }),
    tint: "#7a9a6a",
  },
  {
    id: "cooperativista",
    name: { es: "Cooperativista", en: "Cooperator" },
    family: "social",
    summary: {
      es: "Cree que la empresa debe pertenecer a quien la trabaja y que la competencia puede ser cooperativa. La propiedad colectiva no exige Estado omnipresente.",
      en: "Believes the firm should belong to those who work in it and that competition can be cooperative. Collective ownership does not require an omnipresent state.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 30, "comun-mio": 30, "plan-precio": 30, "muralla-puerto": 35, "herencia-quiebre": 50 }),
    tint: "#6a9a7a",
  },
  {
    id: "ecologista-comunal",
    name: { es: "Ecologista comunal", en: "Communal ecologist" },
    family: "anarquista",
    summary: {
      es: "Une la defensa del territorio con la autogestión vecinal. La naturaleza no se salva con mercados de carbono sino con comunidades que la habitan.",
      en: "Joins the defence of territory with neighbourhood self-government. Nature is not saved with carbon markets but with communities that inhabit it.",
    },
    vector: v({ "hogar-imperio": 20, "asamblea-cetro": 20, "desorden-orden": 35, "raiz-transito": 60, "comun-mio": 30, "plan-precio": 35, "muralla-puerto": 40, "organo-circuito": 30, "herencia-quiebre": 55 }),
    tint: "#5a8a5a",
  },
  {
    id: "ecologista-tecnocrata",
    name: { es: "Ecologista tecnocrático", en: "Technocratic ecologist" },
    family: "tecnocultural",
    summary: {
      es: "Cree que la crisis ecológica se resuelve con ciencia, impuestos verdes y planificación a escala planetaria. La naturaleza es un sistema que hay que gestionar bien.",
      en: "Believes the ecological crisis is solved with science, green taxes and planetary-scale planning. Nature is a system that must be managed well.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 55, "desorden-orden": 55, "comun-mio": 45, "plan-precio": 30, "muralla-puerto": 40, "umbral-cruzada": 55, "organo-circuito": 55, "herencia-quiebre": 50 }),
    tint: "#4a7a6a",
  },
  {
    id: "feminista-radical",
    name: { es: "Feminista radical", en: "Radical feminist" },
    family: "social",
    summary: {
      es: "Cree que la opresión de género atraviesa todas las instituciones y que hay que transformarlas de raíz. Lo personal es político, y lo político es estructural.",
      en: "Believes gender oppression runs through every institution and they must be transformed at the root. The personal is political, and the political is structural.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 35, "desorden-orden": 30, "raiz-transito": 45, "comun-mio": 35, "plan-precio": 35, "altar-taller": 45, "herencia-quiebre": 65 }),
    tint: "#b05a8a",
  },
  {
    id: "feminista-liberal",
    name: { es: "Feminista liberal", en: "Liberal feminist" },
    family: "liberal",
    summary: {
      es: "Busca la igualdad de oportunidades dentro del sistema existente: educación, trabajo y representación. No quiere romper el marco, quiere llenarlo de mujeres.",
      en: "Seeks equal opportunity within the existing system: education, work and representation. Does not want to break the frame, wants to fill it with women.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 40, "raiz-transito": 40, "comun-mio": 40, "plan-precio": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#a06a9a",
  },
  {
    id: "progresista-posmoderno",
    name: { es: "Progresista posmoderno", en: "Postmodern progressive" },
    family: "tecnocultural",
    summary: {
      es: "Desconfía de las grandes narrativas y defiende la diversidad de identidades y culturas. El lenguaje construye realidad, y cambiarlo es cambiar el mundo.",
      en: "Distrusts grand narratives and defends the diversity of identities and cultures. Language constructs reality, and changing it is changing the world.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 40, "desorden-orden": 25, "raiz-transito": 30, "comun-mio": 40, "plan-precio": 40, "altar-taller": 35, "herencia-quiebre": 60 }),
    tint: "#8a6ab0",
  },
  {
    id: "aceleracionista",
    name: { es: "Aceleracionista", en: "Accelerationist" },
    family: "tecnocultural",
    summary: {
      es: "Cree que la técnica no se frena: se cabalga. El futuro llega igual, y mejor llegar montado que arrodillado.",
      en: "Believes technology cannot be stopped: it can only be ridden. The future arrives anyway, and better to arrive mounted than kneeling.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 35, "raiz-transito": 40, "comun-mio": 40, "plan-precio": 45, "muralla-puerto": 45, "altar-taller": 30, "herencia-quiebre": 65, "organo-circuito": 85 }),
    tint: "#5a7ab0",
  },
  {
    id: "transhumanista",
    name: { es: "Transhumanista", en: "Transhumanist" },
    family: "tecnocultural",
    summary: {
      es: "Quiere usar la técnica para superar los límites del cuerpo y la mente. La especie actual es un borrador, no una sentencia.",
      en: "Wants to use technique to overcome the limits of body and mind. The current species is a draft, not a sentence.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 45, "desorden-orden": 30, "raiz-transito": 40, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 25, "herencia-quiebre": 60, "organo-circuito": 90 }),
    tint: "#4a6ab0",
  },
  {
    id: "neorreaccionario",
    name: { es: "Neorreaccionario", en: "Neoreactionary" },
    family: "tradicional",
    summary: {
      es: "Desconfía de la democracia liberal y añora jerarquías estables y comunidades homogéneas. Cree que el progreso es, a veces, un nombre elegante del declive.",
      en: "Distrusts liberal democracy and yearns for stable hierarchies and homogeneous communities. Believes progress is sometimes an elegant name for decline.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 70, "desorden-orden": 70, "raiz-transito": 80, "tregua-hierro": 60, "comun-mio": 50, "plan-precio": 45, "muralla-puerto": 60, "altar-taller": 70, "herencia-quiebre": 80, "organo-circuito": 40 }),
    tint: "#6a5a4a",
  },
  {
    id: "tradicionalista-reaccionario",
    name: { es: "Tradicionalista reaccionario", en: "Reactionary traditionalist" },
    family: "tradicional",
    summary: {
      es: "Quiere volver a un orden anterior: monarquía, Iglesia y estamentos. El mundo moderno es un error que se corrige con memoria y jerarquía.",
      en: "Wants to return to a previous order: monarchy, Church and estates. The modern world is a mistake corrected with memory and hierarchy.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 75, "desorden-orden": 75, "raiz-transito": 85, "tregua-hierro": 60, "comun-mio": 50, "plan-precio": 50, "muralla-puerto": 65, "altar-taller": 85, "herencia-quiebre": 90 }),
    tint: "#5a4a3a",
  },
  {
    id: "distributista",
    name: { es: "Distributista", en: "Distributist" },
    family: "hibrido",
    summary: {
      es: "Cree que la propiedad debe estar lo más repartida posible: muchas pequeñas fincas, talleres y comercios. Ni capitalismo ni socialismo: propiedad para todos.",
      en: "Believes property should be spread as widely as possible: many small farms, workshops and shops. Neither capitalism nor socialism: property for all.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 35, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 40, "altar-taller": 65, "herencia-quiebre": 65 }),
    tint: "#8a7a4a",
  },
  {
    id: "ordoliberal",
    name: { es: "Ordoliberal", en: "Ordoliberal" },
    family: "liberal",
    summary: {
      es: "Defiende un mercado fuerte dentro de un orden jurídico que lo haga competir de verdad. El Estado no produce: pone las reglas para que nadie las pueda comprar.",
      en: "Defends a strong market within a legal order that makes it truly compete. The state does not produce: it sets the rules so no one can buy them.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 55, "comun-mio": 30, "plan-precio": 25, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#5a7a9a",
  },
  {
    id: "keynesiano",
    name: { es: "Keynesiano", en: "Keynesian" },
    family: "social",
    summary: {
      es: "Cree que el mercado solo no se autorregula y que el Estado debe sostener la demanda en las crisis. La economía es demasiado importante para dejarla en manos del pánico.",
      en: "Believes the market does not regulate itself and the state must sustain demand in crises. The economy is too important to be left to panic.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 50, "comun-mio": 40, "plan-precio": 30, "muralla-puerto": 45, "herencia-quiebre": 50 }),
    tint: "#4a6a8a",
  },
  {
    id: "mercantilista",
    name: { es: "Mercantilista", en: "Mercantilist" },
    family: "autoritario",
    summary: {
      es: "Ve la economía como una competencia entre Estados donde gana quien exporta más y acumula más. La riqueza del país es la riqueza del soberano.",
      en: "Sees the economy as a contest between states where the winner exports more and accumulates more. The country's wealth is the sovereign's wealth.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 65, "desorden-orden": 60, "raiz-transito": 65, "tregua-hierro": 65, "comun-mio": 45, "plan-precio": 25, "muralla-puerto": 75, "altar-taller": 55, "herencia-quiebre": 60 }),
    tint: "#7a5a3a",
  },
  {
    id: "fisiocrata",
    name: { es: "Fisiócrata", en: "Physiocrat" },
    family: "liberal",
    summary: {
      es: "Cree que la tierra es la fuente de toda riqueza y que la industria y el comercio solo la transforman. El impuesto único a la tierra es el más justo.",
      en: "Believes land is the source of all wealth and industry and commerce merely transform it. The single tax on land is the fairest.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 40, "comun-mio": 35, "plan-precio": 20, "muralla-puerto": 30, "herencia-quiebre": 55 }),
    tint: "#6a8a4a",
  },
  {
    id: "agrarista",
    name: { es: "Agrarista", en: "Agrarian" },
    family: "tradicional",
    summary: {
      es: "Defiende el mundo rural como reserva moral y económica del país. La tierra trabaja, la ciudad especula; el campo merece protección y respeto.",
      en: "Defends the rural world as the country's moral and economic reserve. The land works, the city speculates; the countryside deserves protection and respect.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 40, "desorden-orden": 55, "raiz-transito": 70, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 60, "altar-taller": 65, "herencia-quiebre": 75 }),
    tint: "#7a8a3a",
  },
  {
    id: "sindicalista-revolucionario",
    name: { es: "Sindicalista revolucionario", en: "Revolutionary syndicalist" },
    family: "anarquista",
    summary: {
      es: "Cree que la huelga general es la palanca del cambio y que los sindicatos deben ser el embrión del mundo nuevo. La acción directa vale más que mil programas.",
      en: "Believes the general strike is the lever of change and unions must be the embryo of the new world. Direct action is worth more than a thousand programmes.",
    },
    vector: v({ "hogar-imperio": 25, "asamblea-cetro": 15, "comun-mio": 20, "plan-precio": 20, "tregua-hierro": 40, "herencia-quiebre": 65 }),
    tint: "#a04a4a",
  },
  {
    id: "bolchevique",
    name: { es: "Bolchevique", en: "Bolshevik" },
    family: "autoritario",
    summary: {
      es: "Cree que la revolución necesita disciplina de hierro y un partido compacto que no dude. La historia no espera a los indecisos.",
      en: "Believes revolution needs iron discipline and a compact party that does not hesitate. History does not wait for the undecided.",
    },
    vector: v({ "hogar-imperio": 65, "asamblea-cetro": 80, "comun-mio": 15, "plan-precio": 15, "desorden-orden": 70, "umbral-cruzada": 65, "herencia-quiebre": 75 }),
    tint: "#9a2a2a",
  },
  {
    id: "trotskista",
    name: { es: "Trotskista", en: "Trotskyist" },
    family: "social",
    summary: {
      es: "Defiende la revolución permanente y la crítica a la burocracia del Estado obrero. El socialismo en un solo país es una contradicción.",
      en: "Defends permanent revolution and criticism of the workers' state bureaucracy. Socialism in one country is a contradiction.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 60, "comun-mio": 20, "plan-precio": 20, "umbral-cruzada": 70, "herencia-quiebre": 70 }),
    tint: "#b03a3a",
  },
  {
    id: "maoista",
    name: { es: "Maoísta", en: "Maoist" },
    family: "autoritario",
    summary: {
      es: "Cree que la revolución nace del campesino y que la movilización de masas corrige a la burocracia. La lucha de clases no termina con la toma del poder.",
      en: "Believes revolution is born from the peasant and mass mobilisation corrects the bureaucracy. Class struggle does not end with taking power.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 70, "comun-mio": 15, "plan-precio": 20, "desorden-orden": 65, "raiz-transito": 55, "herencia-quiebre": 75 }),
    tint: "#8a3a2a",
  },
  {
    id: "gandhiano",
    name: { es: "Gandhiano", en: "Gandhian" },
    family: "tradicional",
    summary: {
      es: "Une la no violencia con la autogestión aldeana y la autosuficiencia. La verdad y la desobediencia civil son armas que no matan.",
      en: "Joins non-violence with village self-government and self-sufficiency. Truth and civil disobedience are weapons that do not kill.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 25, "desorden-orden": 30, "raiz-transito": 65, "tregua-hierro": 10, "comun-mio": 30, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 70, "herencia-quiebre": 70 }),
    tint: "#9a8a3a",
  },
  {
    id: "swadeshi",
    name: { es: "Swadeshi", en: "Swadeshi" },
    family: "tradicional",
    summary: {
      es: "Defiende la autosuficiencia económica y cultural del pueblo propio frente a la importación masiva. Lo local primero, lo global si sobra.",
      en: "Defends the economic and cultural self-sufficiency of one's own people against mass imports. The local first, the global if there is room.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 40, "raiz-transito": 70, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 70, "altar-taller": 65, "herencia-quiebre": 70 }),
    tint: "#8a7a2a",
  },
  {
    id: "panarabista",
    name: { es: "Panarabista", en: "Pan-Arabist" },
    family: "autoritario",
    summary: {
      es: "Cree que los pueblos árabes forman una nación que la historia dividió y que hay que reunir. La unidad política es la condición de la dignidad.",
      en: "Believes the Arab peoples form one nation that history divided and must be reunited. Political unity is the condition of dignity.",
    },
    vector: v({ "hogar-imperio": 65, "asamblea-cetro": 65, "desorden-orden": 60, "raiz-transito": 75, "tregua-hierro": 60, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 60, "altar-taller": 75, "herencia-quiebre": 65 }),
    tint: "#6a7a2a",
  },
  {
    id: "africanista-socialista",
    name: { es: "Africanista socialista", en: "African socialist" },
    family: "social",
    summary: {
      es: "Busca un socialismo con raíces africanas: comunidad, tierra y solidaridad, sin copiar modelos importados. La aldea es la célula, no la fábrica.",
      en: "Seeks socialism with African roots: community, land and solidarity, without copying imported models. The village is the cell, not the factory.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 40, "comun-mio": 30, "plan-precio": 30, "raiz-transito": 65, "herencia-quiebre": 60 }),
    tint: "#7a6a2a",
  },
  {
    id: "zapatista",
    name: { es: "Zapatista", en: "Zapatista" },
    family: "anarquista",
    summary: {
      es: "Defiende la autonomía indígena, el mandar obedeciendo y el territorio comunal. El mundo donde quepan muchos mundos no se toma: se construye.",
      en: "Defends indigenous autonomy, leading by obeying and communal territory. The world where many worlds fit is not taken: it is built.",
    },
    vector: v({ "hogar-imperio": 10, "asamblea-cetro": 10, "desorden-orden": 30, "raiz-transito": 60, "comun-mio": 20, "plan-precio": 30, "muralla-puerto": 35, "altar-taller": 60, "herencia-quiebre": 55 }),
    tint: "#5a7a2a",
  },
  {
    id: "municipalista-latinoamericano",
    name: { es: "Municipalista latinoamericano", en: "Latin American municipalist" },
    family: "hibrido",
    summary: {
      es: "Cree que la democracia se juega en el municipio y que el federalismo es la vacuna contra el caudillo. El poder cercano es el único que se puede vigilar.",
      en: "Believes democracy is played out in the municipality and federalism is the vaccine against the caudillo. Near power is the only power that can be watched.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 20, "desorden-orden": 40, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 35, "herencia-quiebre": 45 }),
    tint: "#4a8a6a",
  },
  {
    id: "neoliberal",
    name: { es: "Neoliberal", en: "Neoliberal" },
    family: "liberal",
    summary: {
      es: "Cree que el mercado bien regulado resuelve casi todo y que el Estado debe ser pequeño y eficiente. La competencia es el mejor planificador.",
      en: "Believes the well-regulated market solves almost everything and the state should be small and efficient. Competition is the best planner.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 45, "comun-mio": 20, "plan-precio": 15, "muralla-puerto": 20, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#3a6a8a",
  },
  {
    id: "republicano-civico",
    name: { es: "Republicano cívico", en: "Civic republican" },
    family: "liberal",
    summary: {
      es: "Cree que la libertad es ausencia de dominación y que la ciudadanía se ejerce participando. La república no es un sistema: es una práctica diaria.",
      en: "Believes freedom is absence of domination and citizenship is exercised by participating. The republic is not a system: it is a daily practice.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 25, "desorden-orden": 45, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#5a6a7a",
  },
  {
    id: "pacifista-integral",
    name: { es: "Pacifista integral", en: "Integral pacifist" },
    family: "anarquista",
    summary: {
      es: "Rechaza toda forma de violencia, incluida la del Estado, y cree en la desobediencia civil masiva. La paz no es ausencia de guerra: es presencia de justicia.",
      en: "Rejects all forms of violence, including the state's, and believes in mass civil disobedience. Peace is not the absence of war: it is the presence of justice.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 25, "tregua-hierro": 5, "umbral-cruzada": 10, "comun-mio": 30, "herencia-quiebre": 50 }),
    tint: "#6a8a8a",
  },
  {
    id: "nacional-bolchevique",
    name: { es: "Nacional-bolchevique", en: "National Bolshevik" },
    family: "hibrido",
    summary: {
      es: "Mezcla la planificación económica con el nacionalismo cultural y el rechazo al liberalismo occidental. Ni Moscú ni Bruselas: la tercera vía propia.",
      en: "Mixes economic planning with cultural nationalism and rejection of Western liberalism. Neither Moscow nor Brussels: the own third way.",
    },
    vector: v({ "hogar-imperio": 60, "asamblea-cetro": 70, "desorden-orden": 70, "raiz-transito": 75, "tregua-hierro": 65, "comun-mio": 30, "plan-precio": 25, "muralla-puerto": 65, "altar-taller": 65, "herencia-quiebre": 60 }),
    tint: "#7a3a3a",
  },
  {
    id: "justicialista",
    name: { es: "Justicialista", en: "Justicialist" },
    family: "hibrido",
    summary: {
      es: "Busca la justicia social con soberanía política y económica, en un marco de movilización popular. Lo social, lo nacional y lo popular en un solo proyecto.",
      en: "Seeks social justice with political and economic sovereignty, within a framework of popular mobilisation. The social, the national and the popular in one project.",
    },
    vector: v({ "hogar-imperio": 55, "asamblea-cetro": 60, "desorden-orden": 60, "raiz-transito": 60, "tregua-hierro": 55, "comun-mio": 35, "plan-precio": 30, "muralla-puerto": 60, "altar-taller": 60, "herencia-quiebre": 55 }),
    tint: "#6a5a6a",
  },
  {
    id: "liberacionista",
    name: { es: "Liberacionista", en: "Liberationist" },
    family: "social",
    summary: {
      es: "Cree que la liberación de los oprimidos es el eje de toda política y que el conocimiento nace de la praxis. No hay neutralidad posible: o estás con los de abajo o arriba.",
      en: "Believes the liberation of the oppressed is the axis of all politics and knowledge is born of praxis. Neutrality is impossible: you are either with those below or above.",
    },
    vector: v({ "hogar-imperio": 35, "asamblea-cetro": 30, "comun-mio": 25, "plan-precio": 30, "umbral-cruzada": 55, "herencia-quiebre": 65 }),
    tint: "#8a4a5a",
  },
  {
    id: "cosmopolita-cosmico",
    name: { es: "Cosmopolita cósmico", en: "Cosmic cosmopolitan" },
    family: "tecnocultural",
    summary: {
      es: "Cree que la humanidad es una sola especie con un destino compartido en el espacio y en la red. Las fronteras son errores de cartografía.",
      en: "Believes humanity is one species with a shared destiny in space and on the net. Borders are cartographic errors.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 40, "desorden-orden": 30, "raiz-transito": 15, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 15, "umbral-cruzada": 40, "altar-taller": 30, "herencia-quiebre": 50, "organo-circuito": 70 }),
    tint: "#3a5a9a",
  },
  {
    id: "neomedievalista",
    name: { es: "Neomedievalista", en: "Neomedievalist" },
    family: "tradicional",
    summary: {
      es: "Cree que el futuro parece al pasado: poderes superpuestos, lealtades múltiples y sin centro único. La fragmentación no es caos: es libertad con raíces.",
      en: "Believes the future looks like the past: overlapping powers, multiple loyalties and no single centre. Fragmentation is not chaos: it is freedom with roots.",
    },
    vector: v({ "hogar-imperio": 20, "asamblea-cetro": 35, "desorden-orden": 40, "raiz-transito": 60, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 40, "altar-taller": 60, "herencia-quiebre": 65 }),
    tint: "#6a5a3a",
  },
  {
    id: "socialista-utopico",
    name: { es: "Socialista utópico", en: "Utopian socialist" },
    family: "social",
    summary: {
      es: "Sueña con comunidades pequeñas donde se trabaja por vocación y se reparte por necesidad. La utopía no es un lugar: es una brújula.",
      en: "Dreams of small communities where people work by vocation and share by need. Utopia is not a place: it is a compass.",
    },
    vector: v({ "hogar-imperio": 20, "asamblea-cetro": 20, "comun-mio": 20, "plan-precio": 25, "desorden-orden": 30, "herencia-quiebre": 50 }),
    tint: "#7a6a5a",
  },
  {
    id: "ciberpunk-politico",
    name: { es: "Ciberpunk político", en: "Political cyberpunk" },
    family: "tecnocultural",
    summary: {
      es: "Desconfía de corporaciones y Estados por igual, y cree que la tecnología libera si se hackea. El futuro es ahora: hay que pelearlo.",
      en: "Distrusts corporations and states alike, and believes technology liberates if it is hacked. The future is now: it must be fought for.",
    },
    vector: v({ "hogar-imperio": 30, "asamblea-cetro": 30, "desorden-orden": 25, "raiz-transito": 35, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 35, "altar-taller": 30, "herencia-quiebre": 55, "organo-circuito": 75 }),
    tint: "#4a3a7a",
  },
  {
    id: "agroindustrialista",
    name: { es: "Agroindustrialista", en: "Agro-industrialist" },
    family: "hibrido",
    summary: {
      es: "Cree que el campo y la industria deben ir de la mano: producir mucho, vender lejos y reinvertir en casa. La riqueza nace de la tierra y del trabajo.",
      en: "Believes countryside and industry must go hand in hand: produce much, sell far and reinvest at home. Wealth is born of land and work.",
    },
    vector: v({ "hogar-imperio": 45, "asamblea-cetro": 50, "desorden-orden": 55, "raiz-transito": 55, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 50, "altar-taller": 50, "herencia-quiebre": 55 }),
    tint: "#6a7a4a",
  },
  {
    id: "anarcoprimitivista",
    name: { es: "Anarcoprimitivista", en: "Anarcho-primitivist" },
    family: "anarquista",
    summary: {
      es: "Cree que la civilización industrial es el error original y que hay que volver a la tierra y a la tribu. La técnica no nos libera: nos encadena.",
      en: "Believes industrial civilisation is the original error and we must return to land and tribe. Technique does not free us: it chains us.",
    },
    vector: v({ "hogar-imperio": 10, "asamblea-cetro": 10, "desorden-orden": 20, "raiz-transito": 70, "comun-mio": 25, "plan-precio": 30, "muralla-puerto": 30, "altar-taller": 55, "herencia-quiebre": 70, "organo-circuito": 5 }),
    tint: "#4a6a3a",
  },
  {
    id: "socialcristiano",
    name: { es: "Socialcristiano", en: "Social Christian" },
    family: "conservador",
    summary: {
      es: "Une la fe cristiana con la justicia social: caridad organizada, sindicatos y cooperativas. La dignidad humana es sagrada, también en la economía.",
      en: "Joins Christian faith with social justice: organised charity, unions and cooperatives. Human dignity is sacred, even in the economy.",
    },
    vector: v({ "hogar-imperio": 40, "asamblea-cetro": 45, "desorden-orden": 55, "raiz-transito": 60, "comun-mio": 40, "plan-precio": 40, "muralla-puerto": 45, "altar-taller": 80, "herencia-quiebre": 70 }),
    tint: "#7a6a4a",
  },
  {
    id: "tecnoagrario",
    name: { es: "Tecnoagrario", en: "Techno-agrarian" },
    family: "hibrido",
    summary: {
      es: "Quiere tecnología de punta al servicio de comunidades rurales autosuficientes. El dron siembra, pero la aldea decide.",
      en: "Wants cutting-edge technology at the service of self-sufficient rural communities. The drone sows, but the village decides.",
    },
    vector: v({ "hogar-imperio": 25, "asamblea-cetro": 30, "desorden-orden": 40, "raiz-transito": 60, "comun-mio": 35, "plan-precio": 35, "muralla-puerto": 40, "altar-taller": 50, "herencia-quiebre": 55, "organo-circuito": 60 }),
    tint: "#5a8a4a",
  },
  {
    id: "federalista-europeo",
    name: { es: "Federalista europeo", en: "European federalist" },
    family: "liberal",
    summary: {
      es: "Cree que los problemas modernos exigen un Estado supranacional democrático. La nación no desaparece: se federaliza.",
      en: "Believes modern problems demand a democratic supranational state. The nation does not disappear: it is federalised.",
    },
    vector: v({ "hogar-imperio": 70, "asamblea-cetro": 50, "desorden-orden": 50, "raiz-transito": 30, "comun-mio": 40, "plan-precio": 35, "muralla-puerto": 25, "umbral-cruzada": 50, "altar-taller": 45, "herencia-quiebre": 50 }),
    tint: "#3a5a7a",
  },
  {
    id: "insurrecionalista",
    name: { es: "Insurrecionalista", en: "Insurrectionalist" },
    family: "anarquista",
    summary: {
      es: "Cree que la revolución no se prepara: estalla, y hay que estar listo para el estallido. La autonomía se conquista en la calle, no en el programa.",
      en: "Believes revolution is not prepared: it explodes, and you must be ready for the explosion. Autonomy is conquered in the street, not in the programme.",
    },
    vector: v({ "hogar-imperio": 15, "asamblea-cetro": 10, "desorden-orden": 20, "comun-mio": 20, "plan-precio": 25, "tregua-hierro": 35, "herencia-quiebre": 70 }),
    tint: "#9a3a3a",
  },
  {
    id: "reformista-incremental",
    name: { es: "Reformista incremental", en: "Incremental reformist" },
    family: "liberal",
    summary: {
      es: "Cree que el cambio se logra paso a paso, con mayorías amplias y consensos posibles. La perfección es enemiga de lo bueno.",
      en: "Believes change is achieved step by step, with broad majorities and possible consensus. Perfection is the enemy of the good.",
    },
    vector: v({ "hogar-imperio": 50, "asamblea-cetro": 50, "desorden-orden": 50, "comun-mio": 45, "plan-precio": 40, "muralla-puerto": 45, "herencia-quiebre": 50 }),
    tint: "#5a6a6a",
  },
];
