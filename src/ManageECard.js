import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

class ManageECard extends React.Component {
  static propTypes = {
    eCard: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    eCard: { ...this.props.eCard }
  };

  handleChange = event => {
    const eCard = { ...this.state.eCard };
    eCard[event.target.name] = event.target.value;
    // use object shorthand (instead of {eCard: eCard})
    this.setState({ eCard });
  };

  render() {
    const { sku, name, category } = this.state.eCard;
    return (
      <form onSubmit={event => this.props.onSubmit(event, this.state.eCard)}>
        <TextInput
          label={"SKU"}
          name={"sku"}
          value={sku}
          changeFunction={this.handleChange}
        />
        <TextInput
          label={"Name"}
          name={"name"}
          value={name}
          changeFunction={this.handleChange}
        />
        <TextInput
          label={"Category"}
          name={"category"}
          value={category}
          changeFunction={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ManageECard;
