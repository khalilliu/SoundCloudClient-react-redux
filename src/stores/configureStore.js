import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';

import {createLogger} from 'redux-logger';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const configureStore = (initialState) => {
	return createStore(rootReducer, initialState);
};

export default configureStore;

