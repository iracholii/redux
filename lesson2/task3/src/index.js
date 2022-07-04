import './index.scss';

import store from './store.js';
import { addUser, deleteUser } from './users.actions';

console.log(store.getState());

store.dispatch(addUser({ id: 1, name: 'Rae' }));
store.dispatch(addUser({ id: 2, name: 'Jae' }));

console.log(store.getState());

store.dispatch(deleteUser(1));

console.log(store.getState());
