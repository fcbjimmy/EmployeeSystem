import React from "react";
import css from "./login.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { MdLockOutline } from "react-icons/md";
import Card from "../UI/Card";

function Login() {
  return (
    <Card>
      <form>
        <div className={css.test}>
          <MdLockOutline className={css.icon} />
        </div>
        <legend>Login</legend>
        <div>
          <Input
            type="text"
            placeholder="Username"
            required
            name={"username"}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            required
            name={"password"}
          />
        </div>
        <Button>submit</Button>
        <div>
          Do you have an account?
          <br />
        </div>
        <a href="#">Sign up!</a>
      </form>
    </Card>
  );
}

export default Login;
