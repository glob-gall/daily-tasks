import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Header from "@/components/Header";
import RegisterTask from "@/templates/RegisterTask";

export default function RegisterTaskPage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => <Header title="Cadastrar nova meta" />,
    });
  }, [navigation]);

  return <RegisterTask />;
}
