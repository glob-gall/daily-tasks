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

export const InputWrapperGroup = styled.View`
  display: flex;
  flex-direction: row;
  flex:1;
  /* justify-content: space-between; */
  align-items: center;
  ${props => css`
    margin-top: ${props.theme.spacing.default};
  `}
`

export const SelectorWrapper = styled.View`
  ${props => css`
    margin-top: ${props.theme.spacing.large};
  `}
`
export const InputRowWrapper = styled.View`
  flex: 1;
  ${props => css`
    margin-left: ${props.theme.spacing.large};
  `}
`



