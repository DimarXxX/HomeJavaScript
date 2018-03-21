const increment = () => {
    return {type: 'INCREMENT'};
}

const asyncIncrement = () => {
    return (dispatch) => {
        setTimeout(() => dispatch(increment()), 1000)
    }
}

export {increment, asyncIncrement};