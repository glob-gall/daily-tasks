import { ColorNames } from "@/styles/colors";
import styled, { css } from "styled-components/native";

type Variant = {
  color: ColorNames | "white";
};
type ItemVariant = {
  isSelected?: boolean;
};

export const Container = styled.View`
  flex: 1;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
  `}
`;
export const InputWrapper = styled.View`
  height: 44px;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.sc};
  `}
`;

export const Label = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`;

export const Required = styled.Text`
  ${(props) => css`
    color: ${props.theme.feedback.error};
    font-weight: bold;
  `}
`;

export const Item = styled.View<ItemVariant>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.base};
  `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${props.theme.background.sc};
    `}
`;

export const ItemLabel = styled.Text`
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
    font-size: ${props.theme.font.default};
    color: ${props.theme.text.pr};
  `}
`;

export const ItemIcon = styled.View`
  margin-left: auto;
  ${(props) => css`
    margin-right: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const ColorPreview = styled.Text<Variant>`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  text-align: center;

  ${(props) => css`
    background-color: ${props.theme.background.wh};
    margin-left: ${props.theme.spacing.medium};
  `}

  ${(props) =>
    props.color === "red" &&
    css`
      background-color: ${props.theme.background.error};
    `}
  ${(props) =>
    props.color === "green" &&
    css`
      background-color: ${props.theme.colors.green["200"]};
    `}
  ${(props) =>
    props.color === "yellow" &&
    css`
      background-color: ${props.theme.colors.yellow["200"]};
    `}
  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: ${props.theme.colors.blue["200"]};
    `}
  ${(props) =>
    props.color === "indigo" &&
    css`
      background-color: ${props.theme.colors.indigo["200"]};
    `}
  ${(props) =>
    props.color === "purple" &&
    css`
      background-color: ${props.theme.colors.purple["200"]};
    `}
  ${(props) =>
    props.color === "orange" &&
    css`
      background-color: ${props.theme.colors.orange["200"]};
    `}
  ${(props) =>
    props.color === "fuchsia" &&
    css`
      background-color: ${props.theme.colors.fuchsia["200"]};
    `}
  ${(props) =>
    props.color === "pink" &&
    css`
      background-color: ${props.theme.colors.pink["200"]};
    `}
  ${(props) =>
    props.color === "rose" &&
    css`
      background-color: ${props.theme.colors.rose["200"]};
    `}
`;
