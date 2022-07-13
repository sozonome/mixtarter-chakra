import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { CatchBoundary, Document, ErrorBoundary } from "~/lib/root";
import globalStylesUrl from "~/lib/styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "mixtarter-chakra",
  description: "Welcome to remix!",
  viewport: "width=device-width,initial-scale=1",
});

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Outfit",
    },
    { rel: "stylesheet", href: globalStylesUrl },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export { ErrorBoundary, CatchBoundary };

export default App;
