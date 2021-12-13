import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Input,
  OutlinedInput,
  FormControl,
  TextField,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

const AddressForm = ({ next }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => next(data);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="component-simple">First Name</InputLabel>
                <Input
                  id="component-simple"
                  fullWidth
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                <Input
                  id="component-simple"
                  fullWidth
                  {...register("lastName", { required: true, maxLength: 20 })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input
                  id="component-simple"
                  {...register("email", { required: true, maxLength: 32 })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="component-simple">County</InputLabel>
                <Input
                  id="component-simple"
                  {...register("county", { required: true, maxLength: 20 })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="component-simple">City</InputLabel>
                <Input
                  id="component-simple"
                  {...register("city", { required: true, maxLength: 20 })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel htmlFor="component-simple">Address1</InputLabel>
                <Input
                  id="component-simple"
                  fullWidth
                  {...register("address1", { required: true, maxLength: 100 })}
                />
              </FormControl>
            </Grid>
            {/* <FormInput
              name="firstName"
              label="First Name"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="email" label="Email" />
            <FormInput name="county" label="County" />
            <FormInput name="city" label="City" />
            <FormInput name="address1" label="AddressLine1" /> */}
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
