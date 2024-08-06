import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  ${(props) => css`
    gap: ${props.theme.spacing.small};
  `}
`;
export const Dot = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 11px;
  ${(props) => css`
    background-color: ${props.theme.background.th};
  `}
`;
