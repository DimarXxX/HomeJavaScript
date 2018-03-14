export default (state = 1, action) => {
    switch (action.type) {
        case 'MULTIPIY':
            return state * 3;
        case 'DIVIDE':
            return state / 7;
        default:
            return state;
    }
}