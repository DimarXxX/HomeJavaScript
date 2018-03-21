const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ELEMENT': {
      const element = action.element;
      return [...state, element];
    }
    case 'REMOVE_ELEMENT': {
      const index = action.index;
      // return state.slice(0, index).concat(state.slice(index + 1));
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case 'CHANGE_ELEMENT': {
      const index = action.index;
      const element = action.element;
      // return state.slice(0, index).concat(element).concat(state.slice(index + 1));
      return [...state.slice(0, index), element, ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}
