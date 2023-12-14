import { useWindowScroll } from "@/hooks";
import { Logo, LogoWhite } from "@icons";
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const links = [
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Services",
    url: "#services",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const scrollY = useWindowScroll();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Fragment>
      <MobileNavbar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />

      <Container
        pos="fixed"
        zIndex={10}
        bg={scrollY > 50 ? "white" : "transparent"}
      >
        <HStack
          w="full"
          justifyContent="space-between"
          alignItems="center"
          py={4}
          transition={"all 0.3s ease"}
        >
          <Logo h={8} w="auto" />
          {isDesktop ? (
            <DesktopNavbar />
          ) : (
            <IconButton
              colorScheme={scrollY > 50 ? "orange" : "transparent"}
              aria-label="Search database"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              ref={btnRef}
            />
          )}
        </HStack>
      </Container>
    </Fragment>
  );
};

export default Navbar;

const DesktopNavbar = () => {
  return (
    <Fragment>
      <HStack spacing={8}>
        {links.map((link, idx) => (
          <Link key={idx} href={link.url}>
            <Text as="span" fontWeight="medium">
              {link.label}
            </Text>
          </Link>
        ))}
      </HStack>
      <Text fontWeight="bold">
        Contact us:{" "}
        <Link href="mailto:done@mail.com">
          <Text as="span" fontWeight="normal" color="#150035">
            done@mail.com
          </Text>
        </Link>
      </Text>
    </Fragment>
  );
};

type MobileNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<any>;
};

const MobileNavbar = ({ isOpen, onClose, btnRef }: MobileNavbarProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={"full"}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="#150035" color="white">
        <DrawerCloseButton top="20px" right="20px" color="white" />
        <DrawerHeader>
          <LogoWhite h={8} w="auto" />
        </DrawerHeader>
        <DrawerBody>
          <VStack justifyContent={"center"} h="full">
            {links.map((link, idx) => (
              <Link key={idx} href={link.url}>
                <Text as="span" fontWeight="medium" fontSize={32}>
                  {link.label}
                </Text>
              </Link>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
