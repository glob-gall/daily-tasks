import styled, { css } from "styled-components/native";

export const CreateNewTask = styled.TouchableOpacity`
  width: 64px;
  height: 64px;

  align-items: center;
  justify-content: center;
  border-radius: 12px;
  ${(props) => css`
    background-color: ${props.theme.feedback.success};
    position: absolute;
    bottom: ${props.theme.spacing.default};
    right: ${props.theme.spacing.small};
  `}
`;

export const ProgressContainer = styled.View`
  ${(props) => css`
    margin: ${props.theme.spacing.default} 0;
  `}
`;
