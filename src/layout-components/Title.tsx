import * as ReactDOM from 'react-dom';
import * as React from 'react';

const titleEl: HTMLElement | null = document.getElementById("title");

export const Title = ({ title }: { title: string }) => (
  titleEl && ReactDOM.createPortal(
    <React.Fragment>{title}</React.Fragment>, titleEl
  )
)