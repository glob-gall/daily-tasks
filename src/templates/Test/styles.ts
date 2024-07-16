import styled, { css } from "styled-components/native";

export const CreateNewTask = styled.TouchableOpacity`
    border-radius: 24px;
    width: 64px;
    height: 64px;
    
    align-items: center;
    justify-content: center;
    ${props => css`
      background-color: ${props.theme.feedback.success};
      position: absolute;
      bottom: ${props.theme.spacing.default};
      right: ${props.theme.spacing.small};
    `}
`
