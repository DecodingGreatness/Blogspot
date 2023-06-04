import React from "react";
import { Menu, MenuButton, Avatar, Box } from "@chakra-ui/react";
import "./index.css";

const NavBar = () => {
  const pages = ["Recent Works", "Contact"];

  return (
    <div>
      <Box className="menu">
        <Menu>
          <MenuButton>Edward Ho</MenuButton>
          {pages.map((page) => {
            return <MenuButton className="menuTab">{page}</MenuButton>;
          })}
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            className="avatar"
          />
        </Menu>
      </Box>
    </div>
  );
};
export default NavBar;
