import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  components,
});

export default customTheme;
