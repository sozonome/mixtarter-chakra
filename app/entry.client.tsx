import { CacheProvider } from "@emotion/react";
import React from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import ClientStyleContext from "~/styles/context.client";
import createEmotionCache from "~/styles/createEmotionCache";

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
