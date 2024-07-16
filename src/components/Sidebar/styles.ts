import styled, { css } from "styled-components/native";

export const Separator = styled.Text`
  margin: 0 2px;
  font-weight: bold;
  ${props => css`
    font-size: ${props.theme.font.large};
    color: ${props.theme.text.sc};
  `}
`

  export const SidebarModal= styled.Modal`
    ${props => css`
      border-radius: ${props.theme.border.radius};
    `}
    `
  export const SidebarContainer = styled.View`
    flex: 1;
    flex-direction: row;
    
    ${props => css`
      background-color: ${props.theme.background.shadow};
      border-radius: ${props.theme.border.radius};
    `}
  `

export const CloseSidebar = styled.View`
  flex: 1;
  ${props => css`
  `}
`
export const Sidebar = styled.View`
  display: flex;
  flex: 1;
  min-width: 30%;
  ${props => css`
      padding: 30% ${props.theme.spacing.default};
      background-color: ${props.theme.background.pr};
  `}
`

export const SidebarButton = styled.TouchableOpacity`
  width: 64px;
  height: 48px;
  align-items: center;
  justify-content: center;
`

export const SidebarOption = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  display: flex;
  flex-direction: row;
  
  ${props => css`
    background-color: ${props.theme.background.wh};
    border-radius: ${props.theme.border.radius};
    padding:${props.theme.spacing.small};
    margin-top:${props.theme.spacing.small};
  
  `}

`

export const SidebarOptionText = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.default};
  `}
`
export const SidebarOptionIcon = styled.View`
  ${props => css`
    margin-right: ${props.theme.spacing.medium};
  `}
`