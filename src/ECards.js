import React from "react";
import ManageECard from "./ManageECard";

/* 1. Place add ecard button above the ecards
 * 2. On click, display ManageECard (a form for adding a new e-card)*/

class ECards extends React.Component {
  render() {
    const eCards = [
      { sku: 1, name: "Cory, You're Amazing", category: "Truth." },
      { sku: 2, name: "Happy Birthday Nadia!", category: "Birthday" },
      { sku: 3, name: "Happy Father's Day!", category: "Father's Day" }
    ];
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
            {eCards.map(card => {
              return (
                <tr>
                  <td>{card.sku}</td>
                  <td>{card.name}</td>
                  <td>{card.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ECards;
