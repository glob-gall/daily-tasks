import Theme from '@/styles/theme';
import * as S from './styles'
import { useCallback, useEffect, useState } from 'react';
import Modal from '@/components/Modal';

export type InputDateProps = {
  label: string
  required?: boolean
  useToday?: boolean
  onChange?: (e:string) => void
  initialValue?: string
}

function InputDate(props: InputDateProps) {
  const { label, required , useToday, onChange, initialValue } = props

  const [selectedDate, setSelectedDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {     
    if (initialValue) {
      setSelectedDate(initialValue)
    }else if (useToday) {
      const today = new Date()
      const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
      const month = today.getMonth() < 9 ?`0${today.getMonth()+ 1}` : today.getMonth() + 1
      const year = today.getFullYear()
      setSelectedDate(`${year}/${month}/${day}`)
    } 
  },[])

  useEffect(() => { 
    if (onChange) {
      onChange(selectedDate)
    } 
  },[selectedDate])

  const handleSetDate = useCallback((date:string)=>{    
    setSelectedDate(date)
  },[])

  const handleCloseModal = useCallback(()=>{
    setModalOpen(false)
  },[setModalOpen])

  const handleOpenModal = useCallback(()=>{
    setModalOpen(true)
  },[setModalOpen])

  return (
    <S.Container>

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
          {selectedDate.split('/')[0]}
        </S.Date>
        </S.InputYearWrapper>
      </S.InputGroupWrapper>
      

        <Modal
          onClose={handleCloseModal}
          open={modalOpen}
        >
          <S.DatePicker
            options={{
              mainColor:Theme.text.pr
            }}
            current={selectedDate}
            selected={selectedDate}
            mode='calendar'
            onSelectedChange={handleSetDate}
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
        </Modal>
    </S.Container>
  )
}

export default InputDate