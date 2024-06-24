import Theme from '@/styles/theme'
import * as S from './styles'
import DatePicker from 'react-native-date-picker'
import { useState } from 'react'

// export type Variant = {
//   color?: CardColors
// }

export type InputDateProps = {
  name: string
  required?: boolean
}



function InputDateDEPRECATED(props: InputDateProps) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

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
        <S.DateButton onPress={()=> setOpen(true)}>
          <S.DateButtonText>
            Data
          </S.DateButtonText>
        </S.DateButton>
      </S.InputWrapper>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      
    </S.Container>
  )
}

// export default InputDateDEPRECATED