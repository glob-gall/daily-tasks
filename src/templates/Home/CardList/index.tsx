import Card from '@/components/Card'
import * as S from './styles'
import { Task } from '@/entity/Task/dto'
import useTaskStore from '@/store/task.store';
import { RefreshControl } from 'react-native';
import { useCallback, useState } from 'react';

type CardListProps  = {

}
function CardList(props:CardListProps){
  const { todayTasks, attTodaysTasks } = useTaskStore();  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    
    setRefreshing(true);
    attTodaysTasks()
    setRefreshing(false);
  }, [attTodaysTasks, setRefreshing]);



  if (todayTasks.length === 0) {
    return (
      <S.EmptyList>
        <S.EmptyListText>
          Nenhuma Task cadastrada ainda
        </S.EmptyListText>
      </S.EmptyList>
    )
  }

  return (
    <S.Container 
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {
        todayTasks.map(task => (
          <S.CardWrapper key={task.id}>
              <Card task={task} hasCheck />
            </S.CardWrapper>
        ))
      }
      <S.MarginHelper/>
    </S.Container>
  )
}

export default CardList