export default function reducer (state = {notifications: []}, action) {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return {...state, notifications: [...state.notifications, action.payload]}
        case 'HIDE_NOTIFICATION':
            return {
                ...state, 
                notifications: state.notifications.filter((notification => 
                    notification.id !== action.payload
                ))
            }
        default:
            return state;
    }
}