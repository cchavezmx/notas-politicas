import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react';
import tailwindHref from './tailwind.css?url';
import { getBaseUrl } from './utils/url.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    year: new Date().getFullYear(),
    origin: getBaseUrl(request)
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const baseUrl = data?.origin ?? '';
  return [
    { title: 'Notas Políticas | Radar cívico informado' },
    {
      name: 'description',
      content:
        'Cobertura serena y analítica de la política latinoamericana para tus notas personales y boletines informativos.'
    },
    { property: 'og:site_name', content: 'Radar Cívico' },
    { property: 'og:title', content: 'Notas Políticas | Radar cívico informado' },
    {
      property: 'og:description',
      content:
        'Cobertura serena y analítica de la política latinoamericana para tus notas personales y boletines informativos.'
    },
    baseUrl ? { rel: 'canonical', href: `${baseUrl}/` } : null,
    baseUrl ? { property: 'og:url', content: `${baseUrl}/` } : null,
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Notas Políticas | Radar cívico informado' },
    {
      name: 'twitter:description',
      content:
        'Cobertura serena y analítica de la política latinoamericana para tus notas personales y boletines informativos.'
    }
  ].filter(Boolean);
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindHref },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap'
  }
];

function Document({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="es" className="bg-white text-slate-900">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white text-base antialiased">
        <div className="bg-brand-light/60 border-b border-slate-100">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Notas políticas</p>
              <h1 className="font-display text-2xl text-brand">Radar Cívico</h1>
            </div>
            <p className="text-xs text-slate-400">{data.year}</p>
          </div>
        </div>
        {children}
        <footer className="border-t border-slate-100 bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {data.year} Radar Cívico, apuntes personales sobre política.</p>
            <div className="flex flex-col gap-1 text-slate-400 md:items-end">
              <p>Creado con Remix y Tailwind para SEO impecable.</p>
              <p>
                Comentarios o mentadas de madre:
                <a href="mailto:cchavezmx@outlook.com" className="pl-1 text-brand underline">
                  cchavezmx@outlook.com
                </a>
              </p>
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Document children={<Outlet />} />;
}
