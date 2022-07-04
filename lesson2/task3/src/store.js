import { createStore } from 'redux';
import reducer from './users.reducer.js';

const store = createStore(reducer);

export default store;
