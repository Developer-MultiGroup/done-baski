import { Logo, LogoWhite } from "@icons";
import {
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const SOCIAL_MEDIA = [
  {
    url: "https://www.facebook.com/donebaski",
    icon: FaInstagram,
  },
  {
    url: "https://www.instagram.com/donebaski",
    icon: FaFacebookF,
  },
  {
    url: "https://www.twitter.com/donebaski",
    icon: FaXTwitter,
  },
  {
    url: "https://www.linkedin.com/donebaski",
    icon: FaLinkedinIn,
  },
];

const FOOTER_LINKS = [
  {
    url: "#about",
    label: "About Us",
  },
  {
    url: "#services",
    label: "Services",
  },
  {
    url: "#contact",
    label: "Contact Us",
  },
];

const Footer = () => {
  return (
    <Container bgColor="#150035" color="white" pt={8} pb={4}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, lg: "unset" }}
      >
        <VStack alignItems="flex-start" spacing={4}>
          <LogoWhite w={32} h="auto" />
          <HStack>
            {SOCIAL_MEDIA.map((item, idx) => (
              <Link key={idx} href={item.url} passHref>
                <VStack
                  bgColor="#FFB000"
                  justifyContent={"center"}
                  p={2}
                  borderRadius={"base"}
                >
                  <Icon as={item.icon} boxSize={4} />
                </VStack>
              </Link>
            ))}
          </HStack>
        </VStack>
        <VStack
          alignItems={{ base: "flex-start", lg: "flex-end" }}
          spacing={{ base: 4, lg: 8 }}
        >
          <VStack alignItems="flex-start">
            <Heading size="md">Contact Us</Heading>
            <Link href="mailto:done@mail.com">
              <Text>done@mail.com</Text>
            </Link>
          </VStack>
          {FOOTER_LINKS.map((item, idx) => (
            <Link key={idx} href={item.url} passHref>
              <Text>{item.label}</Text>
            </Link>
          ))}
        </VStack>
      </SimpleGrid>
      <Text
        textAlign="center"
        mt={{ base: 8, lg: 8 }}
        fontSize={{ base: "x-small", lg: "small" }}
      >
        All rights reserved &copy; {new Date().getFullYear()} | Done Baski
      </Text>
    </Container>
  );
};

export default Footer;
