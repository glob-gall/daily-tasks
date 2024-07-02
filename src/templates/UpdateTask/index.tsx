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
import { Task, UpdateTaskDto } from "@/entity/Task/dto";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert } from 'react-native';

export default function UpdateTask() {
  const {updateTask,tasks} = useTaskStore()
  const {back, replace} = useRouter();

  const {id} = useLocalSearchParams()  
  const task = tasks.find(t => t.id === id)

  if (!task) {
    Alert.alert('Ocorreu um erro ao buscar essa meta.')
    back()
    return;
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultTaskFormValues,
  })
  
  const handleSubmitForm = useCallback((values: TaskFormFields)=>{

    const task:UpdateTaskDto = {
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
      if (values.date) task.date = values.date
      if(values.time && values.time !== ":") task.time = values.time
      if(values.color) task.color = values.color.color
    }
    console.log({values});
    console.log({task});
    
    updateTask(id as string, task)
    replace('/')
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
            task={task}
          />

          <S.ButtonContainer>
            <S.ButtonCancel onPress={handleCancel}>
              <FontAwesome5 name="times" size={28} color={Theme.colors.neutral['50']} />
            </S.ButtonCancel>

            <S.ButtonCreate onPress={handleSubmit(handleSubmitForm)}>
              <FontAwesome5 name="check" size={24} color={Theme.colors.neutral['50']} />
            </S.ButtonCreate>
          </S.ButtonContainer>
      </Margin>
    </Base>
  );
}