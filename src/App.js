import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/counter/Counter";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar text={"Boca Shop"} />
        <Home />
        <Counter />
      </div>
    );
  }
}

export default App;
