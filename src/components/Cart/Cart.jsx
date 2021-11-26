import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shoppingActions from "../../redux/Shopping/shopping-actions";

import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const { products = [], isLoadingParts = false } = props;
  const isEmpty = !products.length;
  const classes = useStyles();
  useEffect(() => {
    props.fetchProducts();
  }, []);
  console.log("CartProducts: ", products);
  if (isLoadingParts)
    return (
      <Grid align="center">
        <Typography>Loading parts...</Typography>
      </Grid>
    );

  const EmptyCart = () => (
    <Typography variant="subtitle1"> Your cart is empty!</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {products &&
          products
            .filter((product) => {
              return product.isAddedToCart ? product : null;
            })
            .map((item) => (
              <Grid item xs={12} sm={4} key={item.componentId}>
                <CartItem
                  product={item}
                  removeFromCart={props.removeFromCart}
                />
              </Grid>
            ))}
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal:</Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => {
                products &&
                  products.map((item) => (item.isAddedToCart = false));
              }}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </Grid>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart{" "}
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

function mapStateToProps(state) {
  const {
    shopReducer: { products, productsAddedToCart, isLoadingProducts },
  } = state;
  return {
    products: products.map((p) => {
      const isAddedToCart = productsAddedToCart.includes(p.componentId);
      return { ...p, isAddedToCart };
    }),

    isLoadingProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(shoppingActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
