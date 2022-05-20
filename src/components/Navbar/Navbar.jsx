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
import {useSession} from "../../Context/SessionContext";
import LogoutDialog from "../../helpers/LogoutDialog";
import  { MaterialUISwitch } from "./toggle";
import { ButtonGroup, FormControlLabel} from "@mui/material";
import { useCustomTheme } from "../../Context/ThemeContext";

const pages = ["Main", "deneme", "Class_Notes"];
const settings = ["SignIn", "SignUp"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { setActiveTheme,activeTheme } = useCustomTheme();
  const {userInfo}= useSession()

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

  const { setNavbarHeight } = useCustomTheme();

  //!  background için navbar yüksekliğine göre box yükseklik ayarlama "fixed olduğundan buraya koyduk"
  const nav = React.useRef();
  React.useEffect(() => {
    setNavbarHeight(nav.current.clientHeight);

  }, [setNavbarHeight]);
  
  let activeStyle = {
    textDecorationColor: "red",
    color: "brown",
  };
  let nonActiveStyle = {
    textDecoration: "none",
    opacity: 0.8,
    color: "white",
  };
  

  return (
    <AppBar position="fixed"  sx={{ color:"text.primary"}} >
    <div ref={nav}>
      <Container  maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            // color={"text.primary"}
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontFamily:"cursive" }}
          >
            Sinan's Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { sm: "flex", md: "none" } }}>
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
                display: { sm: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        fullWidth
      >
                    <NavLink to={page} >
                      <Button  >
                  <Typography textAlign="center"  >
                      {page}
                  </Typography>
                      </Button>
                    </NavLink>
                      </ButtonGroup>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: "flex", md: "none" } }}
          >
            Sinan's Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <NavLink to={"Main"}
              style={({ isActive }) =>isActive ? activeStyle : nonActiveStyle
            }
            >
                <Button
                size="large"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color:"inherit", display: "block" }}
                ><Typography variant="h6" sx={{mx: 2, }}>
                  Main
                  </Typography>
                </Button>
              </NavLink>
              <NavLink to={"Class%20Notes"}  
              style={({ isActive }) =>isActive ? activeStyle : nonActiveStyle
            }
            >
                <Button
                size="large"
                  onClick={handleCloseNavMenu}
                  // variant="outlined"
                  sx={{ my: 2, color:"inherit", display: "block" }}
                ><Typography variant="h6" >
                  Class Notes
                  </Typography>
                </Button>
              </NavLink>
            {/* {pages.map((page) => (
              <NavLink to={page} key={page} 
              style={({ isActive }) =>isActive ? activeStyle : undefined
            }
            >
                <Button
                size="large"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color:"inherit", display: "block" }}
                ><Typography variant="h6">
                  {page}
                  </Typography>
                </Button>
              </NavLink>
            ))} */}
          </Box>
          

<FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }}  onChange={()=>setActiveTheme(!activeTheme)}/>}
        label="Dark Mode"
      />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* avatar get from user if signin else first letter of email */}
                <Avatar
                  alt={userInfo && userInfo.email?.toUpperCase()}
                  src={userInfo?.photoURL ? userInfo?.photoURL: ""}
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
              {userInfo &&<MenuItem onClick={handleCloseUserMenu}>
                 <LogoutDialog />
              </MenuItem>}
              {userInfo?.email==="peykani@gmail.com"&&<MenuItem onClick={handleCloseUserMenu}>
              <Link to={"/adminPanel"}>
                      <Button>Admin Panel</Button>
                    </Link>
              </MenuItem>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </div>
    </AppBar>
  );
};
export default Navbar;
