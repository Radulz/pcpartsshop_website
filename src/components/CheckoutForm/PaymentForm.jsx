import React, { useState, useEffect } from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import Review from "./Review";
import { connect } from "react-redux";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

const PaymentForm = ({
  productsAddedToCart,
  shippingData,
  backStep,
  nextStep,
  removeAllFromCart,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    productsAddedToCart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [
    productsAddedToCart,
    totalPrice,
    totalItems,
    setTotalItems,
    setTotalPrice,
  ]);
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderId = await axios.post("https://localhost:44326/Order", {
        userEmail: shippingData.email,
        userFirstName: shippingData.firstName,
        userLastName: shippingData.lastName,
        userCity: shippingData.city,
        userCounty: shippingData.county,
        userAddress1: shippingData.address1,
        totalPrice: totalPrice,
      });
      console.log(orderId.data.orderId);
      for (const p of productsAddedToCart) {
        const ItemId = await axios.post("https://localhost:44326/OrderItem", {
          itemId: p.componentId,
          itemQty: p.qty,
          orderId: orderId.data.orderId,
        });
        console.log(ItemId);
        await axios.patch(
          `https://localhost:44326/Order/${orderId.data.orderId}/orderItems/${ItemId.data.orderItemId}`
        );
      }
      //resetare cart
      removeAllFromCart();
      nextStep();
    }
  };
  return (
    <>
      <Review
        productsAddedToCart={productsAddedToCart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {totalPrice} $
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
