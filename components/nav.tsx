import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";

import Logo from "./Logo";


export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer >
      <Logo
         w={["50px", "72px", "72px"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

type MenuToggleProps = {
	toggle: any,
	isOpen: Boolean
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box pt={18} display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};


type MenuItemProps = {
	children: any,
	isLast?: Boolean
	to: string
}

const MenuItem = ({ children, isLast, to = "/"}: MenuItemProps) => {
  return (
    <Link href={to}>
      <Text display="block" size="md" fontWeight="semibold" casing="capitalize" color="#05386B" as='u'>
        {children}
      </Text>
    </Link>
  );
};

type MenuLinkProps = {
	isOpen: Boolean
}

const MenuLinks = ({ isOpen }: MenuLinkProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        alignItems="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[2, 2 , 8, 8]}
      >
        <MenuItem to="https://randomtheory.substack.com/welcome">Random Theory</MenuItem>
        <MenuItem to="/about">About Me</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }:any) => {
  return (
    <Flex
      as="nav"
      align="flex-start"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={[4,20,20]}
      pt={[4,6,6]}
      color="#05386B"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;