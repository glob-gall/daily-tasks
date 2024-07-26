import { ColorNames } from "@/styles/colors";
import styled, { css } from "styled-components/native";

type Variant = {
  color: ColorNames;
};
type Check = {
  check: boolean;
};

export const Container = styled.View<Variant>`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 72px;

  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.wh};
    padding: ${props.theme.spacing.small} ${props.theme.spacing.default};

    ${props.color === "red" &&
    css`
      background-color: ${props.theme.colors.red[props.theme.intensity.light]};
    `}
    ${props.color === "green" &&
    css`
      background-color: ${props.theme.colors.green[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "yellow" &&
    css`
      background-color: ${props.theme.colors.yellow[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "amber" &&
    css`
      background-color: ${props.theme.colors.amber[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "blue" &&
    css`
      background-color: ${props.theme.colors.blue[props.theme.intensity.light]};
    `}
    ${props.color === "cyan" &&
    css`
      background-color: ${props.theme.colors.cyan[props.theme.intensity.light]};
    `}
    ${props.color === "emerald" &&
    css`
      background-color: ${props.theme.colors.emerald[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "fuchsia" &&
    css`
      background-color: ${props.theme.colors.fuchsia[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "gray" &&
    css`
      background-color: ${props.theme.colors.gray[props.theme.intensity.light]};
    `}
    ${props.color === "indigo" &&
    css`
      background-color: ${props.theme.colors.indigo[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "lime" &&
    css`
      background-color: ${props.theme.colors.lime[props.theme.intensity.light]};
    `}
    ${props.color === "neutral" &&
    css`
      background-color: ${props.theme.background.wh};
      /* background-color: ${props.theme.background.base}; */
    `}
    ${props.color === "orange" &&
    css`
      background-color: ${props.theme.colors.orange[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "pink" &&
    css`
      background-color: ${props.theme.colors.pink[props.theme.intensity.light]};
    `}
    ${props.color === "purple" &&
    css`
      background-color: ${props.theme.colors.purple[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "rose" &&
    css`
      background-color: ${props.theme.colors.rose[props.theme.intensity.light]};
    `}
    ${props.color === "sky" &&
    css`
      background-color: ${props.theme.colors.sky[props.theme.intensity.light]};
    `}
    ${props.color === "slate" &&
    css`
      background-color: ${props.theme.colors.slate[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "teal" &&
    css`
      background-color: ${props.theme.colors.teal[props.theme.intensity.light]};
    `}
    ${props.color === "violet" &&
    css`
      background-color: ${props.theme.colors.violet[
        props.theme.intensity.light
      ]};
    `}
    ${props.color === "zinc" &&
    css`
      background-color: ${props.theme.colors.zinc[props.theme.intensity.light]};
    `}
  `}
`;

export const GotoDetails = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Emoji = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.font.xlarge};
  `}
`;

export const InfoContainer = styled.View`
  display: flex;
  margin-right: auto;
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
  `}
`;

export const title = styled.Text<Check>`
  ${(props) => css`
    font-size: ${props.theme.font.default};
    color: ${props.theme.text.pr};
    ${props.check &&
    css`
      text-decoration: line-through;
    `}
  `}
`;

export const Description = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.font.small};
    color: ${props.theme.text.sc};
  `}
`;

const DateTimeBase = styled.Text<Variant & Check>`
  ${(props) => css`
    font-size: ${props.theme.font.small};
    ${props.check &&
    css`
      text-decoration: line-through;
    `}

    ${props.color === "red" &&
    css`
      color: ${props.theme.feedback.error};
    `}
    ${props.color === "green" &&
    css`
      color: ${props.theme.feedback.success};
    `}
    ${props.color === "yellow" &&
    css`
      color: ${props.theme.colors.yellow[props.theme.intensity.dense]};
    `}
    ${props.color === "amber" &&
    css`
      color: ${props.theme.colors.amber[props.theme.intensity.dense]};
    `}
    ${props.color === "blue" &&
    css`
      color: ${props.theme.colors.blue[props.theme.intensity.dense]};
    `}
    ${props.color === "cyan" &&
    css`
      color: ${props.theme.colors.cyan[props.theme.intensity.dense]};
    `}
    ${props.color === "emerald" &&
    css`
      color: ${props.theme.colors.emerald[props.theme.intensity.dense]};
    `}
    ${props.color === "fuchsia" &&
    css`
      color: ${props.theme.colors.fuchsia[props.theme.intensity.dense]};
    `}
    ${props.color === "gray" &&
    css`
      color: ${props.theme.colors.gray[props.theme.intensity.dense]};
    `}
    ${props.color === "indigo" &&
    css`
      color: ${props.theme.colors.indigo[props.theme.intensity.dense]};
    `}
    ${props.color === "lime" &&
    css`
      color: ${props.theme.colors.lime[props.theme.intensity.dense]};
    `}
    ${props.color === "neutral" &&
    css`
      color: ${props.theme.text.sc};
    `}
    ${props.color === "orange" &&
    css`
      color: ${props.theme.colors.orange[props.theme.intensity.dense]};
    `}
    ${props.color === "pink" &&
    css`
      color: ${props.theme.colors.pink[props.theme.intensity.dense]};
    `}
    ${props.color === "purple" &&
    css`
      color: ${props.theme.colors.purple[props.theme.intensity.dense]};
    `}
    ${props.color === "rose" &&
    css`
      color: ${props.theme.colors.rose[props.theme.intensity.dense]};
    `}
    ${props.color === "sky" &&
    css`
      color: ${props.theme.colors.sky[props.theme.intensity.dense]};
    `}
    ${props.color === "slate" &&
    css`
      color: ${props.theme.colors.slate[props.theme.intensity.dense]};
    `}
    ${props.color === "teal" &&
    css`
      color: ${props.theme.colors.teal[props.theme.intensity.dense]};
    `}
    ${props.color === "violet" &&
    css`
      color: ${props.theme.colors.violet[props.theme.intensity.dense]};
    `}
    ${props.color === "zinc" &&
    css`
      color: ${props.theme.colors.zinc[props.theme.intensity.dense]};
    `}
  `}
`;

export const DateTime = styled.View`
  display: flex;
  align-items: flex-end;
`;
export const Date = styled(DateTimeBase)``;

export const Time = styled(DateTimeBase)`
  font-weight: bold;
`;

export const CheckButton = styled.TouchableOpacity`
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
  `}
`;

const BaseCheck = styled.View<Variant>`
  border-radius: 50px;
  width: 36px;
  height: 36px;
  ${(props) => css`
    border: 2px solid;

    ${props.color === "red" &&
    css`
      border-color: ${props.theme.colors.red[props.theme.intensity.medium]};
    `}
    ${props.color === "green" &&
    css`
      border-color: ${props.theme.colors.green[props.theme.intensity.medium]};
    `}
    ${props.color === "yellow" &&
    css`
      border-color: ${props.theme.colors.yellow[props.theme.intensity.medium]};
    `}
    ${props.color === "amber" &&
    css`
      border-color: ${props.theme.colors.amber[props.theme.intensity.medium]};
    `}
    ${props.color === "blue" &&
    css`
      border-color: ${props.theme.colors.blue[props.theme.intensity.medium]};
    `}
    ${props.color === "cyan" &&
    css`
      border-color: ${props.theme.colors.cyan[props.theme.intensity.medium]};
    `}
    ${props.color === "emerald" &&
    css`
      border-color: ${props.theme.colors.emerald[props.theme.intensity.medium]};
    `}
    ${props.color === "fuchsia" &&
    css`
      border-color: ${props.theme.colors.fuchsia[props.theme.intensity.medium]};
    `}
    ${props.color === "gray" &&
    css`
      border-color: ${props.theme.colors.gray[props.theme.intensity.medium]};
    `}
    ${props.color === "indigo" &&
    css`
      border-color: ${props.theme.colors.indigo[props.theme.intensity.medium]};
    `}
    ${props.color === "lime" &&
    css`
      border-color: ${props.theme.colors.lime[props.theme.intensity.medium]};
    `}
    ${props.color === "neutral" &&
    css`
      border-color: ${props.theme.colors.neutral[props.theme.intensity.medium]};
    `}
    ${props.color === "orange" &&
    css`
      border-color: ${props.theme.colors.orange[props.theme.intensity.medium]};
    `}
    ${props.color === "pink" &&
    css`
      border-color: ${props.theme.colors.pink[props.theme.intensity.medium]};
    `}
    ${props.color === "purple" &&
    css`
      border-color: ${props.theme.colors.purple[props.theme.intensity.medium]};
    `}
    ${props.color === "rose" &&
    css`
      border-color: ${props.theme.colors.rose[props.theme.intensity.medium]};
    `}
    ${props.color === "sky" &&
    css`
      border-color: ${props.theme.colors.sky[props.theme.intensity.medium]};
    `}
    ${props.color === "slate" &&
    css`
      border-color: ${props.theme.colors.slate[props.theme.intensity.medium]};
    `}
    ${props.color === "teal" &&
    css`
      border-color: ${props.theme.colors.teal[props.theme.intensity.medium]};
    `}
    ${props.color === "violet" &&
    css`
      border-color: ${props.theme.colors.violet[props.theme.intensity.medium]};
    `}
    ${props.color === "zinc" &&
    css`
      border-color: ${props.theme.colors.zinc[props.theme.intensity.medium]};
    `}
  `}
`;

export const Checked = styled(BaseCheck)`
  align-items: center;
  justify-content: center;
  ${(props) => css`
    border-color: ${props.theme.feedback.success};
    background-color: ${props.theme.feedback.success};
  `}
`;

export const Unchecked = styled(BaseCheck)`
  ${(_props) => css``}
`;
