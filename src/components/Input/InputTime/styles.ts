import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${(_props) => css``}
`;
export const Required = styled.Text`
  ${(props) => css`
    color: ${props.theme.feedback.error};
    font-weight: bold;
  `}
`;

export const Label = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`;

export const InputHours = styled.TextInput`
  height: 44px;
  width: 44px;
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const InputMinutes = styled.TextInput`
  height: 44px;
  width: 44px;
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const InputHourWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
  `}
`;

export const InputWrapper = styled.View`
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.sc};
  `}
`;

export const HoursSeparator = styled.Text`
  margin: 0 -4px;
  ${(props) => css`
    color: ${props.theme.text.sc};
  `}
`;
