import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { JASON } from "../../routes/Test";


export const RegisterTest = (props) => {
  const [email, setEmail] = useState("");
  const [jason, setJSON] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [name, setName] = useState("");
  let error = pwd1 !== pwd2;
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post("/user/create", {
              email,
              name,
              password: pwd1,
            })
            .then(({ data }) => setJSON(JSON.stringify(data, null, 2)))
            .catch((err) => setJSON(JSON.stringify(err, null, 2)));
        }}
      >
        <TextField
          id="name"
          label="name"
          value={name}
          onChange={(event) => {
            let newText = event.target.value;
            setName(newText);
          }}
          variant="filled" />

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
          value={pwd1}
          onChange={(event) => {
            let newText = event.target.value;
            setPwd1(newText);
          }}
          error={error}
          variant="filled" />
        <TextField
          id="password2"
          type="password"
          label="Password2"
          value={pwd2}
          onChange={(event) => {
            let newText = event.target.value;
            setPwd2(newText);
          }}
          error={error}
          variant="filled" />
        <Button
          size="large"
          variant="outlined"
          type="submit"
          color="primary"
          id="form_button"
        >
          Register
        </Button>
        <JASON jason={jason} />
      </form>
    </div>
  );
};
