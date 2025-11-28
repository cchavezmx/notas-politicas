export type Note = {
  slug: string;
  title: string;
  summary: string;
  category:
    | "Estrategia"
    | "Elecciones"
    | "Economía"
    | "Opinión"
    | "Filosofía Política";
  readingTime: string;
  publishedAt: string;
  cover: string;
  body?: string;
  markdownPath?: string;
  keywords: string[];
};

const notes: Note[] = [
  {
    slug: "nuevo-fiscal",
    title: "Antes de que empiece el show: el fiscal ideal que México nunca ha tenido",
    summary:
      "Un repaso histórico de por qué México nunca ha tenido un fiscal verdaderamente autónomo y qué condiciones debería cumplir el siguiente tras la renuncia de Gertz Manero.",
    category: "Opinión",
    readingTime: "8 min",
    publishedAt: "2025-11-10",
    cover: "/img/nuevo_fiscal.png",
    keywords: [
      "nuevo fiscal",
      "FGR",
      "autonomía",
      "Alejandro Gertz Manero",
      "designación",
      "justicia",
      "México",
    ],
    markdownPath: "notas/nuevo-fiscal.md",
  },
  {
    slug: "abrazos-no-balazos",
    title: "Abrazos no balazos: lectura crítica de un país atrapado en consignas",
    summary:
      'Una lectura del origen y distorsión del lema "abrazos no balazos", que contrapone la épica del macho bravucón con la realidad institucional y muestra cómo la consigna se usa para eludir un debate serio sobre seguridad.',
    category: "Opinión",
    readingTime: "9 min",
    publishedAt: "2024-06-12",
    cover: "/img/abrazosnobalas.webp",
    keywords: [
      "abrazos no balazos",
      "seguridad pública",
      "narcotráfico",
      "masculinidad",
      "narrativa política",
      "4T",
      "México",
    ],
    markdownPath: "notas/abrazos-no-balazos.md",
  },
  {
    slug: "edson-vs-4t",
    title: "Edson, la 4T y el fascismo de caricatura: crónica de un país que grita Venezuela cada martes",
    summary:
      "Un repaso sarcástico del caso Edson: contratos inflados, victimismo rentable y una oposición que grita dictadura mientras la 4T responde con mañaneras; todos presos de la narrativa antes que de los hechos.",
    category: "Opinión",
    readingTime: "7 min",
    publishedAt: "2024-06-20",
    cover: "/img/edsonvs4t.webp",
    keywords: [
      "Edson",
      "4T",
      "fascismo",
      "Venezuela",
      "influencers",
      "mañanera",
      "golpe blando",
      "México",
    ],
    markdownPath: "notas/edson-vs-4t.md",
  },
  {
    slug: "golpe-blando-guia",
    title: "Conspiraciones: el manual de un golpe blando",
    summary:
      "Ensayo que reconstruye el intento de golpe blando en Brasil el 8 de enero de 2023 para mostrar cómo propaganda, miedos y redes digitales pueden erosionar democracias y resonar con escenarios mexicanos.",
    category: "Estrategia",
    readingTime: "8 min",
    publishedAt: "2024-06-05",
    cover: "/img/golpe_bajo.webp",
    keywords: [
      "golpe blando",
      "Brasil",
      "Bolsonaro",
      "desinformación",
      "propaganda",
      "cuarto poder",
      "hegemonía",
      "México",
    ],
    markdownPath: "notas/golpe-blando-guia.md",
  },
  {
    slug: "quien-puede-sacar-a-morena-del-poder",
    title: "El único que puede sacar a Morena del poder… no es quien tú crees",
    summary:
      "Un ensayo de filosofía política sobre quién controla realmente el poder en México: no los partidos, sino quienes administran el relato. Morena gobierna el Estado, pero el cuarto poder sigue gobernando la percepción.",
    category: "Filosofía Política",
    readingTime: "8 min",
    publishedAt: "2024-05-11",
    cover:
      "/img/cuarto_poder_hero.webp",
    keywords: [
      "Morena",
      "cuarto poder",
      "medios de comunicación",
      "narrativa política",
      "filosofía política",
      "hegemonía simbólica",
      "México",
    ],
    markdownPath: "notas/quien-puede-sacar-a-morena-del-poder.md",
  },
];

export function getNotes() {
  return notes;
}

export function getHighlightedNote() {
  return notes[0];
}

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
