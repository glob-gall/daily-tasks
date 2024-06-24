import Theme from '@/styles/theme'
import { InputType } from './enum/Input-type'
import * as S from './styles'

// export type Variant = {
//   color?: CardColors
// }

export type InputTextProps = {
  name: string
  required?: boolean
  type?: InputType
}



function InputText(props: InputTextProps) {
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

      <S.InputTextWrapper>
        <S.InputText 
        placeholderTextColor={Theme.colors.neutral['400']}
          placeholder={name}
        />
      </S.InputTextWrapper>
    </S.Container>
  )
}

export default InputText