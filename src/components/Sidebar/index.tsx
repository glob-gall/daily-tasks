import { Menu } from 'lucide-react-native';
import * as S from './styles'
import { ReactNode, useCallback, useState } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import Theme from '@/styles/theme';

type SidebarItem = {
  label:string
  link:string
}

export type SidebarProps = {
  options: SidebarItem[]
}

function Sidebar(props: SidebarProps) {
  const { options } = props
  const [isOpen, setIsOpen] = useState(true)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])
  const onOpen = useCallback(() => {
    // console.log({open:true});
    
    setIsOpen(true)
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
                {options.map( opt => (
                  <S.SidebarOption key={opt.label}>
                    <S.SidebarOptionText>
                      {opt.label}
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