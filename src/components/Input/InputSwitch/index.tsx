import Theme from '@/styles/theme'
import { InputType } from './enum/Input-type'
import * as S from './styles'
import { TextInputProps } from 'react-native'
import { FieldError } from 'react-hook-form'
import { useEffect } from 'react'
import SwitchSelector from 'react-native-switch-selector'

// export type Variant = {
//   color?: CardColors
// }

export type InputSwitchProps =  {
  // name: TaskFormField
  label?: string
  options:any[],
  onPress: (value: 'event'|'especific') => void
}




function InputSwitch(props: InputSwitchProps) {
  const {
    label,
    options,
    onPress
  } = props
  

  return (
    <S.Container>
      {
        label && (
          <S.Label>
            {label}
          </S.Label>
        )
      }

      <SwitchSelector
        selectedColor="#fff"
        buttonColor={Theme.colors.green['500']}
        textColor={Theme.colors.neutral['500']}
        backgroundColor={Theme.colors.neutral['200']}
        borderRadius={4}
        height={44}
        bold
        options={options}
        initial={0}
        onPress={onPress}
      />
    </S.Container>
  )
}

export default InputSwitch