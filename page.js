"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "About", link: "#about" },
    { text: "Skills", link: "#skills" },
    { text: "Portfolio", link: "#portfolio" },
    { text: "Layanan", link: "#services" },
    { text: "Kontak", link: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1A1A1A" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CV Online
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {menuItems.map((item) => (
                <Button key={item.text} color="inherit" href={item.link}>
                  {item.text}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              size="large"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={toggleDrawer(false)}
              component="a"
              href={item.link}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Sections */}
      <Box
        id="about"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h4">About Me</Typography>
      </Box>

      <Box
        id="skills"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#ffffff",
        }}
      >
        <Typography variant="h4">Skills</Typography>
      </Box>

      <Box
        id="portfolio"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h4">Portfolio</Typography>
      </Box>

      <Box
        id="services"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#ffffff",
        }}
      >
        <Typography variant="h4">Layanan</Typography>
      </Box>

      <Box
        id="contact"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h4">Kontak</Typography>
      </Box>
    </>
  );
};

export default Page;
