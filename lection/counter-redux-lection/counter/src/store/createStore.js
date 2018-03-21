
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/counter';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };
