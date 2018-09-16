import React, { Component } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from "./Contact";
import Settings from "./Settings";
import Notifications from "./Notifications";
import HomeConfigurator from "./HomeConfigurator";
import Overview from "./Overview";
import menuicon from './images/menubtn3.png';
import menucloseicon from './images/menuclosebtn2.png';
import myhomeimg from './images/myhome.png';
import contactimg from './images/contact.png';
import settingsimg from './images/settings.png';
import notificationsimg from './images/notifications.png';
import newproductionimg from './images/newproduction.png';
import aftermarketimg from './images/aftermarket.png';
import redesignimg from './images/redesign.png';
import backbtn from './images/backbtn2.png';

class Menu extends Component {
  render() {
      return (
        <header>
          <div className="menulink"><NavLink to="/" className=""><img alt="" src={myhomeimg} /></NavLink></div>
          <div className="menulink"><NavLink to="/notifications" className=""><img src={notificationsimg} alt="" /><div className="counter">2</div></NavLink></div>
          <div className="menulink"><NavLink to="/contact" className=""><img alt="" src={contactimg} /></NavLink></div>
          <div className="menulink"><NavLink to="/settings" className=""><img alt="" src={settingsimg} /></NavLink></div>
        </header>
      );
  }
}

class MyHome extends Component {
  render() {
      return (
          <section>
              <h1>Min bostad</h1>
              <div className="myhomeheader">
                <img src={newproductionimg} />Nyproduktion
              </div>
              <NavLink to="/homeconfigurator"><button>Tillvalsdesign</button></NavLink>
              <NavLink to="/overview"><button>Översikt</button></NavLink>
              <button>Dokument & avtal</button>
              <div className="myhomeheader">
                <img src={aftermarketimg} />Eftermarknad
              </div>
              <button>Felanmälan</button>
              <div className="myhomeheader">
                <img src={redesignimg} />Renovering
              </div>
              <button>Designer</button>
              <button>Dokument & avtal</button>
          </section>  
      );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        menuactive: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
}

handleMenuClick() {
    this.setState({
        menuactive: !this.state.menuactive,
    });
}

  render() {
    return (
      <HashRouter>
        <div className="container">
          <Route exact path="/" component={MyHome}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/notifications" component={Notifications}/>
          <Route path="/homeconfigurator" component={HomeConfigurator}/>
          <Route path="/overview" component={Overview}/>
          <div onClick={this.handleMenuClick} className= {this.state.menuactive ? "menubuttonclose" : "menubutton"}><img alt="" src={this.state.menuactive? menucloseicon: menuicon} /></div>
          <img src={backbtn} alt="" className="backbtn" />
          {this.state.menuactive && <Menu />}
        </div>
      </HashRouter>
    );
  }
}

export default App;