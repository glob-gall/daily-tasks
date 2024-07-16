import { StatusBar } from "react-native";
import styled from "styled-components/native";



export const Base = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background.base};
  `
export const Container = styled.SafeAreaView`
  flex: 1;
  /* margin-top: ${StatusBar.currentHeight}px; */
`