import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { MouseEvent, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const pages: Record<string, string> = {
  home: "/",
  favorites: "favorites",
  history: "history",
};

export const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElNav);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component={"nav"}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginRight: { xs: "7px" },
            }}
          >
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Somnium
            </RouterLink>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            {Object.keys(pages).map((keyPage) => (
              <Button
                component={RouterLink}
                to={pages[keyPage]}
                sx={{ color: "#fff" }}
              >
                {keyPage}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="small"
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
                horizontal: "right",
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
              {Object.keys(pages).map((key) => (
                <RouterLink
                  to={pages[key]}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem key={key} onClick={handleCloseNavMenu}>
                    {key.toUpperCase()}
                  </MenuItem>
                </RouterLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
