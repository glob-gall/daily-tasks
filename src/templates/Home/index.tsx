import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import CardList from "./CardList";
import { useRouter } from "expo-router";
import { useCallback, useMemo } from "react";
import useTaskStore from "@/store/task.store";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const {tasks} = useTaskStore();
  const concludeTaskPercentage = useMemo(() => {
    let countConcluded = 0;
    tasks.forEach(t =>{
      if (t.checked) countConcluded++
    }) 
    return (countConcluded/tasks.length)*100
  },[tasks])

  const router = useRouter();
  const gotoRegisterCard = useCallback(()=>{
    router.push("register-task")
  },[])


  
  return (
    <Base>
      <Margin>
        <S.ProgressContainer>
          <ProgressBar progress={concludeTaskPercentage}/>
        </S.ProgressContainer>

        <CardList tasks={tasks}/>
        <S.CreateNewTask onPress={gotoRegisterCard}>
          <FontAwesome5 name="plus" size={24} color={Theme.colors.neutral['50']} />
        </S.CreateNewTask>

      </Margin>
    </Base>
  );
}