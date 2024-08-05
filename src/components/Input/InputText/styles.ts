import styled, { css } from "styled-components/native";
import {
  BaseContainer,
  BaseErrorMsg,
  BaseInputWrapper,
  BaseLabel,
  BaseRequired,
} from "../Base/style";

type Variant = {
  error?: boolean;
};

export const Container = styled(BaseContainer)``;
export const Required = styled(BaseRequired)``;
export const Label = styled(BaseLabel)``;

export const InputText = styled.TextInput`
  height: 42px;
  ${(props) => css`
    margin-left: ${props.theme.spacing.medium};
    color: ${props.theme.text.pr};
  `}
`;

export const InputTextWrapper = styled(BaseInputWrapper)<Variant>`
  ${(props) => css`
    ${props.error &&
    css`
      background-color: ${props.theme.background.error};
      border-color: ${props.theme.feedback.error};
    `}
  `}
`;

export const ErrorMsg = styled(BaseErrorMsg)``;
