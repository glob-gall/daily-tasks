import * as S from "./styles";
import { carrouselItens } from "./items";
import { WelcomeItem } from "./WelcomeItem";
import { Paginator } from "@/components/Paginator";

export default function WelcomePage() {
  console.log(carrouselItens);

  return (
    <S.Container>
      <S.Carrousel
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        bounces={false}
        data={carrouselItens}
        scrollEventThrottle={50}
        renderItem={(props: any) => (
          <WelcomeItem {...props.item} key={props.item.id} />
        )}
      />
      <Paginator ids={carrouselItens.map((item) => item.id)} />
      <S.ButtonContainer>
        <S.ButtonNext>
          <S.ButtonNextText>NEXT</S.ButtonNextText>
        </S.ButtonNext>
        <S.ButtonSkip>
          <S.ButtonSkipText>Skip introduction</S.ButtonSkipText>
        </S.ButtonSkip>
      </S.ButtonContainer>
    </S.Container>
  );
}
