import { Text, TextInput } from 'react-native';
import * as S from './styles'
import Input from '@/components/Input';
import SwitchSelector from 'react-native-switch-selector'
import Theme from '@/styles/theme';
import InputEmoji from '@/components/InputEmoji';
import { useCallback, useState } from 'react';

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
        <Input
          required
          name='Nome'
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <Input
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
      <S.SelectorWrapper>
        <Text>
          {formType}
        </Text>
      </S.SelectorWrapper>
    </S.Container>
  );
}