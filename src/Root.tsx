import { BrowserRouter as Router, Route } from "react-router-dom";
import * as React from 'react';
import Category from 'src/components/page/Category';
import Categories from 'src/components/page/Categories';
import { Menu } from 'src/components/layout/Menu';
import Home from 'src/components/page/Home';
import Contact from 'src/components/page/Contact';
import { GenerateFakeDb } from './utils/MigrationUtils';
import { routes } from 'src/routes';


export default class Root extends React.Component {

  componentDidMount() {
    // GenerateFakeDb();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Menu />
            
            { routes.map(route => (
              <Route key={route.path} 
                exact={route.exact} 
                path={route.path} 
                component={route.component} 
              />
            )) }

          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}


// import React, { Component } from 'react';
// import 'react-circular-progressbar/dist/styles.css';
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
// import Contact from "./components/Contact";
// import Settings from "./components/Settings";
// import Notifications from "./components/Notifications";
// import HomeConfigurator from "./components/HomeConfigurator";
// import Overview from "./components/Overview";
// import menuicon from './images/menubtn3.png';
// import menucloseicon from './images/menuclosebtn2.png';
// import myhomeimg from './images/myhome.png';
// import contactimg from './images/contact.png';
// import settingsimg from './images/settings.png';
// import notificationsimg from './images/notifications.png';
// import newproductionimg from './images/newproduction.png';
// import aftermarketimg from './images/aftermarket.png';
// import redesignimg from './images/redesign.png';
// import backbtn from './images/backbtn2.png';

{/* <section>
              <Hej a='a'/>
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
          </section>   */}

// class Menu extends Component {
//   render() {
//     return (
//       <header>
//         <div className="menulink"><NavLink to="/" className=""><img alt="" src={myhomeimg} /></NavLink></div>
//         <div className="menulink"><NavLink to="/notifications" className=""><img src={notificationsimg} alt="" /><div className="counter">2</div></NavLink></div>
//         <div className="menulink"><NavLink to="/contact" className=""><img alt="" src={contactimg} /></NavLink></div>
//         <div className="menulink"><NavLink to="/settings" className=""><img alt="" src={settingsimg} /></NavLink></div>
//       </header>
//     );
//   }
// }
// class App extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       menuactive: false,
//     };
//     this.handleMenuClick = this.handleMenuClick.bind(this);
//   }

//   handleMenuClick() {
//     this.setState({
//       menuactive: !this.state.menuactive,
//     });
//   }

//   render() {
//     return (
//       <HashRouter>
//         <div className="container">
//           <Route exact path="/" component={MyHome} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/settings" component={Settings} />
//           <Route path="/notifications" component={Notifications} />
//           <Route path="/homeconfigurator" component={HomeConfigurator} />
//           <Route path="/overview" component={Overview} />
//           <div onClick={this.handleMenuClick} className={this.state.menuactive ? "menubuttonclose" : "menubutton"}><img alt="" src={this.state.menuactive ? menucloseicon : menuicon} /></div>
//           <img src={backbtn} alt="" className="backbtn" />
//           {this.state.menuactive && <Menu />}
//         </div>
//       </HashRouter>
//     );
//   }
// }

// export default App;