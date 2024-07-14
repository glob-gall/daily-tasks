import * as S from './styles'
import { useCallback, useEffect } from 'react'
import DayButton from './DayButton'

export type InputWeekDayProps = {
  label: string
  value: Days
  onChange?: (e:Days) => void
  required?: boolean
}

export type Days = {
  sunday: boolean
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
}
export type DayNames = keyof Days

function InputWeekDay(props: InputWeekDayProps) {
  const {
    label,
    required,
    value,
    onChange 
  } = props

  const handleSetDay = useCallback((name:DayNames) => {
    const days:Days = value
    days[name] = !days[name] 
    
    if (!!onChange) onChange(days)
  }, [onChange,value])

  return (
    <S.Container>
      <S.Label>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.InputWrapper>
        <DayButton
          onChange={handleSetDay}
          name='monday'
          active={value.monday}
          label='Segunda'
          text='S'
        />
        <DayButton
          onChange={handleSetDay}
          name='tuesday'
          active={value.tuesday}
          label='Terça'
          text='T'
        />
        <DayButton
          onChange={handleSetDay}
          name='wednesday'
          active={value.wednesday}
          label='Quarta'
          text='Q'
        />
        <DayButton
          onChange={handleSetDay}
          name='thursday'
          active={value.thursday}
          label='Quinta'
          text='Q'
        />
        <DayButton
          onChange={handleSetDay}
          name='friday'
          active={value.friday}
          label='Sexta'
          text='S'
        />
        <DayButton
          onChange={handleSetDay}
          name='saturday'
          active={value.saturday}
          label='Sabado'
          text='S'
        />
        <DayButton
          onChange={handleSetDay}
          name='sunday'
          active={value.sunday}
          label='Domingo'
          text='D'
        />
      </S.InputWrapper>
    </S.Container>
  )
}

export default InputWeekDay