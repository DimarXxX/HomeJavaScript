import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/createStore';
import { Provider } from 'react-redux';






ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
    registerServiceWorker();
