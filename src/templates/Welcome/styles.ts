import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Carrousel = styled.FlatList``;
export const ButtonContainer = styled.View`
  width: 100%;

  ${(props) => css`
    margin-top: ${props.theme.spacing.large};
    margin-bottom: ${props.theme.spacing.xxlarge};
  `}
`;

export const ButtonNext = styled.View`
  height: 44px;
  width: 66px;
  align-items: center;
  justify-content: center;
  display: flex;

  ${(props) => css`
    /* margin: 0 ${props.theme.spacing.large}; */
    background-color: ${props.theme.feedback.success};
    border-radius: ${props.theme.border.radius};
  `}
`;
export const ButtonNextText = styled.Text`
  /* font-weight: bold; */
  ${(props) => css`
    color: ${props.theme.text.inverted};
    font-size: ${props.theme.font.default};
  `}
`;

export const ButtonSkip = styled.View`
  height: 44px;
  width: 44px;
  /* align-items: center;
  justify-content: center; */
  /* width: 196px; */

  ${(props) => css`
    /* margin: ${props.theme.spacing.medium} auto; */
  `}
`;
export const ButtonSkipText = styled.Text`
  ${(props) => css`
    color: ${props.theme.text.pr};
  `}
`;
