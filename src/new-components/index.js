import React, { Component } from "react";

import "./index.css";
import Header from "./Header/Header";
import SelectorPanel from "./SelectorPanel/SelectorPanel";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faPalette,
  faAdjust,
  faCog,
  faTint,
  faWheelchair,
  faArrowsAlt,
  faCoffee,
  faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";

// Add fontawesome icons to library
library.add(
  faBath,
  faBed,
  faCoffee,
  faUmbrellaBeach,
  faPalette,
  faAdjust,
  faCog,
  faTint,
  faWheelchair,
  faArrowsAlt
);

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
