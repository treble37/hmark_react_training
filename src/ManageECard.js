import React from "react";
import PropTypes from "prop-types";

class ManageECard extends React.Component {
  static propTypes = {
    eCard: PropTypes.object.isRequired
  };

  state = {
    eCard: { ...this.props.eCard }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>SKU:</label>
        <input type="text" value={this.state.eCard.sku} />
        <label>Name</label>
        <input type="text" value={this.state.eCard.value} />
        <label>Category</label>
        <input type="text" value={this.state.eCard.category} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ManageECard;
