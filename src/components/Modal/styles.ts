import ReactNativeModernDatepicker from "react-native-modern-datepicker";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${(_props) => css``}
`;
export const Required = styled.Text`
  ${(props) => css`
    color: ${props.theme.feedback.error};
    font-weight: bold;
  `}
`;

export const Label = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
    margin-left: ${props.theme.spacing.small};
  `}
`;

export const Date = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.font.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const InputGroupWrapper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
  `}
`;

export const InputWrapper = styled.View`
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.sc};
  `}
`;
export const InputYearWrapper = styled(InputWrapper)`
  width: 66px;
  ${(_props) => css``}
`;

export const Separator = styled.Text`
  margin: 0 2px;
  font-weight: bold;
  ${(props) => css`
    font-size: ${props.theme.large};
    color: ${props.theme.text.sc};
  `}
`;

export const CalendarModal = styled.Modal`
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
  `}
`;
export const CalendarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${(props) => css`
    background-color: ${props.theme.background.shadow};
    border-radius: ${props.theme.border.radius};
    padding: ${props.theme.spacing.small} ${props.theme.spacing.default};
  `}
`;

export const DatePicker = styled(ReactNativeModernDatepicker)`
  ${(_props) => css``}
`;
export const DateDialog = styled.View`
  width: 100%;

  ${(_props) => css``}
`;

export const OkButtonContainer = styled.View`
  width: 100%;
  ${(props) => css`
    background-color: ${props.theme.background.wh};
    padding-right: ${props.theme.spacing.default};
    padding-bottom: ${props.theme.spacing.default};
    /* background-color: ${props.theme.background.sc}; */
  `}
`;
export const OkButton = styled.TouchableOpacity`
  margin-left: auto;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.text.pr};
    padding: ${props.theme.spacing.medium} ${props.theme.spacing.default};
    ${props.disabled &&
    css`
      background-color: ${props.theme.background.sc};
      padding: ${props.theme.spacing.medium} ${props.theme.spacing.default};
    `}
  `}
`;
export const OkButtonText = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.font.default};
    color: ${props.theme.background.pr};
  `}
`;

export const CloseModal = styled.View`
  width: 100%;
  flex: 1;
  ${(props) => css`
    /* background-color: ${props.theme.background.sc}; */
  `}
`;
