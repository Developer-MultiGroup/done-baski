import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaBeerMugEmpty } from "react-icons/fa6";

type ServiceCardProps = {
  icon: React.ReactNode;
  label: string;
};

const ServiceCard = ({ icon, label }: ServiceCardProps) => {
  return (
    <HStack
      spacing={4}
      p={8}
      bgColor="#f1f3f8"
      borderRadius={"lg"}
      _hover={{
        bgColor: "#FFB000CC",
        cursor: "pointer",
      }}
    >
      <Icon boxSize={8}>{icon}</Icon>
      <Text>{label}</Text>
    </HStack>
  );
};

export default ServiceCard;
