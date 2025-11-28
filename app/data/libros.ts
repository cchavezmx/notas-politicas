export type Libro = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  organization?: string;
  topic: string;
  format: 'PDF' | 'Libro' | 'Reporte';
  year: string;
  link: string;
};

const libros: Libro[] = [
  {
    slug: 'corrupcion-estructural-mexico',
    title: 'Corrupción estructural: La teoría del doble fraude y las raíces de la impunidad en México',
    summary:
      'Artículo de la revista Encrucijada que expone la tesis del doble fraude para explicar cómo se reproduce la impunidad.',
    author: 'Irma Eréndira Sandoval Ballesteros',
    organization: 'Revista Encrucijada',
    topic: 'Anticorrupción',
    format: 'PDF',
    year: '2010s',
    link: '/books/corrupcion_estrucural_.pdf'
  }
];

export function getLibros() {
  return libros;
}
