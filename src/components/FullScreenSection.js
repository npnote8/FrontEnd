import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop
 */
const FullScreenSection = ({ children, ...boxProps }) => {
  return (
    <VStack backgroundColor={boxProps.backgroundColor}>
      <Box minHeight="100vh" display="grid">
        {children}
      </Box>
    </VStack>
  );
};

export default FullScreenSection;
