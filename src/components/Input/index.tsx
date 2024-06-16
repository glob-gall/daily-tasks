import Theme from '@/styles/theme'
import { InputType } from './enum/Input-type'
import * as S from './styles'

// export type Variant = {
//   color?: CardColors
// }

export type InputProps = {
  name: string
  required?: boolean
  type?: InputType
}



function Input(props: InputProps) {
  const {
    name,
    required
  } = props
  return (
    <S.Container>
      <S.Label>
        {name}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.InputWrapper>
        <S.Input 
        placeholderTextColor={Theme.colors.neutral['400']}
          placeholder={name}
        />
      </S.InputWrapper>
    </S.Container>
  )
}

export default Input