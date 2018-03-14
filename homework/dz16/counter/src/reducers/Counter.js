export default (state = [0, 0, 0, 0], action) => {
    switch (action.type) {
        case 'INCREMENT':
            for (let i = 0; i < this.state.length; i++) {
                return state + 1;
            }
        default:
            return state;
    }
}
