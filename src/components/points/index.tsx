import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Card } from "@components";

const data = [
  {
    label: "Şirket",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque.",
  },
  {
    label: "Topluluk",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque.",
  },
  {
    label: "Üniversite",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque.",
  },
];

const Points = () => {
  return (
    <Container py={16}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
        {data.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Points;
