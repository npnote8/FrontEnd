import { Heading, Text, Box, Container } from "@chakra-ui/react";

import React from "react";

const ProductCard = ({ title, caloriesAmount, servingSize, calories }) => {
  return (
    <Container bg="gray.100" borderRadius="lg" align="start">
      <Box p="8">
        <Heading
          // color="gray.600"
          fontWeight="bold"
          size="md"
          textTransform="uppercase"
        >
          {title}
        </Heading>

        <Text color="black" size="md" mt="2">
          Serving size, g: {servingSize}
        </Text>

        <Text color="black" size="md" mt="2">
          Calories per serving: {calories}
        </Text>
      </Box>
    </Container>
  );
};
export default ProductCard;
