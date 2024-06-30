import Theme from '@/styles/theme';
import * as S from './styles'
import { ForwardRefRenderFunction, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// export type Variant = {
//   color?: CardColors
// }

export type InputTimeProps = {
  label?: string
  value?: string
  required?: boolean
  onChange: (e:string) => void
}

function InputTime(props: InputTimeProps) {
  const { label, required, value, onChange } = props
  const minutesRef = useRef<TextInput>(null);

  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  
  useEffect(()=>{
    onChange(`${hours}:${minutes}`)
  },[hours, minutes])


  const handleSetHour = useCallback((
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    let value = e.nativeEvent.text
    if (+value > 24) value = '24'
    setHours(value)
    
    if (value === '') setMinutes('')
    else if (value !== '' && minutes === '') setMinutes('00')
  }, [minutes])

  const handleSetMinutes = useCallback((
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {    
    let value = e.nativeEvent.text
    if (+value > 59) value = '59'
    setMinutes(value)
  }, [])

  const submitHours = useCallback(() => {    
    if (minutesRef.current) {
      minutesRef.current.focus()
    }
  }, [])

  const handleBlurHours = useCallback(() => {    
  if (hours.length === 1 && hours !== ''){
    setHours(s => '0'+s)
  }
  }, [hours])
  const handleBlurMinutes = useCallback(() => { 
    if (minutes === '' && hours !== '') {
      setMinutes('00')
    } else if (minutes.length === 1 && minutes !== ''){
      setMinutes(s => '0'+s)
    }
  }, [hours, minutes])

  return (
    <S.Container>

      <S.Label>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.InputHourWrapper>
        <S.InputWrapper>
          <S.InputHours
            value={hours}
            onChange={handleSetHour}
            onBlur={handleBlurHours}
            maxLength={2}
            keyboardType='numeric' 
            placeholderTextColor={Theme.colors.neutral['400']}
            placeholder='00'
            onSubmitEditing={submitHours}
          />
        </S.InputWrapper>

        <S.HoursSeparator>
          <Entypo name="dots-two-vertical" size={20} />
        </S.HoursSeparator>

        <S.InputWrapper>
          <S.InputMinutes
            ref={minutesRef}
            value={minutes}
            onChange={handleSetMinutes}
            onBlur={handleBlurMinutes}
            maxLength={2}
            keyboardType='numeric' 
            placeholderTextColor={Theme.colors.neutral['400']}
            placeholder='00'
          />
        </S.InputWrapper>
      </S.InputHourWrapper>

    </S.Container>
  )
}

export default InputTime