import React, { Component } from "react";
import "../css/styles.css";

class Header extends Component {
  state = {
    title: "The keywords are:",
    keywords: ""
  };

  inputChangeHandler = event => {
    //console.log("changed", event.target.value);
    this.setState({ keywords: event.target.value });
  };

  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
        <div>{this.state.title}</div>
      </header>
    );
  }
}

export default Header;
