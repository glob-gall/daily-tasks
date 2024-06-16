import { CardColors } from './enum/card-color'
import * as S from './styles'

export type Variant = {
  color?: CardColors
}

export type CardProps = {
  id:string
  title: string
  description?: string
  checked: boolean
  emoji?: any
  time?: string
  variant?: Variant
}



function Card(props: CardProps) {
  const {
    title,checked,time,description,emoji,variant
  } = props
  return (
    <S.Container color={variant?.color}>
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
      
      <S.Time color={variant?.color}>
        {time}
      </S.Time>
      {
        checked ? <S.Checked color={variant?.color}/> : <S.Unchecked color={variant?.color}/>
      }
    </S.Container>
  )
}

export default Card