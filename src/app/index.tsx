import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import getWeekDay from "@/utils/getWeekDay";
import Home from "@/templates/Home";
import WelcomePage from "@/templates/Welcome";
import useWelcomeStore from "@/store/welcome.store";
// import Test from "@/templates/Test";

export default function HomePage() {
  const navigation = useNavigation();
  const { welcome } = useWelcomeStore();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Header title="Tasks for Today" subtitle={getWeekDay()} />
      ),
    });
  }, [navigation]);

  if (welcome) return <WelcomePage />;
  return <Home />;
}
