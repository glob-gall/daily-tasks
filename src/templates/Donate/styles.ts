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
    border-radius: 4px;
    height: 450px;
    background-color: #fff;
    ${props => css`
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
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  ${props => css`
    padding: ${props.theme.spacing.default};
  `}
  `


export const TextsContainer = styled.View`

`

export const PixCopiColaText = styled.Text`
  /* font-weight: bold; */
  ${props => css`
    color: ${props.theme.colors.neutral['700']};
  `}
`

export const PixLabel = styled.Text`
  font-weight: bold;
  ${props => css`
    margin-bottom: ${props.theme.spacing.small};
    color: ${props.theme.colors.neutral['700']};
  `}
`
export const CopyPasteIcon = styled.View`
  ${props => css`
    margin-left: ${props.theme.spacing.default};
  `}
`