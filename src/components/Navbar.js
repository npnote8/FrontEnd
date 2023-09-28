// const { Link } = require("react-router-dom");
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";

import Homepage from "./Homepage";
import NutritionFacts from "./NutritionFacts";
import Profile from "./Profile";
import Meals from "./Meals";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const nav = [
  {
    path: "/",
    name: "Home",
    element: <Homepage />,
  },

  {
    path: "/facts",
    name: "Nutrition Facts",
    element: <NutritionFacts />,
  },
  {
    path: "/profile",
    name: "Profile",
    element: <Profile />,
  },

  { path: "/meals", name: "Meals", element: <Meals /> },
];
const Navbar = () => {
  const token = localStorage.getItem("token");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = (e) => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <Box
        bg={useColorModeValue("teal")}
        px={4}
        borderBottomColor="orange"
        borderBottomWidth={5}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} as={"nav"}>
            <Text fontSize="3xl" color="white" as="b" m={[3, 12]}>
              onTrack
            </Text>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {nav.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  color="white"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              {token ? (
                <Button
                  onClick={logout}
                  as={"a"}
                  variant={"solid"}
                  display={{ base: "none", md: "inline-flex" }}
                  size={"sm"}
                  mr={4}
                  fontWeight={600}
                  // href={"#"}
                  _hover={{
                    bg: "teal.300",
                  }}
                >
                  Log out
                </Button>
              ) : (
                <>
                  <Button
                    as={"a"}
                    variant={"solid"}
                    display={{ base: "none", md: "inline-flex" }}
                    size={"sm"}
                    mr={4}
                    fontWeight={600}
                    href={"/login"}
                    _hover={{
                      bg: "teal.300",
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    as={"a"}
                    variant={"solid"}
                    display={{ base: "none", md: "inline-flex" }}
                    size={"sm"}
                    mr={4}
                    fontWeight={600}
                    href={"/signup"}
                    _hover={{
                      bg: "teal.300",
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {nav.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    color="white"
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
export default Navbar;
