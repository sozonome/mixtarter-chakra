import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import ServerStyleContext from "~/lib/styles/context.server";
import createEmotionCache from "~/lib/styles/createEmotionCache";

const emotionCache = createEmotionCache();

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) => {
  const { extractCriticalToChunks } = createEmotionServer(emotionCache);

  const html = renderToString(
    <ServerStyleContext.Provider value={null}>
      <CacheProvider value={emotionCache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    </ServerStyleContext.Provider>
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <ServerStyleContext.Provider value={chunks.styles}>
      <CacheProvider value={emotionCache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    </ServerStyleContext.Provider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
