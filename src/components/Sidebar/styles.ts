import styled, { css } from "styled-components/native";

export const Separator = styled.Text`
  margin: 0 2px;
  font-weight: bold;
  font-size: 24px;
  ${props => css`
  color: ${props.theme.colors.neutral['500']};
  `}
`

  export const SidebarModal= styled.Modal`
    border-radius:4px;
    ${props => css`
    /* background-color: ${props.theme.colors.neutral['200']}; */
    `}
    `
  export const SidebarContainer = styled.View`
    background-color: #0005;
    border-radius:4px;
    flex: 1;
    /* align-items: center;
    justify-content: center; */
    flex-direction: row;
    
    ${props => css`
      /* padding: ${props.theme.spacing.small} ${props.theme.spacing.default}; */
    `}
  `

export const CloseSidebar = styled.View`
  flex: 1;
  ${props => css`
      /* background-color: ${props.theme.colors.neutral['200']}; */
  `}
`
export const Sidebar = styled.View`
  display: flex;
  flex: 1;
  min-width: 30%;
  /* padding-top: 30%; */
  ${props => css`
    /* height: 100%; */
      padding: 30% ${props.theme.spacing.default};
      background-color: ${props.theme.colors.neutral['100']};
  `}
`

export const SidebarButton = styled.TouchableOpacity`
  width: 64px;
  height: 48px;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`

export const SidebarOption = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  ${props => css`
    padding:${props.theme.spacing.small};
    margin-top:${props.theme.spacing.small};
  
  `}

`

export const SidebarOptionText = styled.Text`
  /* text-align: center; */
  ${props => css`
    font-size: ${props.theme.font.default};
  `}
`