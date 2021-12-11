import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

import createEmotionCache from "~/styles/createEmotionCache";
import StylesContext from "~/styles/StylesContext";

const emotionCache = createEmotionCache();

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) => {
  const { extractCriticalToChunks } = createEmotionServer(emotionCache);

  const html = renderToString(
    <CacheProvider value={emotionCache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <StylesContext.Provider value={chunks.styles}>
      <RemixServer context={remixContext} url={request.url} />
    </StylesContext.Provider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
