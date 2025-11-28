export function getBaseUrl(request?: Request) {
  const envUrl = process.env.SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  if (request) {
    const url = new URL(request.url);
    return `${url.protocol}//${url.host}`;
  }
  return '';
}
