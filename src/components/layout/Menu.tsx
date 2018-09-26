import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => (
  <React.Fragment>
    <NavLink exact to="/"><button>Home</button></NavLink>
    <NavLink to="/categories"><button>Categories</button></NavLink>
    <NavLink to="/contact"><button>Contact</button></NavLink>
  </React.Fragment>
)