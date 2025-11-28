/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true
  },
  server: './server.ts',
  serverBuildPath: 'netlify/functions/server.mjs',
  serverModuleFormat: 'esm',
  ignoredRouteFiles: ['**/.*'],
  sourcemap: true,
  tailwind: true
};
