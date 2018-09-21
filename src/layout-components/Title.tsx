import * as ReactDOM from 'react-dom';
import * as React from 'react';

const titleEl = document.getElementById("title");

export const Title = ({ title }: { title: string }) => (
  ReactDOM.createPortal(
    <React.Fragment>{title}</React.Fragment>, titleEl ? titleEl : document.createElement("title")
  )
)