import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import TaskForm from "./TaskForm";

export default function RegisterTask() {
  const router = useRouter();
  const gotoRegisterCard = useCallback(()=>{
    router.push("register-task")
  },[])
  
  return (
    <Base>
      <Margin>

          <TaskForm />

          <S.ButtonContainer>
            <S.ButtonCancel>
              <FontAwesome5 name="times" size={28} color={Theme.colors.neutral['50']} />
            </S.ButtonCancel>

            <S.ButtonCreate>
              <FontAwesome5 name="check" size={24} color={Theme.colors.neutral['50']} />
            </S.ButtonCreate>
          </S.ButtonContainer>
      </Margin>
    </Base>
  );
}