const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(reducer);


const divValue = document.getElementById('value');
const render = () => {
  divValue.textContent = store.getState();
};

store.subscribe(render);
render();


const mul = document.createElement('button');
const div = document.createElement('button');
mul.textContent = '+';
div.textContent = '-';
document.body.appendChild(mul);
document.body.appendChild(div);
mul.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
})
div.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'});
})
