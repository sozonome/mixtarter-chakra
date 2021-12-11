import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "remix";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link to="/">mixtarter-chakra</Link>
      </Heading>
      <Heading as="h1" size="md">
        <Link to="/a">mixtarter-chakra</Link>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
