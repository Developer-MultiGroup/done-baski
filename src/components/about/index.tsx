import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Container py={16}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} minH="40vh">
        <VStack alignItems="flex-start" justifyContent="center" spacing={4}>
          <Box>
            <Heading size="sm" color="#150035" fontWeight="bold">
              Who we are?
            </Heading>
            <Heading size="2xl" color="#150035" fontWeight="bold">
              We are a team of professionals
            </Heading>
          </Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloribus, quidem voluptas quae, voluptatem, dolorum quos
            consequuntur voluptatibus natus officia voluptatum. Quisquam
            doloribus, quidem voluptas quae, voluptatem, dolorum quos
            consequuntur voluptatibus natus officia voluptatum.
          </Text>
        </VStack>
        <Box
          display={{ base: "none", lg: "block" }}
          pos="relative"
          w="full"
          h="full"
        >
          <Image src="/skill.svg" alt="skills" fill />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default About;
