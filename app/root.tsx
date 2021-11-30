import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "remix";
import type { LinksFunction } from "remix";

import {
  CatchBoundary,
  Document,
  ErrorBoundary,
  Layout,
} from "./components/root";

import globalStylesUrl from "~/styles/global.css";

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
const App = () => {
  return (
    <Document>
      <ChakraProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  );
};

export { ErrorBoundary, CatchBoundary };

export default App;
