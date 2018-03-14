import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import {store} from './store/CreateStore';


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
