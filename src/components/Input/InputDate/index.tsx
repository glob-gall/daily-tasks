import Theme from '@/styles/theme';
import * as S from './styles'
import { ForwardRefRenderFunction, useCallback, useEffect, useRef, useState } from 'react';
import { Modal, NativeSyntheticEvent, TextInput, TextInputChangeEventData, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Margin } from '@/components/Spacing/Margin';

// export type Variant = {
//   color?: CardColors
// }

export type InputDateProps = {
  name: string
  label: string
  required?: boolean
}

function InputDate(props: InputDateProps) {
  const { name, label, required } = props

  const [selectedDate, setSelectedDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false)

  const handleCloseModal = useCallback(()=>{
    setModalOpen(false)
  },[setModalOpen])

  const handleOpenModal = useCallback(()=>{
    setModalOpen(true)
  },[setModalOpen])

  return (
    <S.Container key={name}>

      <S.Label>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>
      
      <S.InputGroupWrapper
        onPress={handleOpenModal}
      >
        <S.InputWrapper>
          <S.Date>
            {selectedDate.split('/')[2]}
          </S.Date>
        </S.InputWrapper>
        <S.Separator>/</S.Separator>
        <S.InputWrapper>
        <S.Date>
        {selectedDate.split('/')[1]}
        </S.Date>
        </S.InputWrapper>
        <S.Separator>/</S.Separator>
        <S.InputYearWrapper>
        <S.Date>
          {/* {selectedDate.split('/')[0]} */}
          2024
        </S.Date>
        </S.InputYearWrapper>
      </S.InputGroupWrapper>
      

        <S.CalendarModal
          transparent
          statusBarTranslucent
          animationType="fade"
          visible={modalOpen}
          onRequestClose={handleCloseModal} 
        >
            <S.CalendarContainer>
              <TouchableWithoutFeedback onPress={handleCloseModal}>
                <S.CloseModal/>
              </TouchableWithoutFeedback>
                <S.DatePicker
                  options={{
                    mainColor:Theme.colors.neutral['700']
                  }}
                  current={selectedDate}
                  selected={selectedDate}
                  mode='calendar'
                  onSelectedChange={date => setSelectedDate(date)}
                />
                <S.DateDialog>
                  <S.OkButtonContainer>
                    <S.OkButton 
                      disabled={selectedDate === ''}
                      onPress={handleCloseModal}
                    >
                      <S.OkButtonText>
                        OK
                      </S.OkButtonText>
                    </S.OkButton>
                  </S.OkButtonContainer>
                </S.DateDialog>
                <TouchableWithoutFeedback onPress={handleCloseModal}>
                  <S.CloseModal/>
                </TouchableWithoutFeedback>
            </S.CalendarContainer>
        </S.CalendarModal>
    </S.Container>
  )
}

export default InputDate