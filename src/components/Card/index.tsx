import { Task } from '@/entity/Task/dto'
import * as S from './styles'
import { useEffect } from 'react'

type CardProps = {
  task: Task
}

function Card(props: CardProps) {
  const {
    name,time,description,emoji,color, checked
  } = props.task

  return (
    <S.Container color={color}>
      <S.Emoji>
        {emoji}
      </S.Emoji>

      <S.InfoContainer>
        <S.title>
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
      {
        checked ? <S.Checked color={color}/> : <S.Unchecked color={color}/>
      }
    </S.Container>
  )
}

export default Card