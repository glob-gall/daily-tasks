import { Animated } from "react-native";
import * as S from "./styles";
export type PaginatorProps = {
  ids: number[];
  scrollX: Animated.Value;
  currentIndex: number;
};

export function Paginator(props: PaginatorProps) {
  const { ids, currentIndex } = props;

  return (
    <S.Container>
      {ids.map((i) => (
        <S.Dot key={i} active={currentIndex === i} />
      ))}
    </S.Container>
  );
}
