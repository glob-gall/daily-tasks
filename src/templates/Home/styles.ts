import { Bar } from "react-native-progress";
import styled, { css } from "styled-components/native";

export const CreateNewTask = styled.TouchableOpacity`
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

export const ProgressContainer = styled.View`
  ${props => css`
    margin: ${props.theme.spacing.default} 0;
  `}
`