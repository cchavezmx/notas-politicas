import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import { PassThrough } from 'node:stream';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  if (isbot(request.headers.get('user-agent'))) {
    return handleBotRequest(request, responseStatusCode, responseHeaders, remixContext);
  }
  return handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise<Response>((resolve, reject) => {
    let didError = false;
    const { pipe, abort } = renderToPipeableStream(<RemixServer context={remixContext} url={request.url} />, {
      onAllReady() {
        const body = new PassThrough();
        responseHeaders.set('Content-Type', 'text/html');
        resolve(
          new Response(body as unknown as ReadableStream, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        );
        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = true;
        console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise<Response>((resolve, reject) => {
    let didError = false;
    const { pipe, abort } = renderToPipeableStream(<RemixServer context={remixContext} url={request.url} />, {
      onShellReady() {
        const body = new PassThrough();
        responseHeaders.set('Content-Type', 'text/html');
        resolve(
          new Response(body as unknown as ReadableStream, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        );
        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = true;
        console.error(error);
      }
    });
    request.signal.addEventListener('abort', abort);
    setTimeout(abort, ABORT_DELAY);
  });
}
