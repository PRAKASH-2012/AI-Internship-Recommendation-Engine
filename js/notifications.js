/**
 * Notification System Controller
 */
class NotificationManager {
  async fetchUserNotifications(userId) {
    if (!window.dbManager) return [];
    return await window.dbManager.filter('notifications', n => n.userId === userId || !n.userId);
  }

  async markAsRead(notificationId) {
    if (!window.dbManager) return;
    const item = await window.dbManager.get('notifications', notificationId);
    if (item) {
      item.read = true;
      await window.dbManager.put('notifications', item);
    }
  }

  async sendNotification(userId, title, message, type = 'info') {
    if (!window.dbManager) return;
    const newNotif = {
      id: Utils.generateId('ntf'),
      userId,
      title,
      message,
      type,
      read: false,
      timestamp: new Date().toISOString()
    };
    await window.dbManager.put('notifications', newNotif);
    Utils.showToast(`${title}: ${message}`, type);
  }
}

window.notificationManager = new NotificationManager();
