import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Hero } from '~/components/Hero';
import { LibroSection } from '~/components/LibroSection';
import { NoteCard } from '~/components/NoteCard';
import { getLibros } from '~/data/libros';
import { getHighlightedNote, getNotes } from '~/data/notas';
import { getBaseUrl } from '~/utils/url.server';

export const loader = async ({ request }: { request: Request }) => {
  const baseUrl = getBaseUrl(request);
  const featured = getHighlightedNote();
  const notes = getNotes().filter((note) => note.slug !== featured.slug);
  const libros = getLibros();
  return json({ featured, notes, libros, baseUrl });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const canonical = data.baseUrl ? `${data.baseUrl}/` : undefined;
  return [
    { title: `${data.featured.title} | Radar Cívico` },
    {
      name: 'description',
      content:
        'Micrositio para ordenar notas políticas con contexto estratégico, enfocado en SEO para boletines y clipping profesional.'
    },
    { name: 'keywords', content: data.notes.map((note) => note.keywords.join(', ')).join(', ') },
    canonical ? { rel: 'canonical', href: canonical } : null,
    canonical ? { property: 'og:url', content: canonical } : null,
    { property: 'og:title', content: `${data.featured.title} | Radar Cívico` },
    {
      property: 'og:description',
      content:
        'Micrositio para ordenar notas políticas con contexto estratégico, enfocado en SEO para boletines y clipping profesional.'
    },
    { property: 'og:site_name', content: 'Radar Cívico' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${data.featured.title} | Radar Cívico` },
    {
      name: 'twitter:description',
      content:
        'Micrositio para ordenar notas políticas con contexto estratégico, enfocado en SEO para boletines y clipping profesional.'
    }
  ].filter(Boolean);
};

export default function IndexRoute() {
  const { featured, notes, libros, baseUrl } = useLoaderData<typeof loader>();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Radar Cívico',
    about: 'Notas personales y análisis político latinoamericano',
    url: baseUrl || undefined,
    blogPost: [featured, ...notes].map((note) => {
      const image = note.cover.startsWith('http') || !baseUrl ? note.cover : `${baseUrl}${note.cover}`;
      return {
      '@type': 'BlogPosting',
      headline: note.title,
      datePublished: note.publishedAt,
      description: note.summary,
      image,
      keywords: note.keywords,
      url: baseUrl ? `${baseUrl}/notas/${note.slug}` : undefined
    };
    }),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [featured, ...notes].map((note, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: baseUrl ? `${baseUrl}/notas/${note.slug}` : undefined,
        name: note.title
      }))
    }
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
      <Hero featured={featured} />
      <section>
        <header className="mb-6 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Notas recientes</p>
          <h2 className="text-2xl font-semibold text-slate-900">Ideas accionables para tus apuntes</h2>
          <p className="text-sm text-slate-500">
            Mantén tu dossier actualizado con estas piezas listas para usarse en informes y newsletters.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
      <LibroSection libros={libros} />
      {/* <section className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 px-8 py-10 text-center"> */}
      {/*   <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Newsletter</p> */}
      {/*   <h3 className="mt-3 text-2xl font-semibold text-slate-900">Convierte estas notas en un boletín semanal</h3> */}
      {/*   <p className="mt-2 text-sm text-slate-500"> */}
      {/*     Remix optimiza los metadatos para que cada resumen sea fácil de compartir y rankear en buscadores. */}
      {/*   </p> */}
      {/*   <button className="mt-6 rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"> */}
      {/*     Organizar mis notas */}
      {/*   </button> */}
      {/* </section> */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
