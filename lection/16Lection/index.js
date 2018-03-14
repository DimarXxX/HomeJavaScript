// умножаем и делим при нажатии на кнопку
const dd = (state = 1, action) => {
    switch (action.type) {
        case 'MULTIPIY':
            return state * 3;
        case 'DIVIDE':
            return state / 7;
        default:
            return state;
    }
}
const {
    createStore
} = Redux;
const store = createStore(dd);

const divValue = document.getElementById('value');
const render = () => {
  divValue.textContent = store.getState();
};

store.subscribe(render);
render();

const multiply = document.createElement('button');
const divide = document.createElement('button');
multiply.textContent = '*';
divide.textContent = '/';
document.body.appendChild(multiply);
document.body.appendChild(divide);


multiply.addEventListener('click', () => {
    store.dispatch({type: 'MULTIPIY'});
  });
  
  divide.addEventListener('click', () => {
    store.dispatch({type: 'DIVIDE'});
  });
