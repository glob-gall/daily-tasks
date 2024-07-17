import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import getWeekDay from "@/utils/getWeekDay";
import Home from "@/templates/Home";

export default function HomePage() {
  const navigation = useNavigation();

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
