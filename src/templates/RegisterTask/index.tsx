import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import useTaskStore from "@/store/task.store";
import { useCallback, useEffect } from "react";
import TaskForm from "./TaskForm";
import { useForm } from "react-hook-form";
import { TaskFormFields, defaultTaskFormValues } from "@/entity/Task/form.dto";
import { Task } from "@/entity/Task/dto";
import { useRouter } from 'expo-router';
import randomEmoji from '@/utils/randomEmoji';

export default function RegisterTask() {
  const { addTask } = useTaskStore()
  const {back} = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: defaultTaskFormValues,
  })

  useEffect(() => {
    setValue('emoji',randomEmoji())    
  }, [])
  
  const handleSubmitForm = useCallback((values: TaskFormFields)=>{    
    const task:Task = {
      type: 'daily',
      checked: false,
      id: uuidv4(),
      emoji: values.emoji,
      name: values.name,
      color: values.color.color,
    }
    if (values.description) task.description = values.description
    
    if (values.type === 'daily') {
      if (values.days) task.days = values.days 
      if (values.dailyTime && values.dailyTime !== ":") task.time = values.dailyTime 
      if (values.dailyColor) task.color = values.dailyColor.color
    }

    if (values.type === 'event') {
      task.type = 'event'
      if(values.time && values.time !== ":") task.time = values.time
      if(values.date) task.date = values.date
      if(values.color) task.color = values.color.color
    }
    
    addTask(task)
    back()
  },[])
  const handleCancel = useCallback(()=>{
    back()
  },[])


  return (
    <Base>
      <Margin>
          <TaskForm 
            errors={errors}
            control={control}
          />

          <S.ButtonContainer>
            {/* <S.ButtonCancel onPress={handleCancel}>
              <FontAwesome5 name="times" size={28} color={Theme.background.base} />
            </S.ButtonCancel> */}

            <S.ButtonCreate onPress={handleSubmit(handleSubmitForm)}>
              <FontAwesome5 name="check" size={24} color={Theme.background.base} />
            </S.ButtonCreate>
          </S.ButtonContainer>
      </Margin>
    </Base>
  );
}