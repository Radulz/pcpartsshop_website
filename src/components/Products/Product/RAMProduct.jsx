import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const RAMProduct = (props) => {
  const { product } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="140"
        title="prodf"
        image={product.image}
        alt="procesor"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.make + " " + product.model}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{
            __html: "Capacity: " + product.capacity + " GB",
          }}
          variant="body2"
          color="textSecondary"
        />
        <Typography
          dangerouslySetInnerHTML={{
            __html: "Frequency: " + product.freq + " MHz ",
          }}
          variant="body2"
          color="textSecondary"
        />
        <Typography
          dangerouslySetInnerHTML={{
            __html: "Type: " + product.type,
          }}
          variant="body2"
          color="textSecondary"
        />
        <Typography
          dangerouslySetInnerHTML={{
            __html: "Voltage: " + product.voltage + " V",
          }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="h5">{product.price + "$"}</Typography>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => props.addToCart(product.componentId)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RAMProduct;
