import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/home";
import Help from "./pages/help";
import About from "./pages/about"

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/signin" Component={Register}/>     
          <Route exact path="/help" Component={Help}/>
        </Routes>
        </Router>
    );
  }
}

export default App;