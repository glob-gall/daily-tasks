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

export const InputWrapper = styled.View`
  border-radius:4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`
export const DateButton = styled.TouchableOpacity`
  border-radius:4px;
  height: 44px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`
export const DateButtonText = styled.Text`
  border-radius:4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`
  
