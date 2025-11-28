import {
  require_url
} from "/build/_shared/chunk-ETMJWKJ6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-JOA3BH2M.js";
import {
  createHotContext
} from "/build/_shared/chunk-KCYTAFKA.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import "/build/_shared/chunk-2Q7FBYOG.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/Hero.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Hero.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Hero.tsx"
  );
  import.meta.hot.lastModified = "1763714815068.4646";
}
function Hero({
  featured
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-stretch", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 px-8 py-14", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-slate-400", children: "Destacado" }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-display text-4xl text-brand", children: featured.title }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-slate-600", children: featured.summary }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4 text-sm text-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: featured.publishedAt, className: "font-medium text-brand", children: new Date(featured.publishedAt).toLocaleDateString("es-AR", {
          day: "2-digit",
          month: "long"
        }) }, void 0, false, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          featured.readingTime,
          " de lectura"
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/notas/${featured.slug}`, prefetch: "intent", className: "inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2 text-sm font-semibold shadow-lg transition hover:bg-slate-900", children: [
        "Leer la nota",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": true, children: "\u2192" }, void 0, false, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-slate-900/5", "aria-hidden": true }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: featured.cover, alt: featured.title, className: "relative z-10 h-full w-full object-cover transition duration-300 hover:scale-[1.01]", loading: "eager" }, void 0, false, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Hero;
var _c;
$RefreshReg$(_c, "Hero");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LibroSection.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LibroSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LibroSection.tsx"
  );
  import.meta.hot.lastModified = "1763714821265.465";
}
function LibroSection({
  libros,
  id = "biblioteca"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id, className: "rounded-3xl border border-slate-200 bg-white/70 px-8 py-10 shadow-lg shadow-slate-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs uppercase tracking-[0.3em] text-slate-400", children: "Biblioteca t\xE1ctica" }, void 0, false, {
        fileName: "app/components/LibroSection.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "mt-2 text-2xl font-semibold text-slate-900", children: "Libros y PDFs que vale la pena circular" }, void 0, false, {
        fileName: "app/components/LibroSection.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm text-slate-500", children: "Selecci\xF3n curada de textos ajenos que ayudan a explicar corrupci\xF3n, desigualdad y organizaci\xF3n ciudadana sin tener que empezar desde cero." }, void 0, false, {
        fileName: "app/components/LibroSection.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/LibroSection.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: libros.map((libro) => {
      const actionLabel = libro.format === "PDF" ? "Descargar PDF" : "Ver recurso";
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: libro.format }, void 0, false, {
            fileName: "app/components/LibroSection.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
            fileName: "app/components/LibroSection.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: libro.year }, void 0, false, {
            fileName: "app/components/LibroSection.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/LibroSection.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mt-3 text-lg font-semibold text-slate-900", children: libro.title }, void 0, false, {
          fileName: "app/components/LibroSection.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand", children: [
          libro.author,
          libro.organization ? ` \xB7 ${libro.organization}` : null
        ] }, void 0, true, {
          fileName: "app/components/LibroSection.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 text-sm text-slate-600", children: libro.summary }, void 0, false, {
          fileName: "app/components/LibroSection.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-auto flex flex-col gap-4 pt-5 text-xs uppercase tracking-wide", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "w-fit rounded-full border border-slate-200 px-3 py-1 text-slate-500", children: libro.topic }, void 0, false, {
            fileName: "app/components/LibroSection.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: libro.link, target: "_blank", rel: "noreferrer", className: "text-sm font-semibold text-brand transition hover:text-slate-900", children: [
            actionLabel,
            " \u2192"
          ] }, void 0, true, {
            fileName: "app/components/LibroSection.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/LibroSection.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this)
      ] }, libro.slug, true, {
        fileName: "app/components/LibroSection.tsx",
        lineNumber: 37,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/LibroSection.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 text-xs uppercase tracking-[0.2em] text-slate-400", children: [
      "Comentarios o mentadas de madre: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:cchavezmx@outlook.com", className: "text-brand underline", children: "cchavezmx@outlook.com" }, void 0, false, {
        fileName: "app/components/LibroSection.tsx",
        lineNumber: 61,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/LibroSection.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LibroSection.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = LibroSection;
var _c2;
$RefreshReg$(_c2, "LibroSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NoteCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NoteCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NoteCard.tsx"
  );
  import.meta.hot.lastModified = "1763410884582.9233";
}
function NoteCard({
  note
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { className: "group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg hover:ring-brand/15", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs uppercase tracking-[0.2em] text-slate-400", children: note.category }, void 0, false, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "mt-3 text-xl font-semibold text-slate-900 group-hover:text-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/notas/${note.slug}`, prefetch: "intent", children: note.title }, void 0, false, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-sm text-slate-600", children: note.summary }, void 0, false, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 flex items-center gap-3 text-xs text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("time", { dateTime: note.publishedAt, children: new Date(note.publishedAt).toLocaleDateString("es-AR") }, void 0, false, {
        fileName: "app/components/NoteCard.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
        fileName: "app/components/NoteCard.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: note.readingTime }, void 0, false, {
        fileName: "app/components/NoteCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-400", children: note.keywords.map((keyword) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "rounded-full border border-slate-200 px-3 py-1", children: keyword }, keyword, false, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 39,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/NoteCard.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NoteCard.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = NoteCard;
