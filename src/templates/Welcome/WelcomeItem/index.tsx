import { useWindowDimensions } from "react-native";
import { CarrouselItem } from "../items";
import * as S from "./styles";

export function WelcomeItem({ Image, subtitle, title }: CarrouselItem) {
  const { width } = useWindowDimensions();

  return (
    <S.Container style={{ width }}>
      {/* <S.CarrouselImage
        source={require(props.image)}
        style={{ resizeMode: "contain", flex: 0.7 }}
      /> */}
      <Image width={width} />
      <S.Info style={{ flex: 0.3 }}>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Info>
    </S.Container>
  );
}
