import { createStore } from 'redux';
import reducer from '../reducers/ListReducers';

const store = createStore(reducer);
export { store };