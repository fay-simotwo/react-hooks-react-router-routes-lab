import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
      </Switch>
    </Router>
  );
}
export default App;