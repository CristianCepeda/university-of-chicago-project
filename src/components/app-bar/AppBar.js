import * as React from "react";
import { produce } from "immer";
import {
  AppBar as MuiAppBar,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Page One", "Page Two", "Page Three"];

export default function AppBar({ displayPage, setDisplayPage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (clickedPageName) => {
    setDisplayPage(
      produce(displayPage, (draft) => {
        Object.keys(draft).forEach((pageName) => {
          draft[pageName] = clickedPageName === pageName;
        });
      })
    );
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="https://cristiancepeda.github.io/university-of-chicago-project/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                The University Of Chicago Project
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: "none", lg: "flex" } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Grid>
            <Grid item sx={{ display: { xs: "block", lg: "none" } }}>
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
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
