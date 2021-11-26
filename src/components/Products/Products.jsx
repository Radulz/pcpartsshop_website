import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shoppingActions from "../../redux/Shopping/shopping-actions";

const Products = (props) => {
  const { products = [], isLoadingParts = false } = props;
  const classes = useStyles();
  useEffect(() => {
    props.fetchProducts();
  }, []);
  if (isLoadingParts)
    return (
      <Grid align="center">
        <Typography>Loading parts...</Typography>
      </Grid>
    );
  // const [cpus, setCPUs] = useState();
  // const [gpus, setGPUs] = useState();
  // const [mobos, setMOBOs] = useState();
  // const [psus, setPSUs] = useState();
  // const [rams, setRAMs] = useState();

  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // useEffect(() => {
  //   fetchCPUs();
  //   fetchGPUs();
  //   fetchMOBOs();
  //   fetchPSUs();
  //   fetchRAMs();
  // }, []);

  // const fetchCPUs = async () => {
  //   const result = await axios.get("https://localhost:44326/CPU");
  //   const cpus = result.data;
  //   setCPUs(cpus);
  // };

  // const fetchGPUs = async () => {
  //   const result = await axios.get("https://localhost:44326/GPU");
  //   const gpus = result.data;
  //   setGPUs(gpus);
  // };

  // const fetchMOBOs = async () => {
  //   const result = await axios.get("https://localhost:44326/MOBO");
  //   const mobos = result.data;
  //   setMOBOs(mobos);
  // };

  // const fetchPSUs = async () => {
  //   const result = await axios.get("https://localhost:44326/PSU");
  //   const psus = result.data;
  //   setPSUs(psus);
  // };

  // const fetchRAMs = async () => {
  //   const result = await axios.get("https://localhost:44326/RAM");
  //   const rams = result.data;
  //   setRAMs(rams);
  // };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            maxWidth: "50px",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nam eum, similique doloremque sed hic commodi expedita praesentium
            placeat temporibus, totam officiis blanditiis asperiores dolorem cum
          </Typography>
        </div>
        <div className={classes.container}>
          <Grid
            container
            justify="center"
            spacing={4}
            style={{ height: "100 vh" }}
            lg={8}
          >
            {products &&
              products.map((product, key) => (
                <Grid
                  item
                  key={product.componentId}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                >
                  <Product product={product} addToCart={props.addToCart} />
                </Grid>
              ))}

            {/* {cpus &&
              cpus.map((CPU) => (
                <Grid item key={CPU.componentId} xs={12} sm={6} md={4} lg={4}>
                  <Product product={CPU} />
                </Grid>
              ))}
            {gpus &&
              gpus.map((GPU) => (
                <Grid item key={GPU.componentId} xs={12} sm={6} md={4} lg={4}>
                  <Product product={GPU} />
                </Grid>
              ))}
            {psus &&
              psus.map((PSU) => (
                <Grid item key={PSU.componentId} xs={12} sm={6} md={4} lg={4}>
                  <Product product={PSU} />
                </Grid>
              ))}
            {mobos &&
              mobos.map((MOBO) => (
                <Grid item key={MOBO.componentId} xs={12} sm={6} md={4} lg={4}>
                  <Product product={MOBO} />
                </Grid>
              ))}
            {rams &&
              rams.map((RAM) => (
                <Grid item key={RAM.componentId} xs={12} sm={6} md={4} lg={4}>
                  <Product product={RAM} />
                </Grid>
              ))} */}
          </Grid>
        </div>
      </div>
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
