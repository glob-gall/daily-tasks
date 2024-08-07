import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CarrouselImage = styled.Image`
  width: 100px;
  height: 100px;
  justify-content: center;
  background-color: red;
  ${(_props) => css``}
`;

export const Info = styled.View``;
export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  ${(props) => css`
    font-size: ${props.theme.font.xlarge};
    color: ${props.theme.text.pr};
  `};
`;
export const Subtitle = styled.Text`
  text-align: center;
  ${(props) => css`
    font-size: ${props.theme.font.default};
    color: ${props.theme.text.sc};
    padding: 0 ${props.theme.spacing.large};
  `};
`;
