import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
//import rootReducer from './reducers/reducers';
import App from './App';
const initialState = {};
const history = createHistory();
//const store = configureStore(initialState, history);


//const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render( 
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));

