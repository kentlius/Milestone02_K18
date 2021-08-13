import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Social from "./Pages/Social";
import Chat from "./Pages/Chat/Chat";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Registration} />
          <PrivateRoute path="/connect" exact component={Social} />
          <PrivateRoute path="/chat" exact component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
