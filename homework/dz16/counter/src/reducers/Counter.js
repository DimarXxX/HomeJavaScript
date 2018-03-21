export default (state = [0, 0, 0, 0], action) => {
    switch (action.type) {
        case 'INCREMENT':
        const i = action.i;
        return [...state.slice(0,i), state[i]+1, ...state.slice(i+1)];
        default:
            return state;
    }
}
