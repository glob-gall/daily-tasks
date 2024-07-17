import styled, { css } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
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
