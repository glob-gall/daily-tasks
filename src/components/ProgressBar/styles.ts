import { Bar } from "react-native-progress";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
  `}
`;
export const ProgressBarContainer = styled.View`
  display: flex;
  flex: 1;
`;

export const Title = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.font.title};
    color: ${props.theme.text.pr};
  `}
`;
export const Subtitle = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.font.small};
    color: ${props.theme.text.sc};
  `}
`;

export const ProgressBar = styled(Bar)`
  /* width: 100px; */
`;
export const Percent = styled.Text`
  font-weight: bold;
  width: 48px;
  text-align: right;
  /* background-color: red; */
  ${(props) => css`
    /* margin-left: ${props.theme.spacing.medium}; */
    color: ${props.theme.text.pr};
  `}
`;
