import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import "./index.css";

const NavBar = () => {
  const links = [
    { to: "/", label: "home" },
    { to: "/recentworks", label: "Recent Works" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <Flex className="menu">
        <Menu className="menuBar">
          {links.map((link) => (
            <MenuButton
              key={link.to}
              as={RouterLink}
              to={link.to}
              className="menuTab"
            >
              {link.label}
            </MenuButton>
          ))}

          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            className="avatar"
          />
        </Menu>
      </Flex>
    </div>
  );
};
export default NavBar;
