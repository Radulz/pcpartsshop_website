import React, { useState, useEffect } from "react";
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

import { connect } from "react-redux";

const NavBar = ({ productsAddedToCart }) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    productsAddedToCart.forEach((x) => {
      count += x.qty;
    });
    setCartCount(count);
  }, [productsAddedToCart, cartCount]);
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
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              style={{ marginLeft: "20px" }}
            >
              Login
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    productsAddedToCart: state.shopReducer.productsAddedToCart,
  };
};

export default connect(mapStateToProps)(NavBar);
