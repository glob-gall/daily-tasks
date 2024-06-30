import Theme from '@/styles/theme'
import { InputType } from './enum/Input-type'
import EmojiPicker, { EmojiType } from 'rn-emoji-keyboard'
import * as S from './styles'
import { useCallback, useState } from 'react'
import { TextInputProps } from 'react-native'

// export type Variant = {
//   color?: CardColors
// }

export type InputEmojiProps = {
  label: string
  required?: boolean
  onChange?: (e:string) => void
  value:string
}

// const defaultEmoji = {"emoji": "😎", "name": "smiling face with sunglasses", "slug": "smiling_face_with_sunglasses", "toneEnabled": false, "unicode_version": "1.0"}

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
        />
    </S.Container>
  )
}

export default InputEmoji