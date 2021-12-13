import React from "react";
import LoginLogo from "../../../images/LoginLogo.png";
import { useState } from "react";
//import Box from "@mui/material/Box";
import { TextField } from "@material-ui/core";
//import "./styles.scss";

//export class Login extends React.Component {
const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="base-container" style={{ marginTop: "100px" }}>
      {/* <div className="header">Login</div> */}
      <div className="content">
        <div className="image">
          <img src={LoginLogo} />
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
              id="passwordfield"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(event) => {
                console.log(event.target.value);
                setemail(event.target.value);
              }}
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
        <button type="button" className="btn" style={{ marginTop: "50px" }}>
          Login
        </button>
      </div>
    </div>
  );
  //}
};
export default Login;
