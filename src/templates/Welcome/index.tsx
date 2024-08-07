import { carrouselItens } from "./items";
import { WelcomeItem } from "./WelcomeItem";
import AppIntroSlider from "react-native-app-intro-slider";
import Theme from "@/styles/theme";
import * as S from "./styles";
import { ArrowRight } from "lucide-react-native";
import useWelcomeStore from "@/store/welcome.store";

export default function WelcomePage() {
  const { hideWelcome } = useWelcomeStore();
  return (
    <AppIntroSlider
      data={carrouselItens}
      renderItem={({ item }) => <WelcomeItem {...item} />}
      activeDotStyle={{ backgroundColor: Theme.text.sc }}
      renderNextButton={() => (
        <S.ButtonNext>
          <S.ButtonNextText>
            <ArrowRight color="#fff" />
          </S.ButtonNextText>
        </S.ButtonNext>
      )}
      renderDoneButton={() => (
        <S.ButtonNext>
          <S.ButtonNextText>
            <ArrowRight color="#fff" />
          </S.ButtonNextText>
        </S.ButtonNext>
      )}
      onDone={hideWelcome}
    />
  );
}
