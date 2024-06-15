import Theme from "@/styles/theme"
import { Stack } from "expo-router"
import { Text } from "react-native"
import { ThemeProvider } from "styled-components/native"

function Layout() {
  return (
    <ThemeProvider theme={Theme}>
        <Stack>
          <Stack.Screen 
            name="index" 
              options={{
              title:'Home',
              headerTitleAlign:'center',
              headerStyle:{
                backgroundColor:Theme.colors.neutral['50'],
              },
              headerShadowVisible:false,
              statusBarColor:Theme.colors.neutral['50'],
              statusBarStyle: 'dark',
            }}
          />
        </Stack>
    </ThemeProvider>
  )
}

export default Layout