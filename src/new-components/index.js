import React, { Component } from "react";

import './registerFontAwesomeIcons';
import "./index.css";
import Header from "./Header/Header";
import SelectorPanel from "./SelectorPanel/SelectorPanel";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-content">
        <Header />
        <SelectorPanel />
      </div>
    );
  }
}

export default App;
