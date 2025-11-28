import { Link } from '@remix-run/react';
import type { Note } from '~/data/notas';

export function Hero({ featured }: { featured: Note }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-stretch">
        <div className="space-y-6 px-8 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Destacado</p>
          <h2 className="font-display text-4xl text-brand">{featured.title}</h2>
          <p className="text-lg text-slate-600">{featured.summary}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <time dateTime={featured.publishedAt} className="font-medium text-brand">
              {new Date(featured.publishedAt).toLocaleDateString('es-AR', {
                day: '2-digit',
                month: 'long'
              })}
            </time>
            <span>•</span>
            <span>{featured.readingTime} de lectura</span>
          </div>
          <Link
            to={`/notas/${featured.slug}`}
            prefetch="intent"
            className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2 text-sm font-semibold shadow-lg transition hover:bg-slate-900"
          >
            Leer la nota
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-slate-900/5" aria-hidden />
          <img
            src={featured.cover}
            alt={featured.title}
            className="relative z-10 h-full w-full object-cover transition duration-300 hover:scale-[1.01]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
