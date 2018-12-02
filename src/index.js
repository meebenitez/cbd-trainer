import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import keyReducer from './store/keyreducer'
import gameReducer from './store/gamereducer'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
    key: keyReducer,
    game: gameReducer
});



const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
