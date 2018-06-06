import React, { Fragment } from "react";
import ECards from "./ECards";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Home />
        <ECards />
      </Fragment>
    );
  }
}

export default App;
