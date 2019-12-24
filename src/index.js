import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules//materialize-css/dist/css/materialize.min.css';
import '../node_modules//materialize-css/dist/js/materialize.min.js';
import './main.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));



ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));