import React from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import csstyle from "./login.module.css";
import { FaUserAlt } from "react-icons/fa";
import Button from "../UI/Button";

function Signup() {
  return (
    <Card>
      <form>
        <FaUserAlt className={csstyle.icon} />
        <legend className={csstyle.legend}>Sign Up</legend>
        <div className={csstyle.description}>
          Please fill this form to create an account
        </div>
        <Input placeholder={"Name"} required name={"name"} />
        <Input placeholder={"Email"} required name={"email"} />
        <Input placeholder={"Password"} required name={"password"} />
        <Input placeholder={"Confirm Password"} required name={"confirmpass"} />
      </form>
      <Button>Sign Up</Button>
    </Card>
  );
}

export default Signup;
