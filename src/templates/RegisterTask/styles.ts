import styled, { css } from "styled-components/native";

export const ButtonContainer = styled.View`
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    width: 100%;
    
    ${props => css`
      position: absolute;
      bottom: ${props.theme.spacing.default};
    `}
`

export const Button = styled.TouchableOpacity`
    border-radius: 24px;
    width: 64px;
    height: 64px;
    
    align-items: center;
    justify-content: center;
    ${props => css`
      /* bottom: ${props.theme.spacing.default}; */
    `}
`
export const ButtonCreate = styled(Button)`
    margin-left: auto;
    ${props => css`
      background-color: ${props.theme.colors.green['500']};
      right: ${props.theme.spacing.small};
    `}
`
export const ButtonCancel = styled(Button)`
    ${props => css`
      background-color: ${props.theme.colors.red['500']};
      left: ${props.theme.spacing.small};
    `}
`
