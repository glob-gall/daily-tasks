import { TaskDto } from '@/app/entity/Task/dto'
import * as S from './styles'

type CardProps = {
  task: TaskDto
}

function Card(props: CardProps) {
  const {
    title,checked,time,description,emoji,color
  } = props.task

  return (
    <S.Container color={color}>
      <S.Emoji>
        {emoji}
      </S.Emoji>

      <S.InfoContainer>
        <S.title>
          {title}
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