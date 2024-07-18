import styled, { css } from "styled-components/native";

type Variant = {
  active: boolean;
};

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  ${(_props) => css``}
`;

export const DayButton = styled.TouchableOpacity<Variant>`
  border-radius: 28px;
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;
  ${(props) =>
    props.active
      ? css`
          background-color: ${props.theme.feedback.success};
        `
      : css`
          background-color: ${props.theme.background.sc};
        `}
`;

export const DayButtonText = styled.Text<Variant>`
  text-align: center;

  ${(props) => css`
    font-size: ${props.theme.font.title};
  `}

  ${(props) =>
    props.active
      ? css`
          color: ${props.theme.text.inverted};
        `
      : css`
          color: ${props.theme.text.sc};
        `}
`;
export const DayButtonLabel = styled.Text`
  font-weight: bold;
  ${(props) => css`
    color: ${props.theme.text.pr};
  `}
`;
