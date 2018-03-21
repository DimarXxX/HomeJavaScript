import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/createStore';




ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
