import Theme from '@/styles/theme'
import { InputType } from './enum/Input-type'
import EmojiPicker, { EmojiType } from 'rn-emoji-keyboard'
import * as S from './styles'
import { useCallback, useState } from 'react'

// export type Variant = {
//   color?: CardColors
// }

export type InputEmojiProps = {
  name: string
  required?: boolean
  type?: InputType
}

const defaultEmoji = {"emoji": "😎", "name": "smiling face with sunglasses", "slug": "smiling_face_with_sunglasses", "toneEnabled": false, "unicode_version": "1.0"}

function InputEmoji(props: InputEmojiProps) {
  const { name, required } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [emoji, setEmoji] = useState<EmojiType>(defaultEmoji)

  const openEmojiKeyboard = useCallback(()=>{
    setIsOpen(true)
  },[])

  const handlePick = useCallback((e:EmojiType)=>{
    console.log(e);
    setEmoji(e)
    
  },[])

  return (
    <S.Container>
      <S.Label>
        {name}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.EmojiSelectorButton 
        onPress={openEmojiKeyboard}
      >
        <S.EmojiSelectorButtonText>
          {emoji.emoji}
        </S.EmojiSelectorButtonText>
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