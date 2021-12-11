import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "remix";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <Stack gap={2}>
      <Heading as="h2" fontSize="3xl">
        Hello
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize={textSize}>
          This is a Remix app with Chakra-UI and TypeScript setup.
        </Box>
      </Box>

      <HStack>
        <Link to="/404">
          <Button>404 Page</Button>
        </Link>
      </HStack>
    </Stack>
  );
};

export default SomeText;
