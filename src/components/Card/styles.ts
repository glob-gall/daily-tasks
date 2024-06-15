import styled, { css } from "styled-components/native";
import { Variant } from ".";

export const Container = styled.View<Variant>`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: row;
  height: 66px;

  border-radius: 4px;
  background-color: #fff;

  ${props => css`
    padding: ${props.theme.spacing.small} ${props.theme.spacing.default};
    
    ${props.color === 'red' && css`
      background-color: ${props.theme.colors.red['50']};
    `}
    ${props.color === 'green' && css`
      background-color: ${props.theme.colors.green['50']};
    `}
    ${props.color === 'yellow' && css`
      background-color: ${props.theme.colors.yellow['50']};
    `}
  `}
`

export const Emoji = styled.Text``

export const InfoContainer = styled.View`
  display: flex;
  margin-right: auto;

  ${props => css`
    margin-left: ${props.theme.spacing.medium};
  `}
`

export const title = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.default};
    color: ${props.theme.colors.neutral['700']};
  `}
`

export const Description = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.small};
    color: ${props.theme.colors.neutral['600']};
  `}
`

export const Time = styled.Text<Variant>`
  font-weight: bold;
  ${props => css`
    margin-right: ${props.theme.spacing.medium};
    color: ${props.theme.colors.neutral['400']};

    ${props.color === 'red' && css`
      color: ${props.theme.colors.red['500']};
    `}
    ${props.color === 'green' && css`
      color: ${props.theme.colors.green['500']};
    `}
    ${props.color === 'yellow' && css`
      color: ${props.theme.colors.yellow['500']};
    `}
  `}
`

const BaseCheck = styled.View<Variant>`
  width: 32px;
  height: 32px;
  border-radius: 18px;
  
  ${props => css`
    border: 2px solid ${props.theme.colors.neutral['300']};
  
    ${props.color === 'red' && css`
      border-color: ${props.theme.colors.red['300']};
    `}
    ${props.color === 'green' && css`
      border-color: ${props.theme.colors.green['300']};
    `}
    ${props.color === 'yellow' && css`
      border-color: ${props.theme.colors.yellow['300']};
    `}

  `}
`

export const Checked = styled(BaseCheck)`
  ${props => css`
    

  `}
`

export const Unchecked = styled(BaseCheck)``