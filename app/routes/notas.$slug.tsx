import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { URL } from 'node:url';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getNoteBySlug } from '~/data/notas';
import { getBaseUrl } from '~/utils/url.server';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const note = params.slug ? getNoteBySlug(params.slug) : null;
  if (!note) {
    throw new Response('Nota no encontrada', { status: 404 });
  }
  let markdown: string | null = null;
  if (note.markdownPath) {
    const filePath = join(process.cwd(), 'public', note.markdownPath);
    try {
      markdown = await readFile(filePath, 'utf-8');
    } catch (error) {
      console.warn(`No se pudo leer el markdown ${filePath}`, error);
      const origin = getBaseUrl(request);
      if (origin) {
        try {
          // En plataformas serverless (Netlify), los archivos de /public no siempre están en el bundle,
          // así que hacemos fetch directo a la URL pública del markdown.
          const markdownUrl = new URL(note.markdownPath, origin).toString();
          const res = await fetch(markdownUrl);
          if (res.ok) {
            markdown = await res.text();
          } else {
            console.warn(`Fetch de markdown falló ${markdownUrl} con status ${res.status}`);
          }
        } catch (fetchError) {
          console.warn('No se pudo cargar el markdown via fetch', fetchError);
        }
      }
    }
  }
  const baseUrl = getBaseUrl(request);
  return json({ note, markdown, baseUrl });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const { note, baseUrl } = data;
  const canonical = baseUrl ? `${baseUrl}/notas/${note.slug}` : undefined;
  const ogImage =
    note.cover.startsWith('http') || !baseUrl ? note.cover : `${baseUrl}${note.cover}`;
  return [
    { title: `${note.title} | Radar Cívico` },
    { name: 'description', content: note.summary },
    { name: 'keywords', content: note.keywords.join(', ') },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: note.title },
    { property: 'og:description', content: note.summary },
    { property: 'og:image', content: ogImage },
    { property: 'article:published_time', content: note.publishedAt },
    canonical ? { rel: 'canonical', href: canonical } : null,
    canonical ? { property: 'og:url', content: canonical } : null,
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: note.title },
    { name: 'twitter:description', content: note.summary },
    canonical ? { name: 'twitter:url', content: canonical } : null
  ].filter(Boolean);
};

export default function NotaDetalle() {
  const { note, markdown, baseUrl } = useLoaderData<typeof loader>();
  const bodyMarkdown = markdown ?? note.body ?? '';
  const ogImage =
    note.cover.startsWith('http') || !baseUrl ? note.cover : `${baseUrl}${note.cover}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    datePublished: note.publishedAt,
    description: note.summary,
    image: ogImage,
    keywords: note.keywords,
    url: baseUrl ? `${baseUrl}/notas/${note.slug}` : undefined,
    author: {
      '@type': 'Person',
      name: 'Notas Políticas'
    }
  };
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl || undefined
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: note.title,
        item: baseUrl ? `${baseUrl}/notas/${note.slug}` : undefined
      }
    ]
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link to="/" className="text-sm text-slate-500 hover:text-brand">
          ← Volver a las notas
        </Link>
        <article className="mt-6 rounded-[32px] border border-slate-100 bg-white/95 px-8 py-10 shadow-lg shadow-slate-100/80">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{note.category}</p>
          <h1 className="mt-2 font-display text-4xl leading-[1.1] text-brand">{note.title}</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
            <time dateTime={note.publishedAt}>
              {new Date(note.publishedAt).toLocaleDateString('es-AR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{note.readingTime} de lectura</span>
          </div>
          <img
            src={note.cover}
            alt={note.title}
            className="mt-6 w-full rounded-3xl border border-slate-100 object-cover shadow-md"
            loading="eager"
          />
          <p className="mt-6 text-lg text-slate-600">{note.summary}</p>
          <ReactMarkdown
            className="prose prose-lg prose-slate mt-6 max-w-none leading-relaxed"
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="font-display text-2xl text-brand" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-brand/70 bg-brand-light/50 px-4 py-2 italic text-slate-600"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => <ul className="list-disc pl-6 text-slate-700" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-6 text-slate-700" {...props} />
            }}
          >
            {bodyMarkdown}
          </ReactMarkdown>
          <div className="mt-8 flex flex-wrap gap-2">
            {note.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-wide text-slate-500"
              >
                {keyword}
              </span>
            ))}
          </div>
        </article>
        {/* <section className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-8 text-center">
          <h2 className="text-lg font-semibold text-slate-900">¿Necesitas compartir esta nota?</h2>
          <p className="mt-2 text-sm text-slate-500">
            Copia y pega el enlace directo. Los metadatos ya están optimizados para redes y boletines gracias a Remix.
          </p>
          <code className="mt-4 block truncate rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-inner">
            {`/notas/${note.slug}`}
          </code>
        </section> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      </div>
    </main>
  );
}
