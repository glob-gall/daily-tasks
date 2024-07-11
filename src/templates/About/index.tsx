import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";

import { Globe, Instagram, Mail } from "lucide-react-native";
import Theme from "@/styles/theme";
import * as Linking from 'expo-linking';

import * as S from './styles'
import { useCallback } from "react";


export default function About() {
  const openSite = useCallback(()=>{
    Linking.openURL('https://www.instagram.com/luisf.galleguillos/')
  },[])
  const openInstagram = useCallback(()=>{
    Linking.openURL('https://www.instagram.com/luisf.galleguillos/')
    // Linking.openURL('instagram://user?username=luisf.galleguillos')

  },[])
  const openEmail = useCallback(()=>{
    Linking.openURL('mailto:luisfelipegalleguillos@hotmail.com')
  },[])
  
  return (
    <Base>
      <Margin>
        <S.Container>
          
          <S.CardInfo onPress={openSite}>
            <S.CardIcon>
              <Globe color={Theme.colors.neutral['700']}/>
            </S.CardIcon>
            <S.CardText>
              Site
            </S.CardText>
          </S.CardInfo>
          
          <S.CardInfo onPress={openInstagram}>
            <S.CardIcon>
              <Instagram color={Theme.colors.neutral['700']}/>
            </S.CardIcon>
            <S.CardText>
              Instagram
            </S.CardText>
          </S.CardInfo>
          
          <S.CardInfo onPress={openEmail}>
            <S.CardIcon>
              <Mail color={Theme.colors.neutral['700']}/>
            </S.CardIcon>
            <S.CardText>
              luisfelipegalleguillos@hotmail.com
            </S.CardText>
          </S.CardInfo>

        </S.Container>
      </Margin>
    </Base>
  );
}