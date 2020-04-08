import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import 'antd/dist/antd.css';
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    burgerBuilder:burgerBuilderReducer,
  
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
//const store = createStore(rootReducer,applyMiddleware(thunk) +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
