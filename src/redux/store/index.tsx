import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';

const middleware = applyMiddleware(logger);

export const store = createStore(reducer.entities,middleware);

export default store