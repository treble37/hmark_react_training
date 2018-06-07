import React from "react";

class ManageECard extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>SKU:</label>
        <input type="text" />
        <label>Name</label>
        <input type="text" />
        <label>Category</label>
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ManageECard;
