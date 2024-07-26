import styled, { css } from "styled-components/native";

export const BaseContainer = styled.View`
  ${(_props) => css``}
`;

export const BaseInputWrapper = styled.View`
  height: 44px;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.sc};
  `}
`;

export const BaseLabel = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`;

export const BaseRequired = styled.Text`
  ${(props) => css`
    color: ${props.theme.feedback.error};
    font-weight: bold;
  `}
`;

export const BaseErrorMsg = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.feedback.error};
    margin-left: ${props.theme.spacing.small};
  `}
`;
