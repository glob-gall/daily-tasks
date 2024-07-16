import { ColorNames } from "@/styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import styled, { css } from "styled-components/native";

type Variant = {
  color: ColorNames
}
type Check = {
  check: boolean
}

export const Container = styled.View<Variant>`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 66px;

  
  ${props => css`
  border-radius: ${props.theme.border.radius};
    background-color: ${props.theme.background.wh};
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
    ${props.color === 'amber' && css`
      background-color: ${props.theme.colors.amber['50']};
    `}
    ${props.color === 'blue' && css`
      background-color: ${props.theme.colors.blue['50']};
    `}
    ${props.color === 'cyan' && css`
      background-color: ${props.theme.colors.cyan['50']};
    `}
    ${props.color === 'emerald' && css`
      background-color: ${props.theme.colors.emerald['50']};
    `}
    ${props.color === 'fuchsia' && css`
      background-color: ${props.theme.colors.fuchsia['50']};
    `}
    ${props.color === 'gray' && css`
      background-color: ${props.theme.colors.gray['50']};
    `}
    ${props.color === 'indigo' && css`
      background-color: ${props.theme.colors.indigo['50']};
    `}
    ${props.color === 'lime' && css`
      background-color: ${props.theme.colors.lime['50']};
    `}
    ${props.color === 'neutral' && css`
      background-color: ${props.theme.background.wh};
      /* background-color: ${props.theme.background.base}; */
    `}
    ${props.color === 'orange' && css`
      background-color: ${props.theme.colors.orange['50']};
    `}
    ${props.color === 'pink' && css`
      background-color: ${props.theme.colors.pink['50']};
    `}
    ${props.color === 'purple' && css`
      background-color: ${props.theme.colors.purple['50']};
    `}
    ${props.color === 'rose' && css`
      background-color: ${props.theme.colors.rose['50']};
    `}
    ${props.color === 'sky' && css`
      background-color: ${props.theme.colors.sky['50']};
    `}
    ${props.color === 'slate' && css`
      background-color: ${props.theme.colors.slate['50']};
    `}
    ${props.color === 'teal' && css`
      background-color: ${props.theme.colors.teal['50']};
    `}
    ${props.color === 'violet' && css`
      background-color: ${props.theme.colors.violet['50']};
    `}
    ${props.color === 'zinc' && css`
      background-color: ${props.theme.colors.zinc['50']};
    `}
  `}
`

export const GotoDetails = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`

export const Emoji = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.xlarge};
  `}
`

export const InfoContainer = styled.View`
  display: flex;
  margin-right: auto;
  ${props => css`
    margin-left: ${props.theme.spacing.medium};
  `}
`

export const title = styled.Text<Check>`
  ${props => css`
    font-size: ${props.theme.font.default};
    color: ${props.theme.text.pr};
    ${props.check && css`
      text-decoration: line-through;
    `}
  `}
`

export const Description = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.small};
    color: ${props.theme.text.sc};
  `}
