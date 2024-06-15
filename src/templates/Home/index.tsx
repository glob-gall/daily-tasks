import { Text } from "react-native";
import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import Card from "@/components/Card";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import { TasksMock } from "@/mock/tasks.mock";
import CardList from "./CardList";

export default function Home() {
  const tasks = TasksMock;
  return (
    <Base>
      <Margin>
        <CardList cards={tasks}/>
        

        <S.CreateNewTask>
          <FontAwesome5 name="plus" size={24} color={Theme.colors.neutral['50']} />
        </S.CreateNewTask>
      </Margin>
    </Base>
  );
}