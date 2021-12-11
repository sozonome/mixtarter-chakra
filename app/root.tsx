import { Outlet } from "remix";
import type { LinksFunction } from "remix";

import { CatchBoundary, Document, ErrorBoundary } from "~/components/root";
import globalStylesUrl from "~/styles/global.css";

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Outfit",
    },
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
