import { CacheProvider } from "@emotion/react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import createEmotionCache from "~/styles/createEmotionCache";

const emotionCache = createEmotionCache();

hydrate(
  <CacheProvider value={emotionCache}>
    <RemixBrowser />
  </CacheProvider>,
  document
);
