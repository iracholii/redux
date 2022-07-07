import './index.scss';
import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ua'));
store.dispatch(setUser({ name: 'Jane' }));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: 11, name: 'keyboard' }));
store.dispatch(addProduct({ id: 22, name: 'laptop' }));
store.dispatch(removeProduct(22));
