import React from "react";

import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = (props) => {
  const classes = useStyles();
  const { product } = props;
  return (
    <Card>
      <CardMedia
        image={product.image}
        alt={product.make + " " + product.model}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">
          {product.make + " " + product.model}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cartActions}>
        <div class={classes.cartActionsDivLeft}>
          <IconButton type="button" size="medium">
            -
          </IconButton>
          <TextField
            id="quantity"
            margin="normal"
            type="readonly"
            defaultValue="1"
            //style={{ width: 50, textAlign: "center" }}
            // onChange={event => {
            //   setQuantity(event.target.value);
            //   props.addToTotalSum(totalProductPrice);
            // }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              style: { width: 50, textAlign: "center" },
            }}
          />
          <IconButton type="button" size="medium">
            +
          </IconButton>
        </div>
        <div class={classes.cartActionsDivRight}>
          <Typography variant="h6" style={{ marginRight: "10px" }}>
            {product.price + "$"}
          </Typography>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => props.removeFromCart(product.componentId)}
          >
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
