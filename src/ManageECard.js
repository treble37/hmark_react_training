import React from "react";
import PropTypes from "prop-types";

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

ManageECard.propTypes = {
  eCard: PropTypes.object.isRequired
};

export default ManageECard;
