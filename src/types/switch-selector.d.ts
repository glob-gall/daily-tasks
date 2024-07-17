declare module "react-native-switch-selector" {
  import { Component } from "react";

  export interface ISwitchSelectorOption {
    label: string;
    value: string | number;
    customIcon?: JSX.Element;
    imageIcon?: string;
    activeColor?: string;
    accessibilityLabel?: string;
    testID?: string;
  }

  export interface ISwitchSelectorProps {
    options: ISwitchSelectorOption[];
    initial?: number;
    value?: number;
    onPress(value: string | number | ISwitchSelectorOption): void;
    fontSize?: number;
    selectedColor?: string;
    buttonMargin?: number;
    buttonColor?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    height?: number;
    borderRadius?: number;
    hasPadding?: boolean;
    bold?: boolean;
    disabled?: boolean;
    onValueChange?(value: boolean): void;
    onChange?(event: any): void;
    ios_backgroundColor?: string;
    trackColor?: {
      false: string;
      true: string;
    };
  }

  export default class SwitchSelector extends Component<
    ISwitchSelectorProps,
    any
  > {}
}
