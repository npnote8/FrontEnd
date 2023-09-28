import useProductData from "../helpers/fetch-product-data";
import Lottie from "lottie-react";
import * as loadingAnimation from "../Loading.json";

import { Container, SimpleGrid, Center, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const { products, loadingProducts } = useProductData();
  return (
    <>
      {loadingProducts ? (
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
          {/*  <Container maxW={"lg"} mt={10}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
                focusBorderColor="gray.200"
                size="md"
              />
              <InputRightAddon p={0} border="none">
                <Button
                  leftIcon={<FaSearch />}
                  size="md"
                  colorScheme="teal"
                  variant="solid"
                >
                  Search
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Container> */}
          <Container maxW={"6xl"}>
            <Center h="100px">
              <Heading as="b" color="gray.600">
                Nutrition Facts
              </Heading>
            </Center>
            <SimpleGrid
              spacing={10}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {products.length > 0 &&
                products.map((product) => (
                  <ProductCard
                    key={product._id}
                    title={product.product}
                    servingSize={product.serving}
                    calories={product.calories}
                  />
                ))}
            </SimpleGrid>
          </Container>
        </>
      )}
    </>
  );
};

export default ProductsSection;
