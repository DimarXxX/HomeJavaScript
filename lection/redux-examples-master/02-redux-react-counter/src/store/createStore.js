
import { createStore } from 'redux';
import reducer from '../reducers/counter';

const store = createStore(reducer);
export { store };
