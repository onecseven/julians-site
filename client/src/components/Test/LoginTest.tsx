import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { JASON } from "../../routes/Test";


export const LoginTest = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [jason, setJSON] = useState("");
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post("/user/login", {
              email,
              password: pwd,
            })
            .then((response) => setJSON(JSON.stringify(response, null, 2)))
            .catch((err) => setJSON(JSON.stringify(err, null, 2)));
        }}
      >
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={(event) => {
            let newText = event.target.value;
            setEmail(newText);
          }}
          variant="filled" />
        <div className="br" />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={pwd}
          onChange={(event) => {
            let newText = event.target.value;
            setPwd(newText);
          }}
          variant="filled" />
        <Button
          size="large"
          variant="outlined"
          type="submit"
          color="primary"
          id="form_button"
        >
          Log in
        </Button>
        <JASON jason={jason} />
      </form>
    </div>
  );
};
