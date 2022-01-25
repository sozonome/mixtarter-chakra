import { Box } from "@chakra-ui/react";
import type { MetaFunction } from "remix";

import CTASection from "~/lib/components/sample/CTASection";
import SomeImage from "~/lib/components/sample/SomeImage";
import SomeText from "~/lib/components/sample/SomeText";

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

const Index = () => {
  return (
    <Box mb={8} w="full">
      <SomeText />
      <SomeImage />
      <CTASection />
    </Box>
  );
};

export default Index;
