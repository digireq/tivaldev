import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Header from "../new-components/Header/Header";
import SelectorPanel from "../new-components/SelectorPanel/SelectorPanel";
import AdjustmentsSelector from "../new-components/AdjustmentsSelector/AdjustmentsSelector";

import "../new-components/registerFontAwesomeIcons";
import "../new-components/index.css";

storiesOf("Header", module).add("default", () => <Header />);

storiesOf("Selector Panel", module).add("default", () => (
  <div className="sb-wrapper">
    <SelectorPanel />
  </div>
));

storiesOf("Adjustments Selector", module).add("default", () => (
  <div className="sb-wrapper">
    <AdjustmentsSelector />
  </div>
));
