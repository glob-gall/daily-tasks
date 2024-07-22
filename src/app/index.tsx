import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import getWeekDay from "@/utils/getWeekDay";
import Home from "@/templates/Home";
import { settupNotificationHandler } from "@/core/notificatinos/notifications";

export default function HomePage() {
  const navigation = useNavigation();

  useEffect(() => {
    settupNotificationHandler();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Header title="Metas de hoje" subtitle={getWeekDay()} />
      ),
    });
  }, [navigation]);

  // return <Test />;
  return <Home />;
}
