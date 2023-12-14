import {
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Container
      bgColor="#FFB000"
      h="80svh"
      pt="74px"
      pb={{ base: 8, lg: "auto" }}
    >
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gridTemplateRows={{ base: "2fr 1fr", lg: "auto" }}
        h="full"
        spacing={8}
      >
        <VStack
          alignItems="flex-start"
          h="full"
          justifyContent="center"
          spacing={{ base: 4, lg: 8 }}
          order={{ base: 2, lg: 1 }}
        >
          <Heading
            size={{ base: "lg", lg: "2xl" }}
            color="#150035"
            fontWeight="bold"
          >
            We are a team of professionals
          </Heading>
          <Text color="white" fontSize={{ base: "sm", lg: "base" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloribus, quidem voluptas quae, voluptatem, dolorum quos
            consequuntur voluptatibus natus officia voluptatum. Quisquam
            doloribus, quidem voluptas quae, voluptatem, dolorum quos
            consequuntur voluptatibus natus officia voluptatum.
          </Text>
        </VStack>
        <Box pos="relative" w="full" h="full" order={{ base: 1, lg: 2 }}>
          <Image src="/hero.svg" alt="hero image" fill />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Hero;
