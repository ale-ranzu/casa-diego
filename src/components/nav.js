import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import casaDiegoLogo from "../assets/casa-diego-invertido.svg";
import i18n from "../i18n";

const drawerWidth = "75vw";
const drawerHeight = "100dvh";
function Nav({ links }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    const handleBodyStyle = () => {
      document.body.style.paddingRight = mobileOpen ? "0px" : "";
    };

    handleBodyStyle();

    return () => {
      handleBodyStyle();
    };
  }, [mobileOpen]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCloseNavMenu = () => {
    setMobileOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="h-[85px] w-full backdrop-blur-md !bg-header flex justify-center !shadow-none nav-casa-diego"
      >
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between" disableGutters>
            {/* Logo u otros elementos del nav */}
            <a className="logo-container" href="/">
              <img
                className="w-[175px] js-hoverable-element"
                src={casaDiegoLogo}
                alt="Logo"
              />
            </a>

            {/* Botón hamburguesa en dispositivos móviles */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Botones en la barra de herramientas de escritorio */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {links.map((link) => (
                <Button
                  key={link.id}
                  href={`#${link.targetId}`}
                  onClick={() =>
                    link.type === "language"
                      ? changeLanguage(link.language)
                      : null
                  }
                  className={`js-hoverable-element my-2 !text-white !font-title block !lowercase !mr-4 !transition !ease-in-out !delay-150 hover:-translate-y-2 !duration-200 ${
                    link.type === "language" ? "!text-[14px]" : ""
                  }`}
                >
                  {link.type === "language" ? (
                    <>
                      <img
                        src={link.svg}
                        alt={`${link.text} icon`}
                        className="mr-2 w-[17px] shadow-none"
                      />
                      {link.text}
                    </>
                  ) : (
                    link.text
                  )}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Menú desplegable en dispositivos móviles */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleCloseNavMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: drawerHeight,
            backgroundColor: "#8a7256",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Box onClick={handleCloseNavMenu}>
          <List>
            {links.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton onClick={handleCloseNavMenu}>
                  <Button
                    key={link.id}
                    href={`#${link.targetId}`}
                    className={`js-hoverable-element my-2 !text-white !font-title block !lowercase !mr-4 !transition !ease-in-out !delay-150 hover:-translate-y-2 !duration-200 ${
                      link.type === "language" ? "!text-[15px]" : ""
                    }`}
                  >
                    {link.type === "language" ? (
                      <>
                        <img
                          src={link.svg}
                          alt={`${link.text} icon`}
                          className="mr-2 w-[25px]"
                        />
                        {link.text}
                      </>
                    ) : (
                      link.text
                    )}
                  </Button>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

Nav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Nav;
