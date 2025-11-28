import type { Libro } from '~/data/libros';

export function LibroSection({ libros, id = 'biblioteca' }: { libros: Libro[]; id?: string }) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-slate-200 bg-white/70 px-8 py-10 shadow-lg shadow-slate-100"
    >
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Biblioteca táctica</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Libros y PDFs que vale la pena circular</h2>
        <p className="mt-2 text-sm text-slate-500">
          Selección curada de textos ajenos que ayudan a explicar corrupción, desigualdad y organización ciudadana sin
          tener que empezar desde cero.
        </p>
      </header>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {libros.map((libro) => {
          const actionLabel = libro.format === 'PDF' ? 'Descargar PDF' : 'Ver recurso';
          return (
            <article
              key={libro.slug}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>{libro.format}</span>
                <span>•</span>
                <span>{libro.year}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{libro.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {libro.author}
                {libro.organization ? ` · ${libro.organization}` : null}
              </p>
              <p className="mt-3 text-sm text-slate-600">{libro.summary}</p>
              <div className="mt-auto flex flex-col gap-4 pt-5 text-xs uppercase tracking-wide">
                <span className="w-fit rounded-full border border-slate-200 px-3 py-1 text-slate-500">
                  {libro.topic}
                </span>
                <a
                  href={libro.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand transition hover:text-slate-900"
                >
                  {actionLabel} →
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">
        Comentarios o mentadas de madre: <a href="mailto:cchavezmx@outlook.com" className="text-brand underline">cchavezmx@outlook.com</a>
      </p>
    </section>
  );
}
