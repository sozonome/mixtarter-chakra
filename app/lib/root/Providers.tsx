import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "~/lib/styles/theme";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};

export default Providers;
