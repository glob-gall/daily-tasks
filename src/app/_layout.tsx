import Sidebar from "@/components/Sidebar"
import Theme from "@/styles/theme"
import { Stack } from "expo-router"
import { BadgePlus, BookOpenCheck, House } from "lucide-react-native"
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
          icon: BadgePlus,
          label:'Register task',
          link:'register-task'
        },
        {
          icon: House,
          label:'Home',
          link:'/'
        },
        {
          icon: BookOpenCheck,
          label:'Lista de Metas',
          link:'all-tasks'
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
          <Stack.Screen 
            name="all-tasks" 
          />
        </Stack>
    </ThemeProvider>
  )
}

export default Layout