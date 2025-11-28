var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.ts
import { createRequestHandler } from "@remix-run/netlify";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { PassThrough } from "node:stream";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }), {
      onAllReady() {
        let body = new PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }), {
      onShellReady() {
        let body = new PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    request.signal.addEventListener("abort", abort), setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/tailwind.css?url
var tailwind_default = "/build/_assets/tailwind-X5UWFLIT.css?url";

// app/utils/url.server.ts
function getBaseUrl(request) {
  let envUrl = process.env.SITE_URL;
  if (envUrl)
    return envUrl.replace(/\/$/, "");
  if (request) {
    let url = new URL(request.url);
    return `${url.protocol}//${url.host}`;
  }
  return "";
}

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var loader = async ({ request }) => json({
  year: (/* @__PURE__ */ new Date()).getFullYear(),
  origin: getBaseUrl(request)
}), meta = ({ data }) => {
  let baseUrl = data?.origin ?? "";
  return [
    { title: "Notas Pol\xEDticas | Radar c\xEDvico informado" },
    {
      name: "description",
      content: "Cobertura serena y anal\xEDtica de la pol\xEDtica latinoamericana para tus notas personales y boletines informativos."
    },
    { property: "og:site_name", content: "Radar C\xEDvico" },
    { property: "og:title", content: "Notas Pol\xEDticas | Radar c\xEDvico informado" },
    {
      property: "og:description",
      content: "Cobertura serena y anal\xEDtica de la pol\xEDtica latinoamericana para tus notas personales y boletines informativos."
    },
    baseUrl ? { rel: "canonical", href: `${baseUrl}/` } : null,
    baseUrl ? { property: "og:url", content: `${baseUrl}/` } : null,
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Notas Pol\xEDticas | Radar c\xEDvico informado" },
    {
      name: "twitter:description",
      content: "Cobertura serena y anal\xEDtica de la pol\xEDtica latinoamericana para tus notas personales y boletines informativos."
    }
  ].filter(Boolean);
}, links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap"
  }
];
function Document({ children }) {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxs("html", { lang: "es", className: "bg-white text-slate-900", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen bg-white text-base antialiased", children: [
      /* @__PURE__ */ jsx2("div", { className: "bg-brand-light/60 border-b border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx2("p", { className: "text-xs uppercase tracking-[0.2em] text-slate-500", children: "Notas pol\xEDticas" }),
          /* @__PURE__ */ jsx2("h1", { className: "font-display text-2xl text-brand", children: "Radar C\xEDvico" })
        ] }),
        /* @__PURE__ */ jsx2("p", { className: "text-xs text-slate-400", children: data.year })
      ] }) }),
      children,
      /* @__PURE__ */ jsx2("footer", { className: "border-t border-slate-100 bg-white/80", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "\xA9 ",
          data.year,
          " Radar C\xEDvico, apuntes personales sobre pol\xEDtica."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 text-slate-400 md:items-end", children: [
          /* @__PURE__ */ jsx2("p", { children: "Creado con Remix y Tailwind para SEO impecable." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Comentarios o mentadas de madre:",
            /* @__PURE__ */ jsx2("a", { href: "mailto:cchavezmx@outlook.com", className: "pl-1 text-brand underline", children: "cchavezmx@outlook.com" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx2(Document, { children: /* @__PURE__ */ jsx2(Outlet, {}) });
}

// app/routes/sitemap[.]xml.tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});

// app/data/notas.ts
var notes = [
  {
    slug: "nuevo-fiscal",
    title: "Antes de que empiece el show: el fiscal ideal que M\xE9xico nunca ha tenido",
    summary: "Un repaso hist\xF3rico de por qu\xE9 M\xE9xico nunca ha tenido un fiscal verdaderamente aut\xF3nomo y qu\xE9 condiciones deber\xEDa cumplir el siguiente tras la renuncia de Gertz Manero.",
    category: "Opini\xF3n",
    readingTime: "8 min",
    publishedAt: "2025-11-10",
    cover: "/img/nuevo_fiscal.png",
    keywords: [
      "nuevo fiscal",
      "FGR",
      "autonom\xEDa",
      "Alejandro Gertz Manero",
      "designaci\xF3n",
      "justicia",
      "M\xE9xico"
    ],
    markdownPath: "notas/nuevo-fiscal.md"
  },
  {
    slug: "abrazos-no-balazos",
    title: "Abrazos no balazos: lectura cr\xEDtica de un pa\xEDs atrapado en consignas",
    summary: 'Una lectura del origen y distorsi\xF3n del lema "abrazos no balazos", que contrapone la \xE9pica del macho bravuc\xF3n con la realidad institucional y muestra c\xF3mo la consigna se usa para eludir un debate serio sobre seguridad.',
    category: "Opini\xF3n",
    readingTime: "9 min",
    publishedAt: "2024-06-12",
    cover: "/img/abrazosnobalas.webp",
    keywords: [
      "abrazos no balazos",
      "seguridad p\xFAblica",
      "narcotr\xE1fico",
      "masculinidad",
      "narrativa pol\xEDtica",
      "4T",
      "M\xE9xico"
    ],
    markdownPath: "notas/abrazos-no-balazos.md"
  },
  {
    slug: "edson-vs-4t",
    title: "Edson, la 4T y el fascismo de caricatura: cr\xF3nica de un pa\xEDs que grita Venezuela cada martes",
    summary: "Un repaso sarc\xE1stico del caso Edson: contratos inflados, victimismo rentable y una oposici\xF3n que grita dictadura mientras la 4T responde con ma\xF1aneras; todos presos de la narrativa antes que de los hechos.",
    category: "Opini\xF3n",
    readingTime: "7 min",
    publishedAt: "2024-06-20",
    cover: "/img/edsonvs4t.webp",
    keywords: [
      "Edson",
      "4T",
      "fascismo",
      "Venezuela",
      "influencers",
      "ma\xF1anera",
      "golpe blando",
      "M\xE9xico"
    ],
    markdownPath: "notas/edson-vs-4t.md"
  },
  {
    slug: "golpe-blando-guia",
    title: "Conspiraciones: el manual de un golpe blando",
    summary: "Ensayo que reconstruye el intento de golpe blando en Brasil el 8 de enero de 2023 para mostrar c\xF3mo propaganda, miedos y redes digitales pueden erosionar democracias y resonar con escenarios mexicanos.",
    category: "Estrategia",
    readingTime: "8 min",
    publishedAt: "2024-06-05",
    cover: "/img/golpe_bajo.webp",
    keywords: [
      "golpe blando",
      "Brasil",
      "Bolsonaro",
      "desinformaci\xF3n",
      "propaganda",
      "cuarto poder",
      "hegemon\xEDa",
      "M\xE9xico"
    ],
    markdownPath: "notas/golpe-blando-guia.md"
  },
  {
    slug: "quien-puede-sacar-a-morena-del-poder",
    title: "El \xFAnico que puede sacar a Morena del poder\u2026 no es quien t\xFA crees",
    summary: "Un ensayo de filosof\xEDa pol\xEDtica sobre qui\xE9n controla realmente el poder en M\xE9xico: no los partidos, sino quienes administran el relato. Morena gobierna el Estado, pero el cuarto poder sigue gobernando la percepci\xF3n.",
    category: "Filosof\xEDa Pol\xEDtica",
    readingTime: "8 min",
    publishedAt: "2024-05-11",
    cover: "/img/cuarto_poder_hero.webp",
    keywords: [
      "Morena",
      "cuarto poder",
      "medios de comunicaci\xF3n",
      "narrativa pol\xEDtica",
      "filosof\xEDa pol\xEDtica",
      "hegemon\xEDa simb\xF3lica",
      "M\xE9xico"
    ],
    markdownPath: "notas/quien-puede-sacar-a-morena-del-poder.md"
  }
];
function getNotes() {
  return notes;
}
function getHighlightedNote() {
  return notes[0];
}
function getNoteBySlug(slug) {
  return notes.find((note) => note.slug === slug);
}

// app/routes/sitemap[.]xml.tsx
var loader2 = async ({ request }) => {
  let baseUrl = getBaseUrl(request), notes2 = getNotes(), xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
    `${baseUrl}/`,
    ...notes2.map((note) => `${baseUrl}/notas/${note.slug}`)
  ].filter(Boolean).map(
    (loc) => `<url>
  <loc>${loc}</loc>
</url>`
  ).join(`
`)}
</urlset>`;
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=300"
    }
  });
};

// app/routes/robots[.]txt.tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader3
});
var loader3 = async ({ request }) => {
  let baseUrl = getBaseUrl(request), body = [
    "User-agent: *",
    "Allow: /",
    baseUrl ? `Sitemap: ${baseUrl}/sitemap.xml` : ""
  ].filter(Boolean).join(`
`);
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=300"
    }
  });
};

// app/routes/notas.$slug.tsx
var notas_slug_exports = {};
__export(notas_slug_exports, {
  default: () => NotaDetalle,
  loader: () => loader4,
  meta: () => meta2
});
import { json as json2 } from "@remix-run/node";
import { Link, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var loader4 = async ({ params, request }) => {
  let note = params.slug ? getNoteBySlug(params.slug) : null;
  if (!note)
    throw new Response("Nota no encontrada", { status: 404 });
  let markdown = null;
  if (note.markdownPath) {
    let filePath = join(process.cwd(), "public", note.markdownPath);
    try {
      markdown = await readFile(filePath, "utf-8");
    } catch (error) {
      console.warn(`No se pudo leer el markdown ${filePath}`, error);
    }
  }
  let baseUrl = getBaseUrl(request);
  return json2({ note, markdown, baseUrl });
}, meta2 = ({ data }) => {
  if (!data)
    return [];
  let { note, baseUrl } = data, canonical = baseUrl ? `${baseUrl}/notas/${note.slug}` : void 0, ogImage = note.cover.startsWith("http") || !baseUrl ? note.cover : `${baseUrl}${note.cover}`;
  return [
    { title: `${note.title} | Radar C\xEDvico` },
    { name: "description", content: note.summary },
    { name: "keywords", content: note.keywords.join(", ") },
    { property: "og:type", content: "article" },
    { property: "og:title", content: note.title },
    { property: "og:description", content: note.summary },
    { property: "og:image", content: ogImage },
    { property: "article:published_time", content: note.publishedAt },
    canonical ? { rel: "canonical", href: canonical } : null,
    canonical ? { property: "og:url", content: canonical } : null,
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: note.title },
    { name: "twitter:description", content: note.summary },
    canonical ? { name: "twitter:url", content: canonical } : null
  ].filter(Boolean);
};
function NotaDetalle() {
  let { note, markdown, baseUrl } = useLoaderData2(), bodyMarkdown = markdown ?? note.body ?? "", ogImage = note.cover.startsWith("http") || !baseUrl ? note.cover : `${baseUrl}${note.cover}`, jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    datePublished: note.publishedAt,
    description: note.summary,
    image: ogImage,
    keywords: note.keywords,
    url: baseUrl ? `${baseUrl}/notas/${note.slug}` : void 0,
    author: {
      "@type": "Person",
      name: "Notas Pol\xEDticas"
    }
  }, breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl || void 0
      },
      {
        "@type": "ListItem",
        position: 2,
        name: note.title,
        item: baseUrl ? `${baseUrl}/notas/${note.slug}` : void 0
      }
    ]
  };
  return /* @__PURE__ */ jsx3("main", { className: "bg-gradient-to-b from-slate-50 to-white", children: /* @__PURE__ */ jsxs2("div", { className: "mx-auto max-w-4xl px-6 py-12", children: [
    /* @__PURE__ */ jsx3(Link, { to: "/", className: "text-sm text-slate-500 hover:text-brand", children: "\u2190 Volver a las notas" }),
    /* @__PURE__ */ jsxs2("article", { className: "mt-6 rounded-[32px] border border-slate-100 bg-white/95 px-8 py-10 shadow-lg shadow-slate-100/80", children: [
      /* @__PURE__ */ jsx3("p", { className: "text-xs uppercase tracking-[0.3em] text-slate-400", children: note.category }),
      /* @__PURE__ */ jsx3("h1", { className: "mt-2 font-display text-4xl leading-[1.1] text-brand", children: note.title }),
      /* @__PURE__ */ jsxs2("div", { className: "mt-4 flex flex-wrap gap-3 text-sm text-slate-500", children: [
        /* @__PURE__ */ jsx3("time", { dateTime: note.publishedAt, children: new Date(note.publishedAt).toLocaleDateString("es-AR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }) }),
        /* @__PURE__ */ jsx3("span", { children: "\u2022" }),
        /* @__PURE__ */ jsxs2("span", { children: [
          note.readingTime,
          " de lectura"
        ] })
      ] }),
      /* @__PURE__ */ jsx3(
        "img",
        {
          src: note.cover,
          alt: note.title,
          className: "mt-6 w-full rounded-3xl border border-slate-100 object-cover shadow-md",
          loading: "eager"
        }
      ),
      /* @__PURE__ */ jsx3("p", { className: "mt-6 text-lg text-slate-600", children: note.summary }),
      /* @__PURE__ */ jsx3(
        ReactMarkdown,
        {
          className: "prose prose-lg prose-slate mt-6 max-w-none leading-relaxed",
          remarkPlugins: [remarkGfm],
          components: {
            h2: ({ node, ...props }) => /* @__PURE__ */ jsx3("h2", { className: "font-display text-2xl text-brand", ...props }),
            blockquote: ({ node, ...props }) => /* @__PURE__ */ jsx3(
              "blockquote",
              {
                className: "border-l-4 border-brand/70 bg-brand-light/50 px-4 py-2 italic text-slate-600",
                ...props
              }
            ),
            ul: ({ node, ...props }) => /* @__PURE__ */ jsx3("ul", { className: "list-disc pl-6 text-slate-700", ...props }),
            ol: ({ node, ...props }) => /* @__PURE__ */ jsx3("ol", { className: "list-decimal pl-6 text-slate-700", ...props })
          },
          children: bodyMarkdown
        }
      ),
      /* @__PURE__ */ jsx3("div", { className: "mt-8 flex flex-wrap gap-2", children: note.keywords.map((keyword) => /* @__PURE__ */ jsx3(
        "span",
        {
          className: "rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-wide text-slate-500",
          children: keyword
        },
        keyword
      )) })
    ] }),
    /* @__PURE__ */ jsx3("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } }),
    /* @__PURE__ */ jsx3("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(breadcrumbs) } })
  ] }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute,
  loader: () => loader5,
  meta: () => meta3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/Hero.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Hero({ featured }) {
  return /* @__PURE__ */ jsx4("section", { className: "overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl", children: /* @__PURE__ */ jsxs3("div", { className: "grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-stretch", children: [
    /* @__PURE__ */ jsxs3("div", { className: "space-y-6 px-8 py-14", children: [
      /* @__PURE__ */ jsx4("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-slate-400", children: "Destacado" }),
      /* @__PURE__ */ jsx4("h2", { className: "font-display text-4xl text-brand", children: featured.title }),
      /* @__PURE__ */ jsx4("p", { className: "text-lg text-slate-600", children: featured.summary }),
      /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap gap-4 text-sm text-slate-500", children: [
        /* @__PURE__ */ jsx4("time", { dateTime: featured.publishedAt, className: "font-medium text-brand", children: new Date(featured.publishedAt).toLocaleDateString("es-AR", {
          day: "2-digit",
          month: "long"
        }) }),
        /* @__PURE__ */ jsx4("span", { children: "\u2022" }),
        /* @__PURE__ */ jsxs3("span", { children: [
          featured.readingTime,
          " de lectura"
        ] })
      ] }),
      /* @__PURE__ */ jsxs3(
        Link2,
        {
          to: `/notas/${featured.slug}`,
          prefetch: "intent",
          className: "inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2 text-sm font-semibold shadow-lg transition hover:bg-slate-900",
          children: [
            "Leer la nota",
            /* @__PURE__ */ jsx4("span", { "aria-hidden": !0, children: "\u2192" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
      /* @__PURE__ */ jsx4("div", { className: "absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-slate-900/5", "aria-hidden": !0 }),
      /* @__PURE__ */ jsx4(
        "img",
        {
          src: featured.cover,
          alt: featured.title,
          className: "relative z-10 h-full w-full object-cover transition duration-300 hover:scale-[1.01]",
          loading: "eager"
        }
      )
    ] })
  ] }) });
}

// app/components/LibroSection.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function LibroSection({ libros: libros2, id = "biblioteca" }) {
  return /* @__PURE__ */ jsxs4(
    "section",
    {
      id,
      className: "rounded-3xl border border-slate-200 bg-white/70 px-8 py-10 shadow-lg shadow-slate-100",
      children: [
        /* @__PURE__ */ jsxs4("header", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsx5("p", { className: "text-xs uppercase tracking-[0.3em] text-slate-400", children: "Biblioteca t\xE1ctica" }),
          /* @__PURE__ */ jsx5("h2", { className: "mt-2 text-2xl font-semibold text-slate-900", children: "Libros y PDFs que vale la pena circular" }),
          /* @__PURE__ */ jsx5("p", { className: "mt-2 text-sm text-slate-500", children: "Selecci\xF3n curada de textos ajenos que ayudan a explicar corrupci\xF3n, desigualdad y organizaci\xF3n ciudadana sin tener que empezar desde cero." })
        ] }),
        /* @__PURE__ */ jsx5("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: libros2.map((libro) => {
          let actionLabel = libro.format === "PDF" ? "Descargar PDF" : "Ver recurso";
          return /* @__PURE__ */ jsxs4(
            "article",
            {
              className: "flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-5",
              children: [
                /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400", children: [
                  /* @__PURE__ */ jsx5("span", { children: libro.format }),
                  /* @__PURE__ */ jsx5("span", { children: "\u2022" }),
                  /* @__PURE__ */ jsx5("span", { children: libro.year })
                ] }),
                /* @__PURE__ */ jsx5("h3", { className: "mt-3 text-lg font-semibold text-slate-900", children: libro.title }),
                /* @__PURE__ */ jsxs4("p", { className: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand", children: [
                  libro.author,
                  libro.organization ? ` \xB7 ${libro.organization}` : null
                ] }),
                /* @__PURE__ */ jsx5("p", { className: "mt-3 text-sm text-slate-600", children: libro.summary }),
                /* @__PURE__ */ jsxs4("div", { className: "mt-auto flex flex-col gap-4 pt-5 text-xs uppercase tracking-wide", children: [
                  /* @__PURE__ */ jsx5("span", { className: "w-fit rounded-full border border-slate-200 px-3 py-1 text-slate-500", children: libro.topic }),
                  /* @__PURE__ */ jsxs4(
                    "a",
                    {
                      href: libro.link,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "text-sm font-semibold text-brand transition hover:text-slate-900",
                      children: [
                        actionLabel,
                        " \u2192"
                      ]
                    }
                  )
                ] })
              ]
            },
            libro.slug
          );
        }) }),
        /* @__PURE__ */ jsxs4("p", { className: "mt-6 text-xs uppercase tracking-[0.2em] text-slate-400", children: [
          "Comentarios o mentadas de madre: ",
          /* @__PURE__ */ jsx5("a", { href: "mailto:cchavezmx@outlook.com", className: "text-brand underline", children: "cchavezmx@outlook.com" })
        ] })
      ]
    }
  );
}

// app/components/NoteCard.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function NoteCard({ note }) {
  return /* @__PURE__ */ jsxs5("article", { className: "group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg hover:ring-brand/15", children: [
    /* @__PURE__ */ jsx6("p", { className: "text-xs uppercase tracking-[0.2em] text-slate-400", children: note.category }),
    /* @__PURE__ */ jsx6("h3", { className: "mt-3 text-xl font-semibold text-slate-900 group-hover:text-brand", children: /* @__PURE__ */ jsx6(Link3, { to: `/notas/${note.slug}`, prefetch: "intent", children: note.title }) }),
    /* @__PURE__ */ jsx6("p", { className: "mt-3 text-sm text-slate-600", children: note.summary }),
    /* @__PURE__ */ jsxs5("div", { className: "mt-6 flex items-center gap-3 text-xs text-slate-500", children: [
      /* @__PURE__ */ jsx6("time", { dateTime: note.publishedAt, children: new Date(note.publishedAt).toLocaleDateString("es-AR") }),
      /* @__PURE__ */ jsx6("span", { children: "\u2022" }),
      /* @__PURE__ */ jsx6("span", { children: note.readingTime })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-400", children: note.keywords.map((keyword) => /* @__PURE__ */ jsx6("span", { className: "rounded-full border border-slate-200 px-3 py-1", children: keyword }, keyword)) })
  ] });
}

// app/data/libros.ts
var libros = [
  {
    slug: "corrupcion-estructural-mexico",
    title: "Corrupci\xF3n estructural: La teor\xEDa del doble fraude y las ra\xEDces de la impunidad en M\xE9xico",
    summary: "Art\xEDculo de la revista Encrucijada que expone la tesis del doble fraude para explicar c\xF3mo se reproduce la impunidad.",
    author: "Irma Er\xE9ndira Sandoval Ballesteros",
    organization: "Revista Encrucijada",
    topic: "Anticorrupci\xF3n",
    format: "PDF",
    year: "2010s",
    link: "/books/corrupcion_estrucural_.pdf"
  }
];
function getLibros() {
  return libros;
}

// app/routes/_index.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var loader5 = async ({ request }) => {
  let baseUrl = getBaseUrl(request), featured = getHighlightedNote(), notes2 = getNotes().filter((note) => note.slug !== featured.slug), libros2 = getLibros();
  return json3({ featured, notes: notes2, libros: libros2, baseUrl });
}, meta3 = ({ data }) => {
  if (!data)
    return [];
  let canonical = data.baseUrl ? `${data.baseUrl}/` : void 0;
  return [
    { title: `${data.featured.title} | Radar C\xEDvico` },
    {
      name: "description",
      content: "Micrositio para ordenar notas pol\xEDticas con contexto estrat\xE9gico, enfocado en SEO para boletines y clipping profesional."
    },
    { name: "keywords", content: data.notes.map((note) => note.keywords.join(", ")).join(", ") },
    canonical ? { rel: "canonical", href: canonical } : null,
    canonical ? { property: "og:url", content: canonical } : null,
    { property: "og:title", content: `${data.featured.title} | Radar C\xEDvico` },
    {
      property: "og:description",
      content: "Micrositio para ordenar notas pol\xEDticas con contexto estrat\xE9gico, enfocado en SEO para boletines y clipping profesional."
    },
    { property: "og:site_name", content: "Radar C\xEDvico" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${data.featured.title} | Radar C\xEDvico` },
    {
      name: "twitter:description",
      content: "Micrositio para ordenar notas pol\xEDticas con contexto estrat\xE9gico, enfocado en SEO para boletines y clipping profesional."
    }
  ].filter(Boolean);
};
function IndexRoute() {
  let { featured, notes: notes2, libros: libros2, baseUrl } = useLoaderData3(), jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Radar C\xEDvico",
    about: "Notas personales y an\xE1lisis pol\xEDtico latinoamericano",
    url: baseUrl || void 0,
    blogPost: [featured, ...notes2].map((note) => {
      let image = note.cover.startsWith("http") || !baseUrl ? note.cover : `${baseUrl}${note.cover}`;
      return {
        "@type": "BlogPosting",
        headline: note.title,
        datePublished: note.publishedAt,
        description: note.summary,
        image,
        keywords: note.keywords,
        url: baseUrl ? `${baseUrl}/notas/${note.slug}` : void 0
      };
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [featured, ...notes2].map((note, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: baseUrl ? `${baseUrl}/notas/${note.slug}` : void 0,
        name: note.title
      }))
    }
  };
  return /* @__PURE__ */ jsxs6("main", { className: "mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12", children: [
    /* @__PURE__ */ jsx7(Hero, { featured }),
    /* @__PURE__ */ jsxs6("section", { children: [
      /* @__PURE__ */ jsxs6("header", { className: "mb-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx7("p", { className: "text-xs uppercase tracking-[0.3em] text-slate-400", children: "Notas recientes" }),
        /* @__PURE__ */ jsx7("h2", { className: "text-2xl font-semibold text-slate-900", children: "Ideas accionables para tus apuntes" }),
        /* @__PURE__ */ jsx7("p", { className: "text-sm text-slate-500", children: "Mant\xE9n tu dossier actualizado con estas piezas listas para usarse en informes y newsletters." })
      ] }),
      /* @__PURE__ */ jsx7("div", { className: "grid gap-6 md:grid-cols-2", children: notes2.map((note) => /* @__PURE__ */ jsx7(NoteCard, { note }, note.slug)) })
    ] }),
    /* @__PURE__ */ jsx7(LibroSection, { libros: libros2 }),
    /* @__PURE__ */ jsx7("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DFHEOIEW.js", imports: ["/build/_shared/chunk-SNGDJIJP.js", "/build/_shared/chunk-T36URGAI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HNIBT6NZ.js", imports: ["/build/_shared/chunk-KPWQHS6G.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ISHTGYCR.js", imports: ["/build/_shared/chunk-HBIA7STT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notas.$slug": { id: "routes/notas.$slug", parentId: "root", path: "notas/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/notas.$slug-UVC4CNCM.js", imports: ["/build/_shared/chunk-HBIA7STT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/robots[.]txt": { id: "routes/robots[.]txt", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/robots[.]txt-NYG7XR3C.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sitemap[.]xml": { id: "routes/sitemap[.]xml", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/sitemap[.]xml-M2KMNLZB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5cf66d89", hmr: void 0, url: "/build/manifest-5CF66D89.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sitemap[.]xml": {
    id: "routes/sitemap[.]xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/robots[.]txt": {
    id: "routes/robots[.]txt",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/notas.$slug": {
    id: "routes/notas.$slug",
    parentId: "root",
    path: "notas/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: notas_slug_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};

// server.ts
var handler = createRequestHandler({
  build: server_build_exports,
  mode: "production"
});
export {
  handler
};
