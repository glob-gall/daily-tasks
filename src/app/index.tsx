import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import getWeekDay from "@/utils/getWeekDay";
// import Home from "@/templates/Home";
import Test from "@/templates/Test";

export default function HomePage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Header title="Tasks for Today" subtitle={getWeekDay()} />
      ),
    });
  }, [navigation]);

  return <Test />;
  // return <Home />;
}
