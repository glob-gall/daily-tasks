import * as S from "./styles";
export type PaginatorProps = {
  ids: number[];
};

export function Paginator(props: PaginatorProps) {
  const { ids } = props;
  return (
    <S.Container>
      {ids.map((i) => (
        <S.Dot key={i} />
      ))}
    </S.Container>
  );
}
