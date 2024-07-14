import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import CardList from "./CardList";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo } from "react";
import useTaskStore from "@/store/task.store";
import ProgressBar from "@/components/ProgressBar";
import areSameDay from "@/utils/areSameDay";

export default function Home() {
  const { todayTasks, attTodaysTasks, currentDay } = useTaskStore();  
  const router = useRouter();
  
  const loadTasks = useCallback(() => {
    attTodaysTasks()
  }, [currentDay,todayTasks,attTodaysTasks])
  useFocusEffect(() => {
    const today = new Date()
    if (
      !currentDay
      ||(currentDay && !areSameDay(currentDay,today)
    )) {
      loadTasks()
    }
  });

  const concludeTaskPercentage = useMemo(() => {
    let countConcluded = 0;
    todayTasks.forEach(t =>{
      if (t.checked) countConcluded++
    }) 
    
    if (!todayTasks.length) return 0
    return (countConcluded/todayTasks.length)*100
  },[todayTasks])  

  const gotoRegisterCard = useCallback(()=>{
    router.push("register-task")
  },[])

  
  return (
    <Base>
      <Margin>
        <S.ProgressContainer>
          <ProgressBar progress={concludeTaskPercentage}/>
        </S.ProgressContainer>

        <CardList/>
        <S.CreateNewTask onPress={gotoRegisterCard}>
          <FontAwesome5 name="plus" size={24} color={Theme.colors.neutral['50']} />
        </S.CreateNewTask>

      </Margin>
    </Base>
  );
}