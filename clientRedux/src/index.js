import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import Reducer from './reducers/index';
import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(Reducer , compose(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

reportWebVitals();
