import React from "react";
import ManageECard from "./ManageECard";
import PropTypes from "prop-types";

/* 1. Place add ecard button above the ecards
 * 2. On click, display ManageECard (a form for adding a new e-card)
 * 3. Delete ECard*/

class ECards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onAddECardClick}>Add ECard</button>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.props.eCards.map(card => {
              return (
                <tr key={card.sku}>
                  <td>{card.sku}</td>
                  <td>{card.name}</td>
                  <td>{card.category}</td>
                  <td>
                    <button
                      onClick={event => {
                        this.props.onDeleteECardClick(event, card);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

ECards.propTypes = {
  eCards: PropTypes.array.isRequired,
  onAddECardClick: PropTypes.func.isRequired
};

export default ECards;
