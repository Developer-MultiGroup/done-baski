import React, { Fragment } from "react";
import Navbar from "./navbar";
import { Box } from "@chakra-ui/react";
import { Noto_Sans } from "next/font/google";
import Footer from "./footer";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <Box as="main" className={noto.className}>
        {children}
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;
