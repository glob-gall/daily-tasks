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
    color: ${props.theme.feedback.error};
    font-weight: bold;
  `}
`

export const Label = styled.Text`
  font-weight: bold;
  ${props => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`

export const InputText = styled.TextInput`
  height: 42px;
  ${props => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`

export const InputTextWrapper = styled.View<Variant>`
  ${props => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.sc};
    border: 2px solid ${props.theme.background.sc};
  
  
    ${props.error && css`
      background-color: ${props.theme.background.error};
      border-color: ${props.theme.feedback.error};
    `}
  `}
`
  
  export const ErrorMsg = styled.Text`
  font-weight: bold;
  ${props => css`
    color: ${props.theme.feedback.error};
    margin-left: ${props.theme.spacing.small};
  `}
`
