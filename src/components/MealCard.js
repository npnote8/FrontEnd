import {
  Heading,
  Text,
  Box,
  Button,
  Stack,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  CardFooter,
  NumberInput,
  ButtonGroup,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import React, { useState } from "react";
import deleteMeal from "../helpers/delete-meal-data";
import updateMeal from "../helpers/patch-meal-data";

const MealCard = ({
  title,
  caloriesAmount,
  servingSize,
  calories,
  total,
  id,
}) => {
  const [numberOfServings, setNumberOfServings] = useState(caloriesAmount);
  const [totalCaloriesPerMeal, setTotalCaloriesPerMeal] = useState(total);

  const newMeal = {
    servings: numberOfServings,
    totalCalories: totalCaloriesPerMeal,
  };
  const handleDeleteMeal = () => {
    deleteMeal(id);
    window.location.reload();
  };

  const handleNumberOfServings = (e) => {
    console.log(e);

    setNumberOfServings(parseFloat(e));
    setTotalCaloriesPerMeal(parseFloat(e) * calories);
  };

  const handleEditMeal = (e) => {
    console.log("edited");

    console.log("title", title);

    console.log(" caloriesAmount", caloriesAmount);
    console.log("numberOfServings", numberOfServings);
    console.log("calories", calories);
    console.log("total", total);
    console.log("totalCaloriesPerMeal", totalCaloriesPerMeal);
    updateMeal(id, newMeal);

    window.location.reload();
  };
  return (
    <Card bg="gray.100" borderRadius="lg" align="start">
      <CardHeader>
        <Heading size="md"> {title}</Heading>
      </CardHeader>

      <CardBody align="start">
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs">Serving size, g:</Heading>
            <Text pt="2" fontSize="sm">
              {servingSize}
            </Text>
            <Heading size="xs">Calories per serving:</Heading>
            <Text pt="2" fontSize="sm">
              {calories}
            </Text>
            <Heading size="xs">Number of servings:</Heading>
            <NumberInput
              defaultValue={numberOfServings}
              precision={2}
              step={0.5}
              onChange={handleNumberOfServings}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box>
            <Heading size="xs">Total:</Heading>
            <Text pt="2" fontSize="sm">
              {totalCaloriesPerMeal}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button colorScheme="yellow" size="sm" onClick={handleDeleteMeal}>
            Delete
          </Button>

          <Button
            variant="ghost"
            colorScheme="teal"
            size="sm"
            onClick={handleEditMeal}
          >
            Update
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default MealCard;
