import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  ${(props) => css`
    gap: ${props.theme.spacing.small};
  `}
`;

type DotProps = {
  active?: boolean;
};
export const Dot = styled(Animated.View)<DotProps>`
  height: 16px;
  border-radius: 11px;
  width: 16px;
  ${(props) => css`
    background-color: ${props.active
      ? props.theme.text.sc
      : props.theme.background.th};
  `}
`;