var _c3;
$RefreshReg$(_c3, "NoteCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_url = __toESM(require_url(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1763747243553.4858";
}
var meta = ({
  data
}) => {
  if (!data)
    return [];
  const canonical = data.baseUrl ? `${data.baseUrl}/` : void 0;
  return [{
    title: `${data.featured.title} | Radar C\xEDvico`
  }, {
    name: "description",
    content: "Micrositio para ordenar notas pol\xEDticas con contexto estrat\xE9gico, enfocado en SEO para boletines y clipping profesional."
  }, {
    name: "keywords",
    content: data.notes.map((note) => note.keywords.join(", ")).join(", ")
  }, canonical ? {
    rel: "canonical",
    href: canonical
  } : null, canonical ? {
    property: "og:url",
    content: canonical
  } : null, {
    property: "og:title",
    content: `${data.featured.title} | Radar C\xEDvico`
  }, {
    property: "og:description",
    content: "Micrositio para ordenar notas pol\xEDticas con contexto estrat\xE9gico, enfocado en SEO para boletines y clipping profesional."
  }, {
    property: "og:site_name",
    content: "Radar C\xEDvico"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: `${data.featured.title} | Radar C\xEDvico`
  }, {
    name: "twitter:description",
    content: "Micrositio para ordenar notas pol\xEDticas con contexto estrat\xE9gico, enfocado en SEO para boletines y clipping profesional."
  }].filter(Boolean);
};
function IndexRoute() {
  _s();
  const {
    featured,
    notes,
    libros,
    baseUrl
  } = useLoaderData();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Radar C\xEDvico",
    about: "Notas personales y an\xE1lisis pol\xEDtico latinoamericano",
    url: baseUrl || void 0,
    blogPost: [featured, ...notes].map((note) => {
      const image = note.cover.startsWith("http") || !baseUrl ? note.cover : `${baseUrl}${note.cover}`;
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
      itemListElement: [featured, ...notes].map((note, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: baseUrl ? `${baseUrl}/notas/${note.slug}` : void 0,
        name: note.title
      }))
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Hero, { featured }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "mb-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs uppercase tracking-[0.3em] text-slate-400", children: "Notas recientes" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl font-semibold text-slate-900", children: "Ideas accionables para tus apuntes" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Mant\xE9n tu dossier actualizado con estas piezas listas para usarse en informes y newsletters." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2", children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NoteCard, { note }, note.slug, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 130,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LibroSection, { libros }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd)
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_s(IndexRoute, "aW8rYa9qUV/2IAqnxL7Hw6kLLmw=", false, function() {
  return [useLoaderData];
});
_c4 = IndexRoute;
var _c4;
$RefreshReg$(_c4, "IndexRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  IndexRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-3ZEJKCHO.js.map
