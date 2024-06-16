import Card, { CardProps } from '@/components/Card'
import * as S from './styles'
import { FlatList } from 'react-native'

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
          <S.CardWrapper key={card.id}>
              <Card {...card} />
            </S.CardWrapper>
        ))
      }
      <S.MarginHelper/>
    </S.Container>
  )
}

export default CardList