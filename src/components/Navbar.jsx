import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AppBar, Toolbar, Box, Typography, Container, IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "../App";
import logo from "../assets/smart ideal logo 4.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const toggleMenu = (open) => () => {
    setMenuOpen(open);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: trigger
            ? (theme.palette.mode === 'light' ? "rgba(255, 255, 255, 0.98)" : "rgba(5, 11, 24, 0.98)")
            : (theme.palette.mode === 'light' ? "rgba(248, 250, 252, 0.8)" : "rgba(5, 11, 24, 0.8)"),
          backdropFilter: "blur(12px)",
          boxShadow: trigger ? (theme.palette.mode === 'light' ? "0 4px 12px rgba(10, 31, 68, 0.05)" : "0 4px 20px rgba(0, 0, 0, 0.5)") : "none",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          py: trigger ? 0.2 : 0.8,
          borderBottom: trigger ? `1px solid ${theme.palette.mode === 'light' ? "#E5E7EB" : "rgba(255, 255, 255, 0.05)"}` : "none"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none" }}>
              <Box component="img" src={logo} alt="SmartCore" sx={{ height: 40 }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  letterSpacing: "-0.5px",
                  display: { xs: "none", sm: "block" }
                }}
              >
                SMART<Box component="span" sx={{ color: "secondary.main" }}>CORE</Box>
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.name}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: location.pathname === link.path ? "secondary.main" : "primary.main",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "15px",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                    "&:active": {
                      transform: "scale(0.85) translateY(0)", // Snappier click
                      color: "secondary.main",
                      textShadow: "0 0 10px rgba(249, 115, 22, 0.4)", // Orange glow pulse
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: "50%",
                      width: location.pathname === link.path ? "100%" : "0%",
                      height: "2px",
                      bgcolor: "secondary.main",
                      transform: "translateX(-50%)",
                      transition: "width 0.3s ease"
                    }
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>

            {/* Theme Toggle & Mobile Toggler */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                sx={{
                  color: "primary.main",
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(10, 31, 68, 0.03)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 31, 68, 0.08)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                    transform: 'rotate(15deg) scale(1.1)',
                  }
                }}
              >
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="end"
                onClick={toggleMenu(true)}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleMenu(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: "background.paper",
            p: 4
          }
        }}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box component="img" src={logo} alt="SmartCore" sx={{ height: 50, mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
            SMART<Box component="span" sx={{ color: 'secondary.main' }}>CORE</Box>
          </Typography>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.name}
              component={Link}
              to={link.path}
              onClick={toggleMenu(false)}
              sx={{ py: 2, px: 0, borderRadius: 2 }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  fontSize: 22,
                  fontWeight: 800,
                  textAlign: 'center',
                  color: location.pathname === link.path ? "secondary.main" : "primary.main",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
