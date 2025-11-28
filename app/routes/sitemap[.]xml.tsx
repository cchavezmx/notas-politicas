import type { LoaderFunctionArgs } from '@remix-run/node';
import { getNotes } from '~/data/notas';
import { getBaseUrl } from '~/utils/url.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const baseUrl = getBaseUrl(request);
  const notes = getNotes();
  const urls = [
    `${baseUrl}/`,
    ...notes.map((note) => `${baseUrl}/notas/${note.slug}`)
  ].filter(Boolean);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `<url>
  <loc>${loc}</loc>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300'
    }
  });
};
