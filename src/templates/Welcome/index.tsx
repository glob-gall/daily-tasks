import * as S from "./styles";
import { carrouselItens } from "./items";
import { WelcomeItem } from "./WelcomeItem";
import { Paginator } from "@/components/Paginator";
import { useRef, useState } from "react";
import { Animated } from "react-native";

export default function WelcomePage() {
  console.log(carrouselItens);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(1);
  const slidesRef = useRef(null);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const viewableItemsChanged = (info: { viewableItems: any[] }) => {
    setCurrentIndex(info.viewableItems[0].item.id);
  };

  return (
    <S.Container>
      <S.Carrousel
        ref={slidesRef}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
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
      <Paginator
        currentIndex={currentIndex}
        ids={carrouselItens.map((item) => item.id)}
        scrollX={scrollX}
      />
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
