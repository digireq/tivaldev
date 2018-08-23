import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu'

class Nav extends Component {
    showSettings (event) {
      event.preventDefault();
    }

    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
   
    render () {
      return (
        <Menu right>
          <a id="about" className="menu-item" href="/about"><img alt="" src={process.env.PUBLIC_URL + '/images/myhome.png'} />Min bostad</a>
          <ul><li><a id="about" className="menu-item" href="/about"><h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2></a></li></ul>
          <a id="contact" className="menu-item" href="/contact"><img alt="" src={process.env.PUBLIC_URL + '/images/contact.png'} />Kontakta Byggnads AB</a>
          <a onClick={ this.showSettings } className="menu-item--small" href=""><img alt="" src={process.env.PUBLIC_URL + '/images/settings.png'} />Inställningar</a>
        </Menu>
      );
    }
  }

export default Nav;