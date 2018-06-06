import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="Home" onClick={this.props.onLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="ECards" onClick={this.props.onLinkClick}>
              ECards
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
