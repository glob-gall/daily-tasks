import Theme from '@/styles/theme'
import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import DayButton from './DayButton'
// export type Variant = {
//   color?: CardColors
// }

export type InputWeekDayProps = {
  label: string
  name: string
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
export type DayNames = 'monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday'|'sunday'

function InputWeekDay(props: InputWeekDayProps) {
  const {
    label,
    name,
    required,
    onChange = ()=>{}  
  } = props
  const [days, setDays] = useState<Days>({
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
    sunday:false,
  })

  useEffect(()=>{
    onChange(days)
  },[days])

  const handleSetDay = useCallback((name:DayNames) => {
    setDays(s => ({...s, [name]: !s[name]}))
  }, [])

  return (
    <S.Container key={name}>
      <S.Label>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.InputWrapper>
        <DayButton
          onChange={handleSetDay}
          name='monday'
          active={days.monday}
          label='Segunda'
          text='S'
        />
        <DayButton
          onChange={handleSetDay}
          name='tuesday'
          active={days.tuesday}
          label='Terça'
          text='T'
        />
        <DayButton
          onChange={handleSetDay}
          name='wednesday'
          active={days.wednesday}
          label='Quarta'
          text='Q'
        />
        <DayButton
          onChange={handleSetDay}
          name='thursday'
          active={days.thursday}
          label='Quinta'
          text='Q'
        />
        <DayButton
          onChange={handleSetDay}
          name='friday'
          active={days.friday}
          label='Sexta'
          text='S'
        />
        <DayButton
          onChange={handleSetDay}
          name='saturday'
          active={days.saturday}
          label='Sabado'
          text='S'
        />
        <DayButton
          onChange={handleSetDay}
          name='sunday'
          active={days.sunday}
          label='Domingo'
          text='D'
        />
      </S.InputWrapper>
    </S.Container>
  )
}

export default InputWeekDay