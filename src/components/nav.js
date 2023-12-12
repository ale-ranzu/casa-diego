import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import casaDiegoLogo from "../assets/casa-diego-invertido.svg";
import './nav.scss';

function Nav({ links }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      className="h-[85px] backdrop-blur-md !bg-header flex justify-center !shadow-none nav-casa-diego"
    >
      <Container maxWidth={"xl"}>
        <Toolbar className="flex justify-between" disableGutters>
          {/* Logo u otros elementos del nav */}
          <a className="logo-container" href="/">
            <img className="w-[175px]" src={casaDiegoLogo} alt="Logo" />
          </a>

          {/* Botón hamburguesa en dispositivos móviles */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Menú desplegable en dispositivos móviles */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.id} onClick={handleCloseNavMenu}>
                  <Button
                    key={link.id}
                    href={`#${link.targetId}`}
                    className={`my-3 !text-text block !text-[16px] !lowercase ${
                      link.type === "language" ? "" : ""
                    }`}
                  >
                    {link.text}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
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
                className={`my-2 !text-white block !lowercase !mr-4 !transition !ease-in-out !delay-150 hover:-translate-y-2 !duration-200 ${
                  link.type === "language" ? "!text-[15px]" : ""
                }`}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
