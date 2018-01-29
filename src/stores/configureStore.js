import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; 
import {routerMiddleware} from 'react-router-redux';

import rootReducer from '../reducers/index';
//create history api
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

//redux-logger middleware
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(myRouterMiddleware, logger)(createStore);

const configureStore = (initializeState) => {return createStoreWithMiddleware(rootReducer, initializeState)};


export {history, configureStore};

