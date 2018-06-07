import React, { Fragment } from "react";
import ECards from "./ECards";
import ManageECard from "./ManageECard";
import Home from "./Home";
import Navigation from "./Navigation";

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
        <Navigation onLinkClick={this.handleNavigationClick} />
        {this.state.currentPage === "Home" && <Home />}
        {this.state.currentPage === "ECards" && (
          <ECards
            onAddECardClick={this.handleAddECardClick}
            onDeleteECardClick={this.handleDeleteECardClick}
            eCards={this.state.eCards}
          />
        )}
        {this.state.currentPage === "ManageECard" && (
          <ManageECard
            eCard={this.state.newECard}
            onSubmit={this.handleSaveECard}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
