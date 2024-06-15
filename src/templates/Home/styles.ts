import styled, { css } from "styled-components/native";

export const CreateNewTask = styled.View`
    border-radius: 24px;
    width: 64px;
    height: 64px;
    
    align-items: center;
    justify-content: center;
    ${props => css`
      background-color: ${props.theme.colors.green['500']};
      position: absolute;
      bottom: ${props.theme.spacing.default};
      right: ${props.theme.spacing.small};
    `}
`
