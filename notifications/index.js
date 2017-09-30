import { Notifications, Permissions } from 'expo';
import { loadNotificationStatus, saveNotificationStatus } from '../db';

const INITIAL_NOTIFICATION_STATUS = {
  installed: null,
  permissionGranted: null,
  scheduleId: null
}

let status = INITIAL_NOTIFICATION_STATUS;

function rememberStatus(s) {
  status = s;
}

function tomorrow() {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(18);
  date.setMinutes(0);
  date.setSeconds(0);
}

export function rescheduleNotification() {
  if (status.permissionGranted) {
    Notifications.cancelAllScheduledNotificationsAsync();
    status.installed = true;
    Notifications.scheduleLocalNotificationAsync({
      title: 'Start a quiz',
      body: "Don't forget to do a quiz today"
    }, {
        time: tomorrow(),
        repeat: 'day'
      }).then(saveNotificationStatus);
  }
}

function checkPermission() {
  if (status.permissionGranted === null) {
    return Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status: permStatus }) => {
        status.permissionGranted = permStatus === 'granted';
        return status;
      });
  }
  // already asked for permission, use old status
  return Promise.resolve(status);
}

export function setupLocalNotification() {
  loadNotificationStatus()
    .then(status => status ? status : INITIAL_NOTIFICATION_STATUS)
    .then(rememberStatus)
    .then(checkPermission)
    .then(rescheduleNotification);
}