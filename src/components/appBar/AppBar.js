import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";

const buttons = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services", padding: "10px" },
  { name: "Get Registered", path: "/regmain" },
  { name: "Instructions & Guidelines", path: "/instructions" },
  { name: "Contact Us", path: "/contact" },
  { name: "Login", path: "/login" },
];

export default function NavBar() {
  const [activeButton, setActiveButton] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;

    @media (max-width: 1500px) {
      gap: 10px;
    }
  `;

  return (
    <>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              edge="start"
              color=""
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "200px", height: "50px" }}
          />
          {!isMobile && (
            <StyledButtonWrapper>
              {buttons.map(({ name, path, padding }) => (
                <Button
                  key={name}
                  style={{
                    color: activeButton === name ? "white" : "black",
                    fontWeight: "bold",
                    padding,
                    background:
                      activeButton === name
                        ? "linear-gradient(to right, #c51383, #653592)"
                        : "white",
                  }}
                  component={Link}
                  to={path}
                  onClick={() => handleButtonClick(name)}
                >
                  {name}
                </Button>
              ))}
            </StyledButtonWrapper>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {buttons.map(({ name, path }) => (
              <ListItem
                button
                key={name}
                component={Link}
                to={path}
                onClick={() => handleButtonClick(name)}
              >
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
}
