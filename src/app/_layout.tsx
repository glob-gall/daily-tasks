import Sidebar from "@/components/Sidebar"
import Theme from "@/styles/theme"
import { Stack } from "expo-router"
import { Text } from "react-native"
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types"
import { ThemeProvider } from "styled-components/native"

const screenOption: any = {
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor:Theme.colors.neutral['50'],
  },
  headerShadowVisible:false,
  statusBarColor:Theme.colors.neutral['50'],
  statusBarStyle: 'dark',
  headerRight: ()=>(
    <Sidebar
      options={[
        {
          label:'Register task',
          link:'register-task'
        },
        {
          label:'Home',
          link:'index'
        }
      ]}    
    />
  )

}

function Layout() {
  return (
    <ThemeProvider theme={Theme}>
        <Stack
          screenOptions={screenOption}
        >
          <Stack.Screen 
              name="index" 
          />
          <Stack.Screen 
            name="register-task" 
          />
          <Stack.Screen 
            name="update-task/[id]" 
          />
        </Stack>
    </ThemeProvider>
  )
}

export default Layout