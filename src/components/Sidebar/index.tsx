import { LucideIcon, Menu } from 'lucide-react-native';
import * as S from './styles'
import { ReactNode, useCallback, useState } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import Theme from '@/styles/theme';
import { useRouter } from 'expo-router';

type SidebarItem = {
  label:string
  link:string
  icon: LucideIcon
}

export type SidebarProps = {
  options: SidebarItem[]
}

function Sidebar(props: SidebarProps) {
  const { options } = props
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])
  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])
  const goTo = useCallback((to:string) => {
    onClose()
    router.push(to)
  }, [])

  return (
    <>
      <S.SidebarButton onPress={onOpen}>
        <Menu color={Theme.colors.neutral[700]}  size={36}/>
      </S.SidebarButton>

    
      <S.SidebarModal
        transparent
        statusBarTranslucent
        animationType="fade"
        visible={isOpen}
        onRequestClose={onClose} 
      >
        <S.SidebarContainer>
          <TouchableWithoutFeedback onPress={onClose}>
            <S.CloseSidebar/>
          </TouchableWithoutFeedback>

              <S.Sidebar>
                {options.map( ({icon: Icon,label,link}) => (
                  <S.SidebarOption 
                    key={label} 
                    onPress={()=> goTo(link)}
                  >
                    <S.SidebarOptionIcon>
                      <Icon color={Theme.colors.neutral['700']} size={24}/>
                    </S.SidebarOptionIcon>
                    <S.SidebarOptionText>
                      {label}
                    </S.SidebarOptionText>
                  </S.SidebarOption>
                ))}
              </S.Sidebar>

        </S.SidebarContainer>
      </S.SidebarModal>
    </>
  )
}

export default Sidebar