`

export const Time = styled.Text<Variant & Check>`
  font-weight: bold;
  ${props => css`
    ${props.check && css`
      text-decoration: line-through;
    `}
    margin-right: ${props.theme.spacing.medium};

    ${props.color === 'red' && css`
      color: ${props.theme.feedback.error};
    `}
    ${props.color === 'green' && css`
      color: ${props.theme.feedback.success};
    `}
    ${props.color === 'yellow' && css`
      color: ${props.theme.colors.yellow['500']};
    `}
    ${props.color === 'amber' && css`
      color: ${props.theme.colors.amber['500']};
    `}
    ${props.color === 'blue' && css`
      color: ${props.theme.colors.blue['500']};
    `}
    ${props.color === 'cyan' && css`
      color: ${props.theme.colors.cyan['500']};
    `}
    ${props.color === 'emerald' && css`
      color: ${props.theme.colors.emerald['500']};
    `}
    ${props.color === 'fuchsia' && css`
      color: ${props.theme.colors.fuchsia['500']};
    `}
    ${props.color === 'gray' && css`
      color: ${props.theme.colors.gray['500']};
    `}
    ${props.color === 'indigo' && css`
      color: ${props.theme.colors.indigo['500']};
    `}
    ${props.color === 'lime' && css`
      color: ${props.theme.colors.lime['500']};
    `}
    ${props.color === 'neutral' && css`
      color: ${props.theme.text.sc};
    `}
    ${props.color === 'orange' && css`
      color: ${props.theme.colors.orange['500']};
    `}
    ${props.color === 'pink' && css`
      color: ${props.theme.colors.pink['500']};
    `}
    ${props.color === 'purple' && css`
      color: ${props.theme.colors.purple['500']};
    `}
    ${props.color === 'rose' && css`
      color: ${props.theme.colors.rose['500']};
    `}
    ${props.color === 'sky' && css`
      color: ${props.theme.colors.sky['500']};
    `}
    ${props.color === 'slate' && css`
      color: ${props.theme.colors.slate['500']};
    `}
    ${props.color === 'teal' && css`
      color: ${props.theme.colors.teal['500']};
    `}
    ${props.color === 'violet' && css`
      color: ${props.theme.colors.violet['500']};
    `}
    ${props.color === 'zinc' && css`
      color: ${props.theme.colors.zinc['500']};
    `}
  `}
`


export const CheckButton = styled.TouchableOpacity`
` 

const BaseCheck = styled.View<Variant>`
  border-radius: 50px;
  width: 34px;
  height: 34px;
  ${props => css`
    border: 2px solid ${props.theme.background.th};
  
    ${props.color === 'red' && css`
      border-color: ${props.theme.colors.red['300']};
    `}
    ${props.color === 'green' && css`
      border-color: ${props.theme.colors.green['300']};
    `}
    ${props.color === 'yellow' && css`
      border-color: ${props.theme.colors.yellow['300']};
    `}
    ${props.color === 'amber' && css`
      border-color: ${props.theme.colors.amber['300']};
    `}
    ${props.color === 'blue' && css`
      border-color: ${props.theme.colors.blue['300']};
    `}
    ${props.color === 'cyan' && css`
      border-color: ${props.theme.colors.cyan['300']};
    `}
    ${props.color === 'emerald' && css`
      border-color: ${props.theme.colors.emerald['300']};
    `}
    ${props.color === 'fuchsia' && css`
      border-color: ${props.theme.colors.fuchsia['300']};
    `}
    ${props.color === 'gray' && css`
      border-color: ${props.theme.colors.gray['300']};
    `}
    ${props.color === 'indigo' && css`
      border-color: ${props.theme.colors.indigo['300']};
    `}
    ${props.color === 'lime' && css`
      border-color: ${props.theme.colors.lime['300']};
    `}
    ${props.color === 'neutral' && css`
      border-color: ${props.theme.background.th};
    `}
    ${props.color === 'orange' && css`
      border-color: ${props.theme.colors.orange['300']};
    `}
    ${props.color === 'pink' && css`
      border-color: ${props.theme.colors.pink['300']};
    `}
    ${props.color === 'purple' && css`
      border-color: ${props.theme.colors.purple['300']};
    `}
    ${props.color === 'rose' && css`
      border-color: ${props.theme.colors.rose['300']};
    `}
    ${props.color === 'sky' && css`
      border-color: ${props.theme.colors.sky['300']};
    `}
    ${props.color === 'slate' && css`
      border-color: ${props.theme.colors.slate['300']};
    `}
    ${props.color === 'teal' && css`
      border-color: ${props.theme.colors.teal['300']};
    `}
    ${props.color === 'violet' && css`
      border-color: ${props.theme.colors.violet['300']};
    `}
    ${props.color === 'zinc' && css`
      border-color: ${props.theme.colors.zinc['300']};
    `}

  `}
`

export const Checked = styled(BaseCheck)`
  align-items: center;
  justify-content: center;
  ${props => css`
    border-color: ${props.theme.feedback.success};
    background-color: ${props.theme.feedback.success};
  `}
`

export const Unchecked = styled(BaseCheck)`
 
  ${props => css`
  `}

`