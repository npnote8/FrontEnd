import React, { useState } from "react";
import useProductData from "../helpers/fetch-product-data";
import postMeal from "../helpers/post-meal-data";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

const AddProductForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { products } = useProductData();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [servingsCalories, setServingsCalories] = useState("");
  const [numberOfServings, setNumberOfServings] = useState("");

  const handleProductChange = (e) => {
    const productId = e.target.value;
    console.log("product", e.target.value);
    const aProduct = products.find((item) => item._id === productId);
    setSelectedProduct(aProduct);
    console.log("aProduct", aProduct);
  };

  const handleServingsChange = (e) => {
    const calories = selectedProduct.calories * e.target.value;
    setNumberOfServings(e.target.value);
    setServingsCalories(calories);
  };

  const handleClose = () => {
    setNumberOfServings(null);
    setServingsCalories(null);
    onClose();
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    console.log(
      "product",
      selectedProduct.product,

      servingsCalories,

      selectedProduct.serving,

      selectedProduct.calories
    );
    const meal = {
      product: selectedProduct.product,
      servings: numberOfServings,
      servingSize: selectedProduct.serving,
      calories: selectedProduct.calories,
      totalCalories: servingsCalories,
    };
    console.log("product", selectedProduct.product);
    console.log("number of servings", numberOfServings);
    console.log("calories per serving", selectedProduct.calories);
    console.log("serving size", selectedProduct.serving);
    console.log("total calories", servingsCalories);

    console.log(meal);
    postMeal(meal);
    window.location.reload();
  };

  return (
    <>
      <Button m={6} colorScheme="teal" onClick={onOpen}>
        Add product
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        // initialFocusRef={firstField}
        onClose={handleClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add a new product</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel>Product</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={handleProductChange}
                >
                  {products.length > 0 &&
                    products.map((product) => (
                      <option value={product._id} key={product._id}>
                        {product.product}
                      </option>
                    ))}
                </Select>
              </Box>
              <Box>
                <FormLabel>Number of Servings</FormLabel>
                <Input id="servingSize" onChange={handleServingsChange}></Input>
              </Box>
              <Box>
                <FormLabel>Calories per serving</FormLabel>
                <Text>{selectedProduct.calories}</Text>
              </Box>
              <Box>
                <FormLabel>Serving size, g</FormLabel>
                <Text>{selectedProduct.serving}</Text>
              </Box>
              <Box>
                <FormLabel>Total Calories</FormLabel>
                <Text>{servingsCalories}</Text>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="teal" onClick={handleAddMeal}>
              Add
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddProductForm;
