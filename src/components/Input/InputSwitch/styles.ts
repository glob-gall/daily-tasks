import styled, { css } from "styled-components/native";

type Variant = {
  error?: boolean
}

export const Container = styled.View`
  ${props => css`
  `}
`
export const Required = styled.Text`
  ${props => css`
    color: ${props.theme.colors.red['500']};
    font-weight: bold;
  `}
`

export const Label = styled.Text`
  font-weight: bold;
  ${props => css`
    color: ${props.theme.colors.neutral['700']};
    margin-left: ${props.theme.spacing.small};
  `}
`

export const InputSwitch = styled.TextInput`
  height: 42px;
  ${props => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.colors.neutral['700']};
  `}
`

export const InputSwitchWrapper = styled.View<Variant>`
  border-radius:4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
    border: 2px solid ${props.theme.colors.neutral['200']};
  
  
    ${props.error && css`
      background-color: ${props.theme.colors.red['200']};
      border-color: ${props.theme.colors.red['500']};
    `}
  `}
`
  
  export const ErrorMsg = styled.Text`
  font-weight: bold;
  ${props => css`
    color: ${props.theme.colors.red['500']};
    margin-left: ${props.theme.spacing.small};
  `}
`
