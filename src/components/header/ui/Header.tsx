import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";

const navItems = ["Home", "History", "Favorites"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElNav)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  };
  
  const handleCloseNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(null)
  } 

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component={"nav"}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Somnium Check connection
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
