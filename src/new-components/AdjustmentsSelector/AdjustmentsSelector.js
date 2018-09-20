import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./AdjustmentsSelector.css";

class AdjustmentsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="adjustments-selector">
        <div className="item"><FontAwesomeIcon icon="palette" /></div>
        <div className="item"><FontAwesomeIcon icon="adjust" /></div>
        <div className="item"><FontAwesomeIcon icon="tint" /></div>
        <div className="item"><FontAwesomeIcon icon="arrows-alt" /></div>
        <div className="item"><FontAwesomeIcon icon="wheelchair" /></div>
        <div className="item"><FontAwesomeIcon icon="cog" /></div>
      </div>
    );
  }
}

export default AdjustmentsSelector;
