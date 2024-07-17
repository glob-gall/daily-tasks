import * as S from "./styles";
import { useCallback } from "react";
import { DayNames } from "..";
// export type Variant = {
//   color?: CardColors
// }

export type DayButtonProps = {
  label: string;
  text: string;
  name: DayNames;
  onChange: (day: DayNames) => void;
  active?: boolean;
};

function DayButton(props: DayButtonProps) {
  const { label, text, name, onChange, active = false } = props;

  const onPress = useCallback(() => {
    onChange(name);
  }, [name, onChange]);

  return (
    <S.Container key={name}>
      <S.DayButton onPress={onPress} active={active}>
        <S.DayButtonText active={active}>{text}</S.DayButtonText>
      </S.DayButton>
      <S.DayButtonLabel>{label}</S.DayButtonLabel>
    </S.Container>
  );
}

export default DayButton;
