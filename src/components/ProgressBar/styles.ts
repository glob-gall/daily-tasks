import { Bar } from "react-native-progress";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  width: 100%;
  border-radius: 4px;
`
export const ProgressBarContainer = styled.View`
  display: flex;
  flex:1;
`

export const Title = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.title};
    color: ${props.theme.colors.neutral['700']};
  `}
`
export const Subtitle = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.small};
    color: ${props.theme.colors.neutral['600']};
  `}
`

export const ProgressBar = styled(Bar)`
/* width: 100px; */
`
export const Percent = styled.Text`
  font-weight: bold;
  width: 48px;
  text-align: right;
  /* background-color: red; */
  ${props => css`
    /* margin-left: ${props.theme.spacing.medium}; */
    color: ${props.theme.colors.neutral['700']};
  `}
`