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
import { UpdateTaskDto } from "@/entity/Task/dto";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { colorOptions } from '@/components/Input/InputColor';

export default function UpdateTask() {
  const {updateTask,tasks,removeTask} = useTaskStore()
  const { back } = useRouter();

  const {id} = useLocalSearchParams()  
  const task = tasks.find(t => t.id === id)
  
  if (!task) {
    Alert.alert('Ocorreu um erro ao buscar essa meta.')
    back()
    return;
  }
  
  const defaultValues:TaskFormFields = {
    color: colorOptions.find(c => c.color === task.color) || defaultTaskFormValues.color,
    dailyColor: colorOptions.find(c => c.color === task.color) || defaultTaskFormValues.dailyColor,
    date: task.date || defaultTaskFormValues.date,
    time: task.time || defaultTaskFormValues.time,
    dailyTime: task.time || defaultTaskFormValues.dailyTime,
    days: task.days || defaultTaskFormValues.days,
    description: task.description || defaultTaskFormValues.description,
    emoji: task.emoji,
    name: task.name,
    type: task.type
  }   
  

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  })
  
  const handleSubmitForm = useCallback((values: TaskFormFields)=>{    
    const dto:UpdateTaskDto = {
      type: values.type,
      emoji: values.emoji,
      name: values.name,
      color: values.color.color,
    }
    if (values.description) dto.description = values.description
    
    if (values.type === 'daily') {
      if (values.days) dto.days = values.days 
      if (values.dailyTime && values.dailyTime !== ":") dto.time = values.dailyTime 
      if (values.dailyColor) dto.color = values.dailyColor.color
    }

    if (values.type === 'event') {
      if (values.date) dto.date = values.date
      if(values.time && values.time !== ":") dto.time = values.time
      if(values.color) dto.color = values.color.color
    }
    
    updateTask(id as string, dto)
    back()
  },[])
  const handleCancel = useCallback(()=>{
    function deleteTask() {
      back()
      removeTask(id as string)
    }

    Alert.alert(
      'DELETAR META',
      'Clique em OK para deletar sua meta.',
      [
        {text: 'Cancelar'},
        {text: 'OK', onPress: deleteTask},
      ],
    )
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
              <FontAwesome5 name="times" size={28} color={Theme.background.base} />
            </S.ButtonCancel>

            <S.ButtonCreate onPress={handleSubmit(handleSubmitForm)}>
              <FontAwesome5 name="check" size={24} color={Theme.background.base} />
            </S.ButtonCreate>
          </S.ButtonContainer>
      </Margin>
    </Base>
  );
}