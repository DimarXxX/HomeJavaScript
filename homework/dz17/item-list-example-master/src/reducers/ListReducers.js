const itemReducer = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_LIST':
        return [...state, { id : action.id, name : action.text, count : action.text}];
        case 'REMOVE_LIST':
        const index = state.findIndex(tsil => tsil.id = action.id);
        return index >=0
        ? [...state.slice(0,index), ...state.slice(index +1)]
        : state;
        default: 
        return state;
    }
};

export {itemReducer};