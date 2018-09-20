import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header">
      <div className="header__brand">TIVAL</div>
        <ul className="header__links">
          <li>
            <a href="#">Hem</a>
          </li>
          <li>
            <a href="#">Om oss</a>
          </li>
          <li>
            <a href="#">Villkor</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
