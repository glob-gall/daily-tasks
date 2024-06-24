import { Text, TextInput } from 'react-native';
import * as S from './styles'
import InputText from '@/components/Input/InputText';
import SwitchSelector from 'react-native-switch-selector'
import Theme from '@/styles/theme';
import InputEmoji from '@/components/Input/InputEmoji';
import { useCallback, useState } from 'react';
import InputWeekDay, { Days } from '@/components/Input/InputWeekDay';
import InputColor from '@/components/Input/InputColor';
import InputDate from '@/components/Input/InputDate';
import InputTime from '@/components/Input/InputTime';
const options = [
  {
    label:'Evento diario',
    value:'event',
  },
  {
    label:'Data expecifica',
    value:'especific',
  }
]

export default function TaskForm() {
  const [formType, setFormType] = useState<'event'|'especific'>('event')
  const handleChangeFormType = useCallback((value: 'event'|'especific') => {
    setFormType(value)
  }, [])
  
  return (
    <S.Container>
      <InputEmoji
        name='Escolher Emoji'
        required
      />

      <S.InputWrapper>
        <InputText
          required
          name='Nome'
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <InputText
          name='Descrição'
          />
      </S.InputWrapper>

      <S.SelectorWrapper>
        <SwitchSelector
          selectedColor="#fff"
          buttonColor={Theme.colors.green['500']}
          textColor={Theme.colors.neutral['500']}
          backgroundColor={Theme.colors.neutral['200']}
          borderColor="red"
          borderRadius={4}
          height={44}
          bold
          options={options}
          initial={0}
          onPress={handleChangeFormType}
          />
      </S.SelectorWrapper>
  
        {formType === 'event' ? (
          <>
            <S.InputWrapper>
              <InputWeekDay
                label='Dias da semana'
                name='weekdays'
              />

            </S.InputWrapper>

            <S.InputWrapperGroup>
              <InputTime 
                name='date'
                label='Horário'
              />
              <S.InputRowWrapper>
                <InputColor
                  label='Cor do card'
                />
              </S.InputRowWrapper>
            </S.InputWrapperGroup>
          </>
          
        ) :(
          <S.InputWrapper>
            <S.InputWrapperGroup>
              <InputDate 
                name='date'
                label='Data'
              />
              <S.InputRowWrapper>
                <InputTime 
                  name='time'
                  label='Horário'
                />
              </S.InputRowWrapper>
            </S.InputWrapperGroup>
            <S.InputWrapper>
              <InputColor
                label='Cor do card'
              />
            </S.InputWrapper>
          </S.InputWrapper>
        )}

    </S.Container>
  );
}