import React from "react";
// import _get from "lodash/get";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Redirect from "hooks/redirect";
import { signOut } from "utils/firebase/loginLogout";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ url, children }) => {
  const history = Redirect();

  const handleOnClick = () => history.push(url);

  return (
    <Text
      px={2}
      py={1}
      rounded={"md"}
      cursor="pointer"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      onClick={handleOnClick}
    >
      {children}
    </Text>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = Redirect();
  //   const { user } = useGetUserProfile();

  const onSignOut = () => signOut();
  const OnSettings = () => history.push("/settings");

  return (
    <>
      <Box
        // bg={useColorModeValue("gray.100", "gray.900")}
        // bg="#0e0e0e"
        bg="#1d1d1d"
        color="green"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink url="/home">Home</NavLink>
              <NavLink url="/about">About</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  //   src={_get(user[0], "profilePhoto", "")}
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={OnSettings}>Settings</MenuItem>
                <MenuItem onClick={onSignOut}>Signout</MenuItem>
                {/* <MenuItem>Link 1</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
