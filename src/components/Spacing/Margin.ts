import styled, { css } from "styled-components/native";

export const Margin = styled.View`
  flex: 1;

  ${(props) => css`
    margin: ${props.theme.spacing.small} ${props.theme.spacing.default};
  `}
`;
