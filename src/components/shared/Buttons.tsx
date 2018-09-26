import * as React from 'react';


/**
 * Grid properties.
 */
export interface INavButton {

  /** prop1 description */
  text: string;
}

export const NavButton = ({text}: {text: string}) => (
  <a><button>{text}</button></a>
)