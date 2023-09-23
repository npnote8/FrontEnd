import Cookies from "universal-cookie";
import { Context } from "../App";

import axios from "axios";
import FullScreenSection from "./FullScreenSection";
import { EmailIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
  Container,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const cookies = new Cookies();

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = ({ updateUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const { setUser } = useContext(Context);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/v1/auth/login",
      // data contains all the input or request body that the backend expects
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log("result", result);
        setLogin(true);
        console.log("updateUser", typeof updateUser);
        setUser(result.data.user);
        // set the cookie
        // cookie.set() takes three arguments: Name of the cookie ("TOKEN"), Value of the cookie (result.data.token), and on which page or route you want it to be available (setting the path to "/" makes the cookie available in all the pages)
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // to redirect the user to the authComponent after a successful login
        window.location.href = "/auth";
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
      });
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <FullScreenSection>
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
        backgroundColor="white"
        borderRadius={"lg"}
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl" pb={5} as="b">
            Login to onTrack
          </Text>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
                borderRadius="lg"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="email"
                      placeholder="email address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius="lg"
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          don't have an account?{" "}
          <Link color="teal.500" href="/signup">
            Create an Account
          </Link>
        </Box>
        <Text fontSize="md" pb={5}>
          {login ? "You Are Logged in Successfully" : "You Are Not Logged in"}
        </Text>
      </Container>
    </FullScreenSection>
  );
};

export default Login;
