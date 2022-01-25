import type { MetaFunction } from "remix";

import Home from "~/lib/routes/home";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
// export const loader: LoaderFunction = () => {
//   return {};
// };

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "mixtarter-chakra",
    description: "Welcome to remix!",
  };
};

export default Home;
