import { ColorNames } from "@/styles/colors";
import styled, { css } from "styled-components/native";
import {
  BaseContainer,
  BaseInputWrapper,
  BaseLabel,
  BaseRequired,
} from "../Base/style";

type Variant = {
  color: ColorNames | "white";
};
type ItemVariant = {
  isSelected?: boolean;
};

export const Container = styled(BaseContainer)``;
export const InputWrapper = styled(BaseInputWrapper)``;

export const Label = styled(BaseLabel)``;

export const Required = styled(BaseRequired)``;

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
  border-radius: 12px;
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
      background-color: ${props.theme.colors.green[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "yellow" &&
    css`
      background-color: ${props.theme.colors.yellow[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: ${props.theme.colors.blue[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "indigo" &&
    css`
      background-color: ${props.theme.colors.indigo[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "purple" &&
    css`
      background-color: ${props.theme.colors.purple[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "orange" &&
    css`
      background-color: ${props.theme.colors.orange[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "fuchsia" &&
    css`
      background-color: ${props.theme.colors.fuchsia[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "pink" &&
    css`
      background-color: ${props.theme.colors.pink[
        props.theme.intensity.medium
      ]};
    `}
  ${(props) =>
    props.color === "rose" &&
    css`
      background-color: ${props.theme.colors.rose[
        props.theme.intensity.medium
      ]};
    `}
`;
