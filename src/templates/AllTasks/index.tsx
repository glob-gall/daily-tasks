import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import Theme from "@/styles/theme";
import CardList from "./CardList";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import useTaskStore from "@/store/task.store";
import InputText from "@/components/Input/InputText";
import { Search } from "lucide-react-native";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export default function AllTasks() {
  const {tasks} = useTaskStore();
  const router = useRouter();
  // console.log({tasks});
  
  // const gotoRegisterCard = useCallback(()=>{
    //   router.push("register-task")
    // },[])
    const [filter,setFilter] = useState('')

    const filteredTasks = useMemo(
      ()=> tasks.filter(task => task.name.toLocaleLowerCase().startsWith(filter.toLowerCase())) ,
    [tasks,filter])
  
  const handleInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = event.nativeEvent.text;
    setFilter(text);
  };

  return (
    <Base>
      <Margin>
        <S.Search>
          {/* <S.SearchIcon>
            <Search color={Theme.colors.neutral['700']} />
          </S.SearchIcon> */}
          <InputText
            value={filter}
            onChange={handleInputChange}
            label="filtar por titulo" 
          />
        </S.Search>
        <CardList tasks={filteredTasks}/>
        {/* <S.CreateNewTask onPress={gotoRegisterCard}>
          <FontAwesome5 name="plus" size={24} color={Theme.colors.neutral['50']} />
        </S.CreateNewTask> */}

      </Margin>
    </Base>
  );
}