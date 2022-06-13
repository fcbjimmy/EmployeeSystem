import React from "react";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        {/* <Login /> */}
        <Signup />
      </div>
    </>
  );
}

export default App;
