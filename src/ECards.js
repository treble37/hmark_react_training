import React from "react";

class ECards extends React.Component {
  render() {
    const eCards = [
      { sku: 1, name: "Cory, You're Amazing", category: "Truth." },
      { sku: 2, name: "Happy Birthday Nadia!", category: "Birthday" },
      { sku: 3, name: "Happy Father's Day!", category: "Father's Day" }
    ];
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
    );
  }
}

export default ECards;
