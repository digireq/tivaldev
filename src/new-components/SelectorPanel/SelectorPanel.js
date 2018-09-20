import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SelectorPanel.css";
import AdjustmentsSelector from "../AdjustmentsSelector/AdjustmentsSelector";

class SelectorPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="selector-panel">
        <div className="selector-panel__top">
          <div className="item">
            <FontAwesomeIcon icon="bath" size="2x" />
            <span className="item__label">Toalett</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon="coffee" size="2x" />
            <span className="item__label">Kök</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon="bed" size="2x" />
            <span className="item__label">Sovrum</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon="umbrella-beach" size="2x" />
            <span className="item__label">Balkong</span>
          </div>
        </div>
        <div className="adjustments">
          <span className="adjustments__title">Konfigurera</span>
          <AdjustmentsSelector />
        </div>
      </div>
    );
  }
}

export default SelectorPanel;
