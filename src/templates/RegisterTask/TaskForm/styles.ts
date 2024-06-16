import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
`

export const Input = styled.TextInput`
  display: flex;
`

export const InputWrapper = styled.View`
  ${props => css`
    margin-top: ${props.theme.spacing.default};
  `}
`

export const SelectorWrapper = styled.View`
  ${props => css`
    margin-top: ${props.theme.spacing.large};
  `}
`
