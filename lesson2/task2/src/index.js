import { store, increment, decrement, reset } from './store.js';
import './index.scss';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrementHandler = () => {
  store.dispatch(increment());
};

const onDecrementHandler = () => {
  store.dispatch(decrement());
};

const onResetHandler = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrementHandler);
decrementBtn.addEventListener('click', onDecrementHandler);
resetBtn.addEventListener('click', onResetHandler);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + Number(value), 0);
  const historyString = state.history.join('');
  const result = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
  resultElem.textContent = result;
});
