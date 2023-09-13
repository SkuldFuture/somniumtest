import {
  AppBar,
  Box,
  Button,
  Link,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";
import { MouseEvent, useState } from "react";

export const Header = () => {
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
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <GoogleIcon />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "space-between" }}>
            <Button component={RouterLink} to="/">
              link1
            </Button>
            <Button
              component={RouterLink}
              to="favorites"
            >
              link2
            </Button>
            <Button
              component={RouterLink}
              to="history"
            >
              link3
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
