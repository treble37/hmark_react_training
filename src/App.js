import React, { Fragment } from "react";
import ECards from "./ECards";
import Home from "./Home";
import Navigation from "./Navigation";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Home />
        <ECards />
      </Fragment>
    );
  }
}

export default App;
