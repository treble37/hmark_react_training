import React, { Fragment } from "react";
import ECards from "./ECards";
import ManageECard from "./ManageECard";
import Home from "./Home";
import Navigation from "./Navigation";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      newECard: {
        sku: "",
        name: "",
        category: ""
      },
      eCards: []
    };
  }

  handleNavigationClick = event => {
    event.preventDefault();
    const newPage = event.target.pathname.replace("/", "");
    this.setState({ currentPage: newPage });
  };

  handleAddECardClick = event => {
    this.setState({ currentPage: "ManageECard" });
  };

  componentDidMount() {
    console.log("MOUNTED!");
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  handleDeleteECardClick = (event, eCard) => {
    event.preventDefault();
    this.setState({
      eCards: this.state.eCards.filter(function(card) {
        return card !== eCard;
      })
    });
  };

  handleSaveECard = (event, eCard) => {
    event.preventDefault(); //prevent the page reload
    // add new eCard to state
    this.setState({
      eCards: [...this.state.eCards, eCard],
      currentPage: "ECards"
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.firstName + " " + this.state.lastname}
        <Navigation />
        {this.state.hasError ? (
          <div>Whoops! 🔥</div>
        ) : (
          <Fragment>
            <Route path="/" component={Home} exact />
            <Route
              path="/ecards"
              render={() => (
                <ECards
                  eCards={this.state.eCards}
                  onDeleteClick={this.handleDeleteECardClick}
                />
              )}
            />
            <Route
              path="/manage"
              render={() => (
                <ManageECard
                  eCard={this.state.newECard}
                  onSubmit={this.handleSaveECard}
                />
              )}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
