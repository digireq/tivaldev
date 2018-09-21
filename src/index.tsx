import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/css/index.css';

import App from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
