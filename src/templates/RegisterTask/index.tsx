import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import { useRouter } from "expo-router";
import TaskForm from "./TaskForm";
import useTaskStore from "@/store/task.store";
import { useCallback } from "react";
import { TasksMock } from "@/mock/tasks.mock";

export default function RegisterTask() {
  const {addTask} = useTaskStore()
  
  const handleSubmitForm = useCallback(()=>{
    addTask(TasksMock[0])
  },[])

  return (
    <Base>
      <Margin>

          <TaskForm />

          <S.ButtonContainer>
            <S.ButtonCancel>
              <FontAwesome5 name="times" size={28} color={Theme.colors.neutral['50']} />
            </S.ButtonCancel>

            <S.ButtonCreate onPress={handleSubmitForm}>
              <FontAwesome5 name="check" size={24} color={Theme.colors.neutral['50']} />
            </S.ButtonCreate>
          </S.ButtonContainer>
      </Margin>
    </Base>
  );
}