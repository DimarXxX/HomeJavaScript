let nextId = 0;

const makeNotification = (text) => {
    const id = nextId++;
    return {
        id, text
    };
}

export function showNotification(text) {
    const notification = makeNotification(text);
    return {type: 'SHOW_NOTIFICATION', payload: notification};
}

export function hideNotification(id) {
    return {type: 'HIDE_NOTIFICATION', payload: id};
}

export function showNotificationWithTimeout(text) {
    return function(dispatch) {
        const notification = makeNotification(text);
        dispatch({type: 'SHOW_NOTIFICATION', payload: notification});
        setTimeout(() => dispatch(hideNotification(notification.id)), 1000)
    }
}