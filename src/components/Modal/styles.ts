
import { TouchableWithoutFeedback } from 'react-native';
import ReactNativeModernDatepicker from 'react-native-modern-datepicker';
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

export const Date = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.medium};
    color: ${props.theme.colors.neutral['700']};
  `}
`


export const InputGroupWrapper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  border-radius:4px;
  ${props => css`
    /* background-color: ${props.theme.colors.neutral['200']}; */
  `}
`

export const InputWrapper = styled.View`
  height: 44px;
  width: 44px;
  border-radius:4px;
  align-items: center;
  justify-content: center;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`
export const InputYearWrapper = styled(InputWrapper)`
  width: 66px;
  ${props => css`
  `}
`

export const Separator = styled.Text`
  margin: 0 2px;
  font-weight: bold;
  font-size: 24px;
  ${props => css`
  color: ${props.theme.colors.neutral['500']};
  `}
`

  export const CalendarModal = styled.Modal`
    border-radius:4px;
    ${props => css`
    /* background-color: ${props.theme.colors.neutral['200']}; */
    `}
    `
  export const CalendarContainer = styled.View`
    background-color: #0005;
    border-radius:4px;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    ${props => css`
      padding: ${props.theme.spacing.small} ${props.theme.spacing.default};
    `}
  `

export const DatePicker = styled(ReactNativeModernDatepicker)`
    ${props => css``}
  `
export const DateDialog = styled.View`
    width: 100%;

    ${props => css``}
`

export const OkButtonContainer = styled.View`
  width: 100%;
  background-color: #fff;
  ${props => css`
    padding-right: ${props.theme.spacing.default} ;
    padding-bottom: ${props.theme.spacing.default} ;
      /* background-color: ${props.theme.colors.neutral['200']}; */
  `}
`
export const OkButton = styled.TouchableOpacity`
  margin-left: auto;
  border-radius: 4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['700']};
    padding: ${props.theme.spacing.medium} ${props.theme.spacing.default};
    ${props.disabled && css`
      background-color: ${props.theme.colors.neutral['200']};
      padding: ${props.theme.spacing.medium} ${props.theme.spacing.default};
    `}
  `}
`
export const OkButtonText = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.default};
    color: ${props.theme.colors.neutral['100']};
  `}
`

export const CloseModal = styled.View`
  width: 100%;
  flex: 1;
  ${props => css`
      /* background-color: ${props.theme.colors.neutral['200']}; */
  `}
`