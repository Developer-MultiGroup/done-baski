import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ServiceCard } from "@components";
import { Backpack, Flask, Mug, Notebook, Pencil, TShirt } from "@icons";

const SERVICES_DATA = [
  {
    icon: <Pencil />,
    label: "Pencil Prints",
  },
  {
    icon: <Backpack />,
    label: "Backpack Prints",
  },
  {
    icon: <Flask />,
    label: "Flask Prints",
  },
  {
    icon: <Mug />,
    label: "Mug Prints",
  },
  {
    icon: <Notebook />,
    label: "Notebook Prints",
  },
  {
    icon: <TShirt />,
    label: "T-Shirt Prints",
  },
];

const Services = () => {
  return (
    <Container py={8}>
      <Heading size="xl" textAlign="center" mb={8}>
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={3}>
        {SERVICES_DATA.map((item, index) => (
          <ServiceCard key={index} icon={item.icon} label={item.label} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default Services;
