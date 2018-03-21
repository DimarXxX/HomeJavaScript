import React from 'react';

const Menu = ({showNotification, showNotificationWithTimeout}) => {
    return (
        <div>
            <button onClick={() => showNotification('Со скрытием по клику')}> Синхронно </button>
            <button onClick={() => showNotificationWithTimeout('Со скрытием по таймауту')}> Асинхронно </button>
        </div>
    )
}

export default Menu;