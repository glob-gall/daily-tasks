import Card from '@/components/Card'
import * as S from './styles'
import { TaskDto } from '@/app/entity/Task/dto'

type CardListProps  = {
  tasks: TaskDto[]
}
function CardList(props:CardListProps){
  const {tasks} = props

  if (tasks.length === 0) {
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
    >
      {
        tasks.map(task => (
          <S.CardWrapper key={task.id}>
              <Card task={task} />
            </S.CardWrapper>
        ))
      }
      <S.MarginHelper/>
    </S.Container>
  )
}

export default CardList