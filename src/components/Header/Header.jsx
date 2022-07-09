import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Badge, TextField } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import { clothesContext } from "../../contexts/clothesContext";
import "../Header/Header.css";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const { getClothes } = React.useContext(clothesContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { getCart, count } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [search, setSearch] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage] = React.useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  React.useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
    });
  }, [search, currentPage]);

  React.useEffect(() => {
    getClothes();
  }, [searchParams]);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary">
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
              display: { xs: "block", md: "none" },
            }}>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate("/home");
              }}>
              <Typography textAlign="center">Home</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate(
                  location.pathname === "/clothes"
                    ? `/clohes${window.location.search}`
                    : "/clothes"
                );
              }}>
              <Typography color="inherit" textAlign="center">
                Collection
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate("/add-clothes");
              }}>
              <Typography textAlign="center">Add New</Typography>
            </MenuItem>
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          onClick={() => navigate("/")}
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "nunito",
            fontWeight: 400,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}>
          MONO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            className="button-header"
            color="inherit"
            onClick={() => {
              handleCloseNavMenu();
              navigate("/home");
            }}
            sx={{ my: 2, color: "inherit", display: "block" }}>
            Home
          </Button>
          <Button
            className="button-header"
            color="inherit"
            onClick={() => {
              handleCloseNavMenu();
              navigate(
                location.pathname === "/clothes"
                  ? `/clothes${window.location.search}`
                  : "/clothes"
              );
            }}
            sx={{ my: 2, color: "inherit", display: "block" }}>
            Collection
          </Button>
          <Button
            className="header"
            color="inherit"
            onClick={() => {
              handleCloseNavMenu();
              navigate("/add-clothes");
            }}
            sx={{ my: 2, color: "inherit", display: "block" }}>
            Add New
          </Button>
        </Box>
        <Typography
          className="logo"
          variant="h6"
          noWrap
          component="a"
          onClick={() => navigate("/")}
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "nunito",
            fontWeight: 400,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            marginRight: "500px",
            fontSize: "70px",
          }}>
          MONO
        </Typography>
        <Box className="button-header">
          <TextField
            className="button-header"
            color="grey"
            value={search}
            onChange={e => setSearch(e.target.value)}
            label="Search"
            type="search"
            variant="standard"
            style={{ width: "80px", marginBottom: "10px" }}
          />
        </Box>

        <Box>
          <IconButton
            className="button-header"
            onClick={() => navigate("/cart")}
            aria-label="Add to shopping cart">
            {" "}
            <Badge className="button-header" badgeContent={count} color="grey">
              <AddShoppingCartIcon
                className="button-header"
                style={{ color: "primary" }}
              />
            </Badge>
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}></IconButton>
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
            onClose={handleCloseUserMenu}>
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default Header;
