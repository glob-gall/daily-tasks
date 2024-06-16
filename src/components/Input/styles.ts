import styled, { css } from "styled-components/native";

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

export const Input = styled.TextInput`
  height: 44px;
  ${props => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.colors.neutral['700']};
  `}
`

export const InputWrapper = styled.View`
  border-radius:4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`
  
