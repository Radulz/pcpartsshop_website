import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
//import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/LoginLogo.png";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src={logo}
            alt="PCPartsShop"
            height="25px"
            className={classes.image}
          />
          PCPartsShop
        </Typography>
        <div className={classes.grow} />
        {location.pathname === "/" && (
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button variant="outlined" style={{ marginLeft: "20px" }}>
              Login
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
