const reducer = (state = { name: 'Alex', surname: 'Guk'}, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      // return Object.assign({}, state, { name: action.value });
      return { ...state, name: action.value };
    case 'CHANGE_SURNAME':
      const index = action.index;
      // return Object.assign({}, state, { surname: action.value });
      return { ...state, surname: action.value };
    default:
      return state;
  }
}
