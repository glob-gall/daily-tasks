import * as S from "./styles";
type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header(props: HeaderProps) {
  const { title, subtitle } = props;
  return (
    <S.Container>
      <S.Title style={{ fontSize: 18, fontWeight: "bold" }}>{title}</S.Title>
      {subtitle && (
        <S.Subtitle style={{ fontSize: 12, color: "gray" }}>
          {subtitle}
        </S.Subtitle>
      )}
    </S.Container>
  );
}
export default Header;
