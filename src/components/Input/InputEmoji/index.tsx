import EmojiPicker, { EmojiType } from 'rn-emoji-keyboard'
import * as S from './styles'
import { useCallback, useState } from 'react'


export type InputEmojiProps = {
  label: string
  required?: boolean
  onChange?: (e:string) => void
  value:string
}

function InputEmoji(props: InputEmojiProps) {
  const { label, required, value, onChange } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openEmojiKeyboard = useCallback(()=>{
    setIsOpen(true)
  },[])

  const handlePick = useCallback((e:EmojiType)=>{
    if (onChange) {   
      onChange(e.emoji)
    }
  },[onChange])

  return (
    <S.Container>
      <S.Label>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.EmojiSelectorButton 
        onPress={openEmojiKeyboard}
      >
        
        <S.ShowEmoji>
          {value}
        </S.ShowEmoji>
      </S.EmojiSelectorButton>
        <EmojiPicker 
          onClose={() => setIsOpen(false)} 
          onEmojiSelected={handlePick} 
          open={isOpen} 
          enableSearchBar
        />
    </S.Container>
  )
}

export default InputEmoji