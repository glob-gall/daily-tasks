import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import { TasksMock } from "@/mock/tasks.mock";
import CardList from "./CardList";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import useTaskStore from "@/store/task.store";

export default function Home() {
  const {tasks} = useTaskStore();
  const router = useRouter();
  const gotoRegisterCard = useCallback(()=>{
    router.push("register-task")
  },[])
  
  return (
    <Base>
      <Margin>
        <CardList tasks={tasks}/>
      
        <S.CreateNewTask onPress={gotoRegisterCard}>
          <FontAwesome5 name="plus" size={24} color={Theme.colors.neutral['50']} />
        </S.CreateNewTask>
      </Margin>
    </Base>
  );
}