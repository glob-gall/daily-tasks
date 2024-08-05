import * as S from "./styles";
type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header(props: HeaderProps) {
  const { title, subtitle } = props;
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Container>
  );
}
export default Header;
