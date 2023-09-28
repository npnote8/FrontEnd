// import Cookies from "universal-cookie";

import { useNavigate } from "react-router-dom";
import { AuthData } from "./AuthWrapper";
import FullScreenSection from "./FullScreenSection";
import { EmailIcon } from "@chakra-ui/icons";
import { useState } from "react";

import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
  Container,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

// const cookies = new Cookies();

const CFaLock = chakra(FaLock);

export function Login() {
  const { login } = AuthData();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async (e) => {
    e.preventDefault();

    console.log("email", email);
    console.log("password", password);
    const userInformation = {
      email,
      password,
    };
    console.log(userInformation);

    // registerUser(userInformation);
    login(userInformation);
    navigate("/meals");
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <FullScreenSection backgroundColor={"gray.200"}>
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
            Sign In to onTrack
          </Text>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={doLogin}>
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
                  onClick={doLogin}
                >
                  Sign In
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
      </Container>
    </FullScreenSection>
  );
}
