export default (state = '', action) => {
  switch(action.type) {
    case 'ADD':
      return state + action.text;
    case 'MINUS':
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
}
