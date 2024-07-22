import * as Notifications from "expo-notifications";

export function settupNotificationHandler() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      sound: "mySoundFile.wav", // Provide ONLY the base filename
    },
    trigger: {
      seconds: 8,
      channelId: "new-emails",
    },
  });
}
