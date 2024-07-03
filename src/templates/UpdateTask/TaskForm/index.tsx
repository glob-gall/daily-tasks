import * as S from './styles'
import InputText from '@/components/Input/InputText';
import InputEmoji from '@/components/Input/InputEmoji';
import { useCallback, useState } from 'react';
import InputWeekDay from '@/components/Input/InputWeekDay';
import InputColor from '@/components/Input/InputColor';
import InputDate from '@/components/Input/InputDate';
import InputTime from '@/components/Input/InputTime';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import InputSwitch from '@/components/Input/InputSwitch';
import { Task, TaskFormFields, TaskType } from '@/entity/Task/dto';

export type Option = {
  label: string,
  value: TaskType
}

const options:Option[] = [
  {
    label:'Evento diario',
    value:'daily',
  },
  {
    label:'Data expecifica',
    value:'event',
  }
]

type TaskFormProps = {
  control: Control<TaskFormFields, any>
  errors: FieldErrors<TaskFormFields>
  task: Task
}

export default function TaskForm(props: TaskFormProps) {
  const { control, errors, task } = props
  const [formType, setFormType] = useState<TaskType>(task.type || 'daily')

  const handleChangeFormType = useCallback((value: TaskType) => {
    setFormType(value)
  }, [])
  
  return (
    <S.Container>
      <Controller
          control={control}
          rules={{ required: false }}
          name="emoji"
          render={({ field: { onChange, value } }) => (
            <InputEmoji
              required
              label='Escolher Emoji'
              onChange={onChange}
              value={value}
            />
          )}
        />

      <S.InputWrapper>
        <Controller
          control={control}
          rules={{ required: {
            message:'Campo obrigatório',
            value: true
          } }}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              error={errors.name}
              required
              label='Nome'

              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </S.InputWrapper>

      <S.InputWrapper>
      <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              error={errors.description}
              label='Descrição'

              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </S.InputWrapper>

      <S.SelectorWrapper>
        <Controller
          control={control}
          rules={{ required: {
            message:'Campo obrigatório',
            value: true
          } }}
          name="type"
          render={({ field: { onChange } }) => (
            <InputSwitch
              options={options}
              onPress={(v) => {
                handleChangeFormType(v)
                onChange(v)
              }}
              defaultValue={formType === 'daily' ? 0 : 1}
            />
          
          )}
        />
      </S.SelectorWrapper>
  
        {formType === 'daily' ? (
          <>
            <S.InputWrapper>
              <Controller
                control={control}
                rules={{ required: {
                  message:'Campo obrigatório',
                  value: true
                } }}
                name="days"
                render={({ field: { onChange, value } }) => (
                  <InputWeekDay
                    required
                    label='Dias da semana'
                    onChange={onChange} 
                    value={value}
                  />
                )}
              />

            </S.InputWrapper>

            <S.InputWrapperGroup>
              <Controller
                control={control}
                name="dailyTime"
                render={({ field: { onChange, value } }) => (
                  <InputTime
                    label='Horário'
                    onChange={onChange} 
                    initialValue={value}
                  />
                )}
              />
              <S.InputRowWrapper>
              <Controller
                control={control}
                name="dailyColor"
                render={({ field: { onChange, value } }) => (
                  <InputColor
                    required
                    onChange={onChange}
                    label='Cor do card'
                    initialValue={value}
                  />
                )}
              />
              </S.InputRowWrapper>
            </S.InputWrapperGroup>
          </>
          
        ) :(
          <>
            <S.InputWrapperGroup>
            <Controller
                  control={control}
                  name="date"
                  render={({ field: { onChange } }) => (
                    <InputDate
                      required 
                      useToday
                      initialValue={task.date}
                      onChange={onChange}
                      label='Data'
                    />
                  )}
                />
              <S.InputRowWrapper>
                <Controller
                  control={control}
                  name="time"
                  render={({ field: { onChange, value } }) => (
                    <InputTime
                      label='Horário'
                      onChange={onChange}
                      initialValue={value} 
                    />
                  )}
                />
              </S.InputRowWrapper>
            </S.InputWrapperGroup>
            <S.InputWrapper>
              <Controller
                control={control}
                name="color"
                render={({ field: { onChange, value } }) => (
                  <InputColor
                    required
                    onChange={(e:any)=> {
                      // console.log({color:e});
                      
                      onChange(e)
                    }}
                    label='Cor do card'
                    initialValue={value}
                  />
                )}
              />
            </S.InputWrapper>
            </>
        )}

    </S.Container>
  );
}