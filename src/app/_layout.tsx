import Sidebar from "@/components/Sidebar";
import Theme from "@/styles/theme";
import { Stack } from "expo-router";
import {
  BadgePlus,
  BookOpenCheck,
  House,
  Heart,
  Info,
} from "lucide-react-native";
import { ThemeProvider } from "styled-components/native";

const screenOption: any = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Theme.background.base,
  },
  headerShadowVisible: false,
  statusBarColor: Theme.background.base,
  statusBarStyle: "dark",
  headerRight: () => (
    <Sidebar
      options={[
        {
          icon: BadgePlus,
          label: "Registrar Meta",
          link: "register-task",
        },
        {
          icon: House,
          label: "Home",
          link: "/",
        },
        {
          icon: BookOpenCheck,
          label: "Lista de Metas",
          link: "all-tasks",
        },
        {
          icon: Info,
          label: "Sobre nós",
          link: "about",
        },
        {
          icon: Heart,
          label: "Donate",
          link: "donate",
        },
      ]}
    />
  ),
};

function Layout() {
  return (
    <ThemeProvider theme={Theme}>
      <Stack screenOptions={screenOption}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register-task" />
        <Stack.Screen name="update-task/[id]" />
        <Stack.Screen name="all-tasks" />
      </Stack>
    </ThemeProvider>
  );
}

export default Layout;
