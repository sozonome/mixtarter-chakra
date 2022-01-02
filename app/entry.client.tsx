import { CacheProvider } from "@emotion/react";
import React from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import ClientStyleContext from "~/styles/context.client";
import createEmotionCache from "~/styles/createEmotionCache";

const emotionCache = createEmotionCache();

type ClientCacheProviderProps = {
  children: React.ReactNode;
};

const ClientCacheProvider = ({ children }: ClientCacheProviderProps) => {
  const [cache, setCache] = React.useState(emotionCache);

  const reset = () => setCache(emotionCache);

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
};

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
