import Theme from "@/styles/theme"
import { Stack } from "expo-router"
import { ThemeProvider } from "styled-components/native"

const screenOption: any = {
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor:Theme.colors.neutral['50'],
  },
  headerShadowVisible:false,
  statusBarColor:Theme.colors.neutral['50'],
  statusBarStyle: 'dark',
}

function Layout() {
  return (
    <ThemeProvider theme={Theme}>
        <Stack>
          <Stack.Screen 
              name="index" 
              options={screenOption}
          />
          <Stack.Screen 
            name="register-task" 
            options={screenOption}
          />
          <Stack.Screen 
            name="update-task/[id]" 
            options={screenOption}
          />
        </Stack>
    </ThemeProvider>
  )
}

export default Layout