import React from 'react';
import ReactDOM from 'react-dom';

import App from './new-components/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
