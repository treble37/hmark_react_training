import React from "react";

class TextInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.changeFunction}
        />
      </React.Fragment>
    );
  }
}

export default TextInput;
