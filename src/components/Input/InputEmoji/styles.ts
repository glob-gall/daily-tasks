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

export const Input = styled.TextInput`
  height: 44px;
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const EmojiSelectorButton = styled.TouchableOpacity`
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => css`
    border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.sc};
  `}
`;

export const HiddenInput = styled.TextInput`
  display: none;
`;
export const ShowEmoji = styled.Text`
  font-size: 82px;
  ${(props) => css`
    /* background-color: ${props.theme.background.sc}; */
  `}
`;
