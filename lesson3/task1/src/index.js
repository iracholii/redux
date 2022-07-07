import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(addUser({ name: 'Kate', age: 44, id: 1 }));
store.dispatch(addUser({ name: 'Jake', age: 55, id: 2 }));
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(updateUser(2, { age: 22, address: 'Ukraine' }));
store.dispatch(deleteUser(1));
