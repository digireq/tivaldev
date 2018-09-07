import React, { Component } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import MyHome from "./MyHome";
import Overview from "./Overview";
import Contact from "./Contact";
import Settings from "./Settings";
import Notifications from "./Notifications";

class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Menu right>
            <NavLink to="/" className="menu-item"><img alt="" src={process.env.PUBLIC_URL + '/images/myhome.png'} />Min bostad</NavLink>
            <NavLink to="/overview" className="menu-item"><img alt="" src={process.env.PUBLIC_URL + '/images/overview.png'} />Översikt</NavLink>
            <NavLink to="/contact" className="menu-item"><img alt="" src={process.env.PUBLIC_URL + '/images/contact.png'} />Kontakta Byggnads AB</NavLink>
            <NavLink to="/settings" className="menu-item"><img alt="" src={process.env.PUBLIC_URL + '/images/settings.png'} />Inställningar</NavLink>
          </Menu>
          <header>
            <img src={process.env.PUBLIC_URL + '/images/tival-logo-rgb-white.png'} alt="" />
            <NavLink to="/notifications" className="notifications"><img src={process.env.PUBLIC_URL + '/images/notifications.png'} alt="" /><div className="counter">2</div></NavLink>
          </header>
          <div className="container">
            <Route exact path="/" component={MyHome}/>
            <Route path="/overview" component={Overview}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/notifications" component={Notifications}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;