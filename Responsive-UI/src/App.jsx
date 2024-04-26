import "./App.css";
import { Center,Flex, Grid } from "@chakra-ui/react";
import {
  Heading,
  Text,
  CardHeader,
  CardBody,
  Card,
  Box,
  Image,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box backgroundColor="gray.100" minHeight="100vh" p="20px">
        <Heading>Our Client Speak</Heading>
        <Text fontSize="sm">
          We have been working with the clients around the world
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          p={4} 
        >
          <Box>
            <Card align="center" m="10px" p="10px">
              <CardHeader p="10px">
                <Heading size="md">Efficient Collabarating</Heading>
              </CardHeader>
              <CardBody p="10px">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus iusto cum, molestias nostrum dolores veniam!
                </Text>
              </CardBody>
            </Card>
            <Box p="10px">
              <Center>
                <Flex direction="column" alignItems="center">
                  <Center>
                    <Image
                      display="flex"
                      justifyContent="center"
                      borderRadius="full"
                      boxSize="75px"
                      src='https://bit.ly/sage-adebayo'
                    />
                  </Center>
                  <Center>
                    <Text fontSize="md" as="b" p="5px">
                      Jane Cooper
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize="xs" as="sub">
                      CEO at ABC Corporation
                    </Text>
                    <p></p>
                  </Center>
                </Flex>
              </Center>
            </Box>
          </Box>
          <Box>
            <Card align="center" m="10px" p="10px">
              <CardHeader p="10px">
                <Heading size="md">Intuitive Design</Heading>
              </CardHeader>
              <CardBody p="10px">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus iusto cum, molestias nostrum dolores veniam!
                </Text>
              </CardBody>
            </Card>
            <Box p="10px">
              <Center>
                <Flex direction="column" alignItems="center">
                  <Center>
                    <Image
                      display="flex"
                      justifyContent="center"
                      borderRadius="full"
                      boxSize="75px"
                      src='https://bit.ly/sage-adebayo'
                      alt="Dan Abramov"
                    />
                  </Center>
                  <Center>
                    <Text fontSize="md" as="b" p="5px">
                      Jane Cooper
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize="xs" as="sub">
                      CEO at ABC Corporation
                    </Text>
                    <p></p>
                  </Center>
                </Flex>
              </Center>
            </Box>
          </Box>
          <Box>
            <Card align="center" m="10px" p="10px">
              <CardHeader p="10px">
                <Heading size="md">Mindblowing Service</Heading>
              </CardHeader>
              <CardBody p="10px">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus iusto cum, molestias nostrum dolores veniam!
                </Text>
              </CardBody>
            </Card>
            <Box p="10px">
              <Center>
                <Flex direction="column" alignItems="center">
                  <Center>
                    <Image
                      display="flex"
                      justifyContent="center"
                      borderRadius="full"
                      boxSize="75px"
                      src='https://bit.ly/sage-adebayo'
                      alt="Dan Abramov"
                    />
                  </Center>
                  <Center>
                    <Text fontSize="md" as="b" p="5px">
                      Jane Cooper
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize="xs" as="sub">
                      CEO at ABC Corporation
                    </Text>
                    <p></p>
                  </Center>
                </Flex>
              </Center>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default App;