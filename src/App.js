import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Social from "./Pages/Social";
import Chat from "./Pages/Chat";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/connect" exact component={Social} />
          <PrivateRoute path="/chat" exact component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
