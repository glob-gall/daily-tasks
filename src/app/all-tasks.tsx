import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import AllTasks from "@/templates/AllTasks";

export default function HomePage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => <Header title="Task List" />,
    });
  }, [navigation]);

  // return (<Test/>);
  return <AllTasks />;
}
