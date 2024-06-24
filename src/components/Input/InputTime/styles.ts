import { ForwardRefRenderFunction } from "react";
import { TextInput } from "react-native-gesture-handler";
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

export const InputHours = styled.TextInput`
  height: 44px;
  width: 44px;
  ${props => css`
  margin-left: ${props.theme.spacing.medium};
  color: ${props.theme.colors.neutral['700']};
  `}
`

export const InputMinutes = styled.TextInput`
  height: 44px;
  width: 44px;
  ${props => css`
  margin-left: ${props.theme.spacing.medium};
  color: ${props.theme.colors.neutral['700']};
  `}
`


export const InputHourWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  border-radius:4px;
  ${props => css`
    /* background-color: ${props.theme.colors.neutral['200']}; */
  `}
`

export const InputWrapper = styled.View`
  border-radius:4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`

export const HoursSeparator = styled.Text`
  margin: 0 -4px;
  ${props => css`
    color: ${props.theme.colors.neutral['500']}
  `}
`