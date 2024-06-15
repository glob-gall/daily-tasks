
import * as S from './styles'

interface BaseProps {
  children: React.ReactNode;
}

export default function Base({children}:BaseProps) {


  return (
    <S.Base>
    <S.Container>

        {children}

    </S.Container>
    </S.Base>
  );
}