import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
`
export const CardWrapper = styled.View`
  margin-bottom: 10px;
`
export const MarginHelper = styled.View`
  height: 124px;
`

export const EmptyList = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const EmptyListText = styled.Text`
  ${props => css`
    font-size: ${props.theme.font.title};
    color: ${props.theme.text.placeholder};
  `}
`