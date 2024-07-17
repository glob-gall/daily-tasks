import Theme from "@/styles/theme";
import { InputType } from "./enum/Input-type";
import * as S from "./styles";
import { TextInputProps } from "react-native";
import { FieldError } from "react-hook-form";

// export type Variant = {
//   color?: CardColors
// }

export type InputTextProps = TextInputProps & {
  // name: TaskFormField
  label: string;
  required?: boolean;
  type?: InputType;
  error?: FieldError;
};

function InputText(props: InputTextProps) {
  const { label, required, error } = props;

  return (
    <S.Container>
      <S.Label>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>

      <S.InputTextWrapper error={!!error?.message}>
        <S.InputText {...props} placeholderTextColor={Theme.text.placeholder} />
      </S.InputTextWrapper>
      {error?.message && <S.ErrorMsg>{error.message}</S.ErrorMsg>}
    </S.Container>
  );
}

export default InputText;
