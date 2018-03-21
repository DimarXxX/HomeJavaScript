import React from 'react';
import Menu from './Menu';

const Page = ({ notifications, hideNotification, showNotificationWithTimeout, showNotification }) => {
    const renderNotifications = () => {
        return notifications.map((notification) => {
            return (
                <div key={notification.id} 
                    className="notification"
                    onClick={() => hideNotification(notification.id)}
                >
                    {notification.text}
                </div>
            )
        })
    }

    return (
        <div>
            <Menu showNotification={showNotification}
                  showNotificationWithTimeout={showNotificationWithTimeout} />
            { renderNotifications() }
        </div>
    )
}


export default Page;