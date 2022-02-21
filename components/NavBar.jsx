import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const NavBar = () => {
  return (
    <Flex marginTop="30" p="2" mx="20" borderBottomColor="black" borderBottom="10" borderColor="black">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Text fontSize="6x1" color="blue.400" fontWeight="bold">
            Realtor
        </Text>
      </Box>

      <Spacer></Spacer>
      <Box>
        <Menu bgColor="white">
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          ></MenuButton>
          <MenuList bgColor="white" borderRadius="xl"    >
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>

            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>

            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>

            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};




export default NavBar;
