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
    { to: "/", label: "Edward Ho" },
    { to: "/recentworks", label: "Recent Works" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <Menu>
        <Flex className="menu">
          <MenuButton as={RouterLink} to={links[0].to} className="menuLeft">
            {links[0].label}
          </MenuButton>
          <section className="menuBar">
            {links.slice(1, 3).map((link) => (
              <MenuButton
                key={link.to}
                as={RouterLink}
                to={link.to}
                className="menuRight"
              >
                {link.label}
              </MenuButton>
            ))}

            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              className="avatar"
            />
          </section>
        </Flex>
      </Menu>
    </div>
  );
};
export default NavBar;
