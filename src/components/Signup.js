import FullScreenSection from "./FullScreenSection";
import axios from "axios";
import { useState } from "react";
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
  Image,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/v1/auth/register",
      // data contains all the input or request body that the backend expects
      data: {
        name,
        email,
        password,
      },
    };

    // The API call
    axios(configuration)
      .then((result) => {
        console.log(result);
        // By setting register to true, it shows when the registration process is completed
        setRegister(true);
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
            Create an Account
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
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="text"
                      placeholder="first name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
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
                  Create an Account
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          already have an account?{" "}
          <Link color="teal.500" href="/login">
            Log in
          </Link>
        </Box>
        {/*  <Box display="grid">
          <Image src={require("./assets/balloons.jpg")} />
        </Box> */}

        {/* conditional statement to display a success message when the register is true*/}
        <Text fontSize="md" pb={5}>
          {register
            ? "You Are Registered Successfully"
            : "You Are Not Registered"}
        </Text>
      </Container>
    </FullScreenSection>
  );
};

export default Signup;
