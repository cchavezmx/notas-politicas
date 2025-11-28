import type { LoaderFunctionArgs } from '@remix-run/node';
import { getBaseUrl } from '~/utils/url.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const baseUrl = getBaseUrl(request);
  const body = [
    'User-agent: *',
    'Allow: /',
    baseUrl ? `Sitemap: ${baseUrl}/sitemap.xml` : ''
  ]
    .filter(Boolean)
    .join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=300'
    }
  });
};
