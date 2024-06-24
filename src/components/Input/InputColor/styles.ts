import { ColorNames } from "@/styles/colors";
import styled, { css } from "styled-components/native";

type Variant = {
  color: ColorNames | 'white'
}
type ItemVariant = {
  isSelected?:boolean
}

export const Container = styled.View`
  flex: 1;
  border-radius: 4px;
  ${props => css`
    /* background-color: ${props.theme.colors.neutral['200']}; */
  `}
`
export const InputWrapper = styled.View`
  height: 44px;
  border-radius: 4px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['200']};
  `}
`

export const Label = styled.Text`
  font-weight: bold;
  ${props => css`
    color: ${props.theme.colors.neutral['700']};
    margin-left: ${props.theme.spacing.small};
  `}
`

export const Item = styled.View<ItemVariant>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 44px;
  ${props => css`
    background-color: ${props.theme.colors.neutral['50']};
  `}
  
  ${props => props.isSelected && css`
  background-color: ${props.theme.colors.neutral['200']};
  `}
`

export const ItemLabel = styled.Text`
  ${props => css`
    margin-left: ${props.theme.spacing.medium};
    font-size: ${props.theme.font.default};
    color: ${props.theme.colors.neutral['700']};
  `}
`

export const ItemIcon = styled.View`
  margin-left: auto;
  ${props => css`
    margin-right: ${props.theme.spacing.medium};
    color: ${props.theme.colors.neutral['700']};
  `}
`

export const ColorPreview = styled.Text<Variant>`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  text-align: center;
  background-color: #fff;

  ${props => css`
    margin-left: ${props.theme.spacing.medium};
  `}

  ${props => props.color === 'red' && css`
    background-color: ${props.theme.colors.red['200']};
    `}
  ${props => props.color === 'green' && css`
    background-color: ${props.theme.colors.green['200']};
  `}
  ${props => props.color === 'yellow' && css`
    background-color: ${props.theme.colors.yellow['200']};
  `}
  ${props => props.color === 'blue' && css`
    background-color: ${props.theme.colors.blue['200']};
    `}
  ${props => props.color === 'indigo' && css`
    background-color: ${props.theme.colors.indigo['200']};
  `}
  ${props => props.color === 'purple' && css`
    background-color: ${props.theme.colors.purple['200']};
  `}
  ${props => props.color === 'orange' && css`
    background-color: ${props.theme.colors.orange['200']};
  `}
  ${props => props.color === 'fuchsia' && css`
    background-color: ${props.theme.colors.fuchsia['200']};
    `}
  ${props => props.color === 'pink' && css`
    background-color: ${props.theme.colors.pink['200']};
  `}
  ${props => props.color === 'rose' && css`
    background-color: ${props.theme.colors.rose['200']};
  `}
`

