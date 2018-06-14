/**
 * Actions related to displaying application notifications.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2018-06-13
 */

/**
 * Add a new notification to the notification queue.
 *
 * @param {string} message
 * @param {string} intent (danger, success, warning)
 */
export const addNotification = (message, intent) => ({
  type: 'ADD_NOTIFICATION',
  data: {
    notifications: [{
      message,
      intent,
    }],
  },
});

/**
 * Clear all notifications in the store.
 */
export const clearNotifications = () => ({
  type: 'RESET_NOTIFICATIONS',
});

export default {
  addNotification,
  clearNotifications,
};
