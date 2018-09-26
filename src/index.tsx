import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './styles/css/index.css';

import App from './Root';
import registerServiceWorker from './registerServiceWorker';

// Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBoMvv69uQbJXdcd37O1jFdEElou47AqKE',
  authDomain: 'tivaldev.firebaseapp.com',
  projectId: 'tivaldev'
});
export const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
