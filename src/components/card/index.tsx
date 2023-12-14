import React from "react";
import {
  Heading,
  Text,
  VStack,
  Card as ChakraCard,
  CardBody,
} from "@chakra-ui/react";
import { AiFillCustomerService } from "react-icons/ai";

type CardProps = {
  label: string;
  description: string;
};

const Card = ({ label, description }: CardProps) => {
  return (
    <VStack spacing={2} alignItems="flex-start">
      <AiFillCustomerService size="48" />
      <Heading size="md">{label}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

export default Card;
