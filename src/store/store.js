import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CombinedReducer from '../reducers';

const middlewares = applyMiddleware(thunk);
const store = createStore(CombinedReducer, middlewares);
export default store;