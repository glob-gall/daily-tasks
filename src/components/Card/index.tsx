import { Task } from '@/entity/Task/dto'
import * as S from './styles'
import { useCallback } from 'react'
import useTaskStore from '@/store/task.store'
import {Check} from 'lucide-react-native'
type CardProps = {
  task: Task
}

function Card(props: CardProps) {
  const {
    name,time,description,emoji,color, checked, id
  } = props.task

  const { setChecked } = useTaskStore()

  const handleSetCheck = useCallback(()=>{
    setChecked(id)
  },[])

  return (
    <S.Container color={color}>
      <S.Emoji>
        {emoji}
      </S.Emoji>

      <S.InfoContainer>
        <S.title check={checked}>
          {name}
        </S.title>
        {
          description && (
            <S.Description>
              {description}
            </S.Description>
          )
        }
      </S.InfoContainer>
      
      <S.Time color={color}>
        {time}
      </S.Time>

      <S.CheckButton onPress={handleSetCheck}>
        { checked ? (
          <S.Checked color={color}>
            <Check size={24}
              color="#fff"
            />
          </S.Checked>
        ) : (
          <S.Unchecked color={color}>
          </S.Unchecked>

          
        )}
      </S.CheckButton>
    </S.Container>
  )
}

export default Card