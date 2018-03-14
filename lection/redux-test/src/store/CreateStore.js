import { createStore } from 'redux';
import reducer from '../reducers/Counter';

const store = createStore(reducer);
export { store };