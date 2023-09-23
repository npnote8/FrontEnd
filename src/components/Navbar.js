import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Home", href: "/" },
  { name: "Meals", href: "/meals" },
  { name: "Statistics", href: "/statistics" },
  { name: "FreeComponent", href: "/free" },
  { name: "AuthComponent", href: "/auth" },
];

const NavLink = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      color="white"
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("teal.300"),
      }}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Link
              fontSize="3xl"
              color="white"
              as="b"
              href="/"
              _hover={{
                textDecoration: "none",
              }}
              m={[3, 12]}
            >
              onTrack
            </Link>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                /*    <NavLink key={link.name}>
                  <Link
                    href={link.href}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </Link>
                </NavLink> */
                <Link
                  key={link.name}
                  href={link.href}
                  color="white"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}

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
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                /*     <NavLink key={link.name}>
                  <Link
                    href={link.href}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </Link>
                </NavLink> */
                <Link
                  key={link.name}
                  href={link.href}
                  color="white"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
