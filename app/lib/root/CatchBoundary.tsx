import {
  Box,
  Button,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link, useCatch } from "@remix-run/react";
import type { CatchBoundaryComponent } from "@remix-run/react/routeModules";

import Document from "./Document";

import MotionBox from "~/lib/components/motion/Box";

// https://remix.run/docs/en/v1/api/conventions#catchboundary
const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();
  const { colorMode } = useColorMode();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Box textAlign="center">
          <Heading>
            {caught.status}: {caught.statusText}
          </Heading>

          <Text>{message}</Text>
        </Box>

        <Box textAlign="center" marginTop={4}>
          <Text>It&apos;s Okay!</Text>
          <Link to="/">
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Document>
  );
};

export default CatchBoundary;
