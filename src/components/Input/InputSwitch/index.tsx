import Theme from '@/styles/theme'
import { InputType } from './enum/Input-type'
import * as S from './styles'
import { TextInputProps } from 'react-native'
import { FieldError } from 'react-hook-form'
import { useEffect } from 'react'
import SwitchSelector from 'react-native-switch-selector'
import { TaskType } from '@/entity/Task/dto'
import { Option } from '@/templates/RegisterTask/TaskForm'

// export type Variant = {
//   color?: CardColors
// }

export type InputSwitchProps =  {
  // name: TaskFormField
  label?: string
  options: Option[],
  defaultValue?: number,
  onPress: (value: TaskType) => void
}




function InputSwitch(props: InputSwitchProps) {
  const {
    label,
    options,
    defaultValue,
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
        initial={defaultValue || 0}
        onPress={onPress}
      />
    </S.Container>
  )
}

export default InputSwitch