import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => (
  <React.Fragment>
    <NavLink to="/"><button>home</button></NavLink>
    <NavLink to="/contact"><button>contact</button></NavLink>
  </React.Fragment>
)