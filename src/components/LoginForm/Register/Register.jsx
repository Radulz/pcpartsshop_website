import React from "react";
import LoginLogo from "../../../images/LoginLogo.png";
import { useState } from "react";
import Box from "@material-ui/core/Box/Box";
import { TextField } from "@material-ui/core";

const Register = (props) => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  return (
    <div className="base-container" style={{ marginTop: "100px" }}>
      {/* <div className="header">Register</div> */}
      <div className="content">
        <div className="image">
          <img src={LoginLogo} alt="logo" />
        </div>
        <div className="form">
          <div className="form-group">
            <TextField
              id="emailfield"
              label="Email"
              variant="standard"
              onChange={(event) => {
                console.log(event.target.value);
                setemail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              id="namefield"
              label="Full Name"
              variant="standard"
              onChange={(event) => {
                console.log(event.target.value);
                setname(event.target.value);
              }}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="form-group">
            <TextField
              id="phonefield"
              label="Phone"
              variant="standard"
              onChange={(event) => {
                console.log(event.target.value);
                setphone(event.target.value);
              }}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="form-group">
            <TextField
              id="passwordfield"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(event) => {
                console.log(event.target.value);
                setpassword(event.target.value);
              }}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="form-group">
            <TextField
              id="confirmpasswordfield"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(event) => {
                console.log(event.target.value);
                setconfirmpassword(event.target.value);
              }}
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
        <button type="button" className="btn" style={{ marginTop: "50px" }}>
          Register
        </button>
      </div>
    </div>
  );
};
export default Register;
