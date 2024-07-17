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

export const Input = styled.TextInput`
  height: 44px;
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DayButton = styled.TouchableOpacity`
  border-radius: 24px;
  width: 64px;
  height: 64px;

  align-items: center;
  justify-content: center;
  ${(props) => css`
    /* bottom: ${props.theme.spacing.default}; */
  `}
`;

export const DayButtonText = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`;
export const DayButtonLabel = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`;
