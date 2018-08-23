import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';

import App from './Root';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
