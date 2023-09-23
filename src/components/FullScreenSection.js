import * as React from "react";
import { Container, Box, VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children }) => {
  return (
    <Box minHeight="100vh" backgroundColor={"gray.200"} display="grid">
      {children}
    </Box>
  );
};

export default FullScreenSection;
