//importando desde React el componente
import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-darkk bg-dark">
        <a href="Mr Packages" className="text-white">
          {this.props.tittle}
        </a>
      </nav>
    );
  }
}
export default Navigation;