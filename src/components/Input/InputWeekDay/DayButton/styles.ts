import styled, { css } from "styled-components/native";

type Variant = {
  active: boolean
}

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => css`
  `}
`

export const DayButton = styled.TouchableOpacity<Variant>`
    border-radius: 28px;
    width: 56px;
    height: 56px;
    
    align-items: center;
    justify-content: center;
    ${props => props.active ? css`
      background-color: ${props.theme.colors.green['500']};
      /* bottom: ${props.theme.spacing.default}; */
    `: css`
      background-color: ${props.theme.colors.neutral['200']};
      /* bottom: ${props.theme.spacing.default}; */
    `}
`

export const DayButtonText = styled.Text<Variant>`
  /* width: 56px; */
  text-align: center;
  /* font-weight: bold; */

  ${props => css`
    font-size: ${props.theme.font.title};
  `}

  ${props => props.active ? css`
    color: #fff;
    /* bottom: ${props.theme.spacing.default}; */
  `: css`
    color: ${props.theme.colors.neutral['500']};
    /* bottom: ${props.theme.spacing.default}; */
  `}
`
export const DayButtonLabel = styled.Text`
  font-weight: bold;
  ${props => css`
    color: ${props.theme.colors.neutral['700']};
  `}
`