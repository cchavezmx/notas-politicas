import { Link } from '@remix-run/react';
import type { Note } from '~/data/notas';

export function NoteCard({ note }: { note: Note }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg hover:ring-brand/15">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{note.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-brand">
        <Link to={`/notas/${note.slug}`} prefetch="intent">
          {note.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-slate-600">{note.summary}</p>
      <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
        <time dateTime={note.publishedAt}>{new Date(note.publishedAt).toLocaleDateString('es-AR')}</time>
        <span>•</span>
        <span>{note.readingTime}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-400">
        {note.keywords.map((keyword) => (
          <span key={keyword} className="rounded-full border border-slate-200 px-3 py-1">
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
}
