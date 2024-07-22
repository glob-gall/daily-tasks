import * as Notifications from "expo-notifications";

export function sendNotification(title: string, message: string) {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body: message,
    },
    trigger: null,
    identifier: "teste",
  });
}
