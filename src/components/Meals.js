import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import AddProductForm from "./AddProductForm";
import useMealsData from "../helpers/fetch-meal-data";
import MealCard from "./MealCard";
import Lottie from "lottie-react";
import * as loadingAnimation from "../Loading.json";

const Meals = () => {
  const { meals, loadingMeals, total } = useMealsData();

  return (
    <Tabs
      // variant="soft-rounded"
      align="center"
      colorScheme="teal"
      isFitted
      isLazy
    >
      <TabList>
        <Tab>Meals</Tab>

        <Tab>Statistics</Tab>
      </TabList>
      <TabPanels>
        <TabPanel maxW={"6xl"}>
          {loadingMeals ? (
            <Lottie
              animationData={loadingAnimation}
              loop={true}
              style={{
                height: "300px",
                width: "300px",
                margin: "auto",
              }}
            />
          ) : (
            <>
              {" "}
              <VStack>
                <Text as="b">Subtotal: {total}</Text>
                <AddProductForm />
              </VStack>
              <SimpleGrid
                spacing={10}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              >
                {meals.length > 0 &&
                  meals.map((meals) => (
                    <MealCard
                      key={meals._id}
                      title={meals.product}
                      caloriesAmount={meals.servings}
                      servingSize={meals.servingSize}
                      calories={meals.calories}
                      total={meals.totalCalories}
                      id={meals._id}
                    />
                  ))}
              </SimpleGrid>
            </>
          )}
        </TabPanel>

        <TabPanel>
          <Text as="b">In progress...</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Meals;
