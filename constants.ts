import { Council } from './types';

const ICON_CLASS = "w-6 h-6 text-sky-500 dark:text-sky-400";

export const CHURCH_DEFINITION = {
  title: "L'Església: Una, Santa, Catòlica i Apostòlica",
  marks: [
    {
      name: "UNA",
      description: "L'Església és una perquè té un sol Senyor, confessa una sola fe, neix d'un sol Baptisme, no forma més que un sol Cos, vivificat per un sol Esperit, orientada a una única esperança.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="${ICON_CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`
    },
    {
      name: "SANTA",
      description: "L'Església és santa perquè Déu Santíssim és el seu autor; Crist, el seu Espòs, es va entregar per ella per santificar-la; l'Esperit de santedat la vivifica. Encara que comprengui pecadors, ella és 'la immaculada ex peccatoribus' (la sense pecat feta de pecadors).",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="${ICON_CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>`
    },
    {
      name: "CATÒLICA",
      description: "La paraula 'catòlica' significa 'universal'. L'Església és catòlica perquè anuncia la totalitat de la fe; porta en si i administra la plenitud dels mitjans de salvació; és enviada a tots els pobles; s'adreça a tots els homes; abasta tots els temps.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="${ICON_CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.065.065a.5.5 0 010 .707l-.065.065a.5.5 0 01-.707 0l-.065-.065a.5.5 0 010-.707l.065-.065a.5.5 0 01.707 0zM12 2a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V2.5A.5.5 0 0112 2zm5.293 2.5l.065.065a.5.5 0 010 .707l-.065.065a.5.5 0 01-.707 0l-.065-.065a.5.5 0 010-.707l.065-.065a.5.5 0 01.707 0zM21 11a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    },
    {
      name: "APOSTÒLICA",
      description: "L'Església és apostòlica perquè està fundada sobre els apòstols, en un triple sentit: va ser i roman edificada sobre 'el fonament dels Apòstols'; guarda i transmet l'ensenyament rebut dels Apòstols; i continua sent ensenyada, santificada i dirigida pels Apòstols a través dels seus successors, els bisbes, en comunió amb el successor de Pere.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="${ICON_CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`
    }
  ]
};

export const COUNCIL_DEFINITION = {
  title: "Concili Ecumènic",
  description: "Un concili ecumènic és una assemblea de tots els bisbes del món en comunió amb el Papa, que és qui el convoca, presideix (personalment o a través d'un legat) i aprova. És l'òrgan suprem de govern de l'Església Catòlica. El seu propòsit és deliberar i prendre decisions sobre qüestions de fe, moral, doctrina i disciplina eclesiàstica que afecten tota l'Església. Les seves decisions, un cop aprovades pel Papa, són vinculants per a tots els fidels."
};

export const COUNCILS_DATA: Council[] = [
  {
    id: 0,
    name: "Concili de Jerusalem",
    year: "c. 49-50",
    city: "Jerusalem",
    events: ["Estableix que els conversos gentils no necessiten circumcidar-se ni seguir la llei mosaica completa."]
  },
  {
    id: 1,
    name: "I de Nicea",
    year: "325",
    city: "Nicea",
    events: ["Condemna de l'arrianisme.", "Formulació del Credo de Nicea.", "Afirmació de la plena divinitat de Jesucrist (consubstancial al Pare)."]
  },
  {
    id: 2,
    name: "I de Constantinoble",
    year: "381",
    city: "Constantinoble",
    events: ["Reafirmació del Credo de Nicea.", "Afirmació de la divinitat de l'Esperit Sant.", "Formulació del Credo Niceno-Constantinopolità."]
  },
  {
    id: 3,
    name: "d'Efes",
    year: "431",
    city: "Efes",
    events: ["Condemna del nestorianisme.", "Proclamació de Maria com a Theotokos (Mare de Déu)."]
  },
  {
    id: 4,
    name: "de Calcedònia",
    year: "451",
    city: "Calcedònia",
    events: ["Condemna del monofisisme.", "Definició de les dues natures de Crist (divina i humana) en una sola persona hipostàtica."]
  },
  {
    id: 5,
    name: "II de Constantinoble",
    year: "553",
    city: "Constantinoble",
    events: ["Condemna dels 'Tres Capítols' (escrits amb tendències nestorianes)."]
  },
  {
    id: 6,
    name: "III de Constantinoble",
    year: "680-681",
    city: "Constantinoble",
    events: ["Condemna del monotelisme.", "Afirmació de les dues voluntats (divina i humana) en Crist."]
  },
  {
    id: 7,
    name: "II de Nicea",
    year: "787",
    city: "Nicea",
    events: ["Condemna de la iconoclàstia.", "Restauració i legitimació de la veneració d'icones i imatges sagrades."]
  },
  {
    id: 8,
    name: "IV de Constantinoble",
    year: "869-870",
    city: "Constantinoble",
    events: ["Deposició del patriarca Foci de Constantinoble.", "Afirmació de la primacia romana."]
  },
  {
    id: 9,
    name: "I del Laterà",
    year: "1123",
    city: "Roma (Laterà)",
    events: ["Confirmació del Concordat de Worms.", "Fi de la Lluita de les Investidures.", "Decrets sobre la simonia i el celibat clerical."]
  },
  {
    id: 10,
    name: "II del Laterà",
    year: "1139",
    city: "Roma (Laterà)",
    events: ["Fi del cisma de l'antipapa Anaclet II.", "Condemna d'Arnaldo de Brescia."]
  },
  {
    id: 11,
    name: "III del Laterà",
    year: "1179",
    city: "Roma (Laterà)",
    events: ["Establiment de la majoria de dos terços dels vots dels cardenals per a l'elecció papal."]
  },
  {
    id: 12,
    name: "IV del Laterà",
    year: "1215",
    city: "Roma (Laterà)",
    events: ["Definició dogmàtica de la transsubstanciació.", "Obligació de la confessió i comunió anual per Pasqua."]
  },
  {
    id: 13,
    name: "I de Lió",
    year: "1245",
    city: "Lió",
    events: ["Excomunió i deposició de l'emperador Frederic II."]
  },
  {
    id: 14,
    name: "II de Lió",
    year: "1274",
    city: "Lió",
    events: ["Intent d'unió amb l'Església Ortodoxa Grega.", "Noves regulacions per als conclaves papals."]
  },
  {
    id: 15,
    name: "de Vienne",
    year: "1311-1312",
    city: "Vienne",
    events: ["Supressió de l'Orde dels Cavallers Templers."]
  },
  {
    id: 16,
    name: "de Constança",
    year: "1414-1418",
    city: "Constança",
    events: ["Fi del Gran Cisma d'Occident amb l'elecció del Papa Martí V.", "Condemna de Jan Hus."]
  },
  {
    id: 17,
    name: "de Florència",
    year: "1431-1449",
    city: "Basilea-Ferrara-Florència-Roma",
    events: ["Intent d'unió amb diverses esglésies orientals.", "Definició del nombre i la naturalesa dels set sagraments."]
  },
  {
    id: 18,
    name: "V del Laterà",
    year: "1512-1517",
    city: "Roma (Laterà)",
    events: ["Intents de reforma eclesiàstica just abans de la Reforma Protestant.", "Definició de la immortalitat de l'ànima."]
  },
  {
    id: 19,
    name: "de Trento",
    year: "1545-1563",
    city: "Trento",
    events: ["Principal resposta a la Reforma Protestant (Contrareforma).", "Definicions doctrinals sobre la justificació, els sagraments, la Bíblia i la Tradició.", "Reformes disciplinàries (creació de seminaris)."]
  },
  {
    id: 20,
    name: "Vaticà I",
    year: "1869-1870",
    city: "Ciutat del Vaticà",
    events: ["Definició del dogma de la infal·libilitat papal quan parla 'ex cathedra'."]
  },
  {
    id: 21,
    name: "Vaticà II",
    year: "1962-1965",
    city: "Ciutat del Vaticà",
    events: ["'Aggiornamento' (actualització) de l'Església.", "Reforma litúrgica (missa en llengües vernacles).", "Promoció del diàleg ecumènic i interreligiós.", "Declaració sobre la llibertat religiosa."]
  }
];