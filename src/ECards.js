import React from "react";
import ManageECard from "./ManageECard";
import PropTypes from "prop-types";

/* 1. Place add ecard button above the ecards
2. On click, display ManageECard (a form for adding a new e-card)
3. Delete ECard
4. Edit ECard
5. Don't display sku/name/category row header if empty ecards*/

class ECards extends React.Component {
  renderTable() {
    return (
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
    );
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onAddECardClick}>Add ECard</button>
        {this.props.eCards.length === 0 ? (
          <div>No Cards</div>
        ) : (
          this.renderTable()
        )}
      </React.Fragment>
    );
  }
}

ECards.propTypes = {
  eCards: PropTypes.array.isRequired,
  onAddECardClick: PropTypes.func.isRequired,
  onDeleteECardClick: PropTypes.func.isRequired
};

export default ECards;
