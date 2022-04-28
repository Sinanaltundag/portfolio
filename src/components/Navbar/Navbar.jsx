import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { MyThemeContext, SessionContext} from "../../Context/SessionContext";
import AvatarImg from "../../assets/avatar.jpg";
import LogoutDialog from "../../helpers/LogoutDialog";
import  { MaterialUISwitch } from "./toggle";
import { ButtonGroup, FormControlLabel} from "@mui/material";

const pages = ["Main", "Projects", "Class Notes"];
const settings = ["SignIn", "SignUp"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { setActiveTheme,activeTheme } = React.useContext(MyThemeContext);
  const {userInfo}= React.useContext(SessionContext)
  console.log(userInfo)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /*   const handleUserMenuBtn =(setting)=>{
setting==="LogOut"&& setSignIn(false);
  } */

  return (
    <AppBar position="sticky"  sx={{ color:"text.primary"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
          >
            Sinan's Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
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
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="outlined"
      >
                    <Link to={page}>
                      <Button  fullWidth>
                  <Typography textAlign="center" variant="h5" >
                      {page}
                  </Typography>
                      </Button>
                    </Link>
                      </ButtonGroup>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
          >
            Sinan's Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <NavLink to={page} key={page}>
                <Button
                size="large"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
          

<FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }}  onChange={()=>setActiveTheme(!activeTheme)}/>}
        label="MUI switch"
      />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* avatar get from user if signin */}
                <Avatar
                  alt={userInfo ? userInfo.email?.toUpperCase():"Guest"}
                  src={userInfo.photoURL ? AvatarImg: null}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to={setting}>
                      <Button>{setting}</Button>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              {/* Added Logout button if signin successful */}
              <MenuItem onClick={handleCloseUserMenu}>
                {userInfo && <LogoutDialog />}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
