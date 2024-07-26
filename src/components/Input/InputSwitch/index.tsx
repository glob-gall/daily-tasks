import Theme from "@/styles/theme";
import * as S from "./styles";
import SwitchSelector from "react-native-switch-selector";
import { TaskType } from "@/entity/Task/dto";
import { Option } from "@/templates/RegisterTask/TaskForm";

// export type Variant = {
//   color?: CardColors
// }

export type InputSwitchProps = {
  // name: TaskFormField
  label?: string;
  options: Option[];
  defaultValue?: TaskType;
  onPress: (value: TaskType) => void;
};

function InputSwitch(props: InputSwitchProps) {
  const { label, options, defaultValue, onPress } = props;

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}

      <SwitchSelector
        selectedColor={Theme.text.inverted}
        buttonColor={Theme.feedback.success}
        textColor={Theme.text.sc}
        backgroundColor={Theme.background.sc}
        borderRadius={+Theme.border.radius.replace("px", "")}
        height={44}
        bold
        options={options}
        initial={options.findIndex((f) => f.value === defaultValue)}
        onPress={onPress}
      />
    </S.Container>
  );
}

export default InputSwitch;
