const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id, text: action.text, done: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return { ...todo, done: !todo.done };
      });
    case 'REMOVE_TODO':
      const index = state.findIndex(todo => todo.id === action.id);
      return index >= 0
        ? [...state.slice(0, index), ...state.slice(index + 1)]
        : state;
    default:
      return state;
  }
}
