import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import React from "react";
import { hydrate } from "react-dom";

import ClientStyleContext from "~/lib/styles/context.client";
import createEmotionCache from "~/lib/styles/createEmotionCache";

type ClientCacheProviderProps = {
  children: React.ReactNode;
};

const ClientCacheProvider = ({ children }: ClientCacheProviderProps) => {
  const [cache, setCache] = React.useState(createEmotionCache());

  const reset = () => setCache(createEmotionCache());

  const clientStyleContextValue = React.useMemo(() => ({ reset }), []);

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
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
