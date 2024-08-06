import Sidebar from "@/components/Sidebar";
import Theme from "@/styles/theme";
import { Stack } from "expo-router";
import { BadgePlus, BookOpenCheck, House, Info } from "lucide-react-native";
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
          icon: House,
          label: "Home",
          link: "/",
        },
        {
          icon: BookOpenCheck,
          label: "All Tasks",
          link: "all-tasks",
        },
        {
          icon: BadgePlus,
          label: "Register Task",
          link: "register-task",
        },
        {
          icon: Info,
          label: "About Us",
          link: "about",
        },
        // {
        //   icon: Heart,
        //   label: "Donate",
        //   link: "donate",
        // },
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
