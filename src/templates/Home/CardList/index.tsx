import Card, { CardProps } from '@/components/Card'
import * as S from './styles'

type CardListProps  = {
  cards:CardProps[]
}
function CardList(props:CardListProps){
  const {cards} = props
  return (
    <S.Container 
      showsVerticalScrollIndicator={false}
    >
      {
        cards.map(card => (
          <S.CardWrapper>
            <Card {...card} key={card.id} />
          </S.CardWrapper>
        ))
      }
      <S.MarginHelper/>
    </S.Container>
  )
}

export default CardList