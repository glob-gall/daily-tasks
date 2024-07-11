import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import qrcode from '@/../assets/images/qrcodepix.png'
import { Image } from "react-native";
import { useCallback } from "react";
import * as Clipboard from 'expo-clipboard';

import * as S from './styles'
import { Copy } from "lucide-react-native";
import Theme from "@/styles/theme";

const pixKey = '00020126360014br.gov.bcb.pix0114+55499910752835204000053039865802BR5925Luis Felipe Galleguillos 6009Sao Paulo62070503***6304A6BB'

export default function Donate() {
  const copyPixKey = useCallback(async() =>{
    await Clipboard.setStringAsync(pixKey)
  },[])
  
  return (
    <Base>
      <Margin>
        <S.Container>
          <S.PixContainer>
            <S.PixImage 
              source={qrcode}
              resizeMode='contain'
            />
          </S.PixContainer>

          <S.PixCopiCola onPress={copyPixKey}>
            <S.TextsContainer>
              <S.PixLabel>
                Pix Copia e Cola
              </S.PixLabel>
              <S.PixCopiColaText>
                {pixKey}
              </S.PixCopiColaText>
            </S.TextsContainer>
            <S.CopyPasteIcon>
              <Copy color={Theme.colors.neutral['700']} />
            </S.CopyPasteIcon>
          </S.PixCopiCola>
        </S.Container>

      </Margin>
    </Base>
  );
}