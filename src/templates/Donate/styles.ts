import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-bottom: auto;
  /* background-color: red; */
  ${props => css`
    /* padding: ${props.theme.spacing.default}; */
    `}
`

export const PixContainer = styled.View`
    display: flex;
    height: 450px;
    ${props => css`
      background-color: ${props.theme.background.wh};
      border-radius: ${props.theme.border.radius};
      padding: ${props.theme.spacing.default} 0 ${props.theme.spacing.large} 0;
      margin: ${props.theme.spacing.large} 0;
    `}
`

export const PixImage = styled.Image`
  width: 100%;
  height: 100%;
  /* flex:1; */
  /* height: auto; */

  ${props => css`
  `}
  `

export const PixCopiCola = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  ${props => css`
    background-color: ${props.theme.background.wh};
    padding: ${props.theme.spacing.default};
  `}
  `


export const TextsContainer = styled.View`

`

export const PixCopiColaText = styled.Text`
  /* font-weight: bold; */
  ${props => css`
    color: ${props.theme.text.pr};
  `}
`

export const PixLabel = styled.Text`
  font-weight: bold;
  ${props => css`
    margin-bottom: ${props.theme.spacing.small};
    color: ${props.theme.text.pr};
  `}
`
export const CopyPasteIcon = styled.View`
  ${props => css`
    margin-left: ${props.theme.spacing.default};
  `}
`