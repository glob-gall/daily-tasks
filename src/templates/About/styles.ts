import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${props => css`
      margin-top: ${props.theme.spacing.large};
  `}
`

export const CardInfo = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    ${props => css`
      background-color: ${props.theme.background.wh};
      padding: ${props.theme.spacing.default};
      margin-bottom: ${props.theme.spacing.medium};

    `}
`

export const CardIcon = styled.View`
    
    ${props => css`
    `}
`

export const CardText = styled.Text`
    ${props => css`
    font-size: ${props.theme.font.title};
      margin-left: ${props.theme.spacing.default};
    `}
`
