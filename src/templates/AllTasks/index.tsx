import Base from "../Base";
import { Margin } from "@/components/Spacing/Margin";
import * as S from "./styles";
import CardList from "./CardList";
import { useMemo, useState } from "react";
import useTaskStore from "@/store/task.store";
import InputText from "@/components/Input/InputText";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import InputWeekDay, { Days } from "@/components/Input/InputWeekDay";
import {
  filterTasksByDays,
  filterTasksByName,
  filterTasksWithNoDay,
} from "@/utils/filterTasks";

export default function AllTasks() {
  const { tasks } = useTaskStore();

  const [filter, setFilter] = useState("");

  const [dayFilter, setDayFilter] = useState<Days>({
    monday: true,
    thursday: true,
    wednesday: true,
    tuesday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });

  const handleChangeFilterDay = (days: Days) => {
    setDayFilter({
      monday: days.monday,
      thursday: days.thursday,
      wednesday: days.wednesday,
      tuesday: days.tuesday,
      friday: days.friday,
      saturday: days.saturday,
      sunday: days.sunday,
    });
  };

  const filteredTasks = useMemo(() => {
    const filteredByName = filterTasksByName(tasks, filter);
    const filteredByDay = filterTasksByDays(filteredByName, dayFilter);

    const withoutDays = filterTasksWithNoDay(tasks);
    return [...filteredByDay, ...withoutDays];
  }, [tasks, filter, dayFilter]);

  const handleInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const text = event.nativeEvent.text;
    setFilter(text);
  };

  return (
    <Base>
      <Margin>
        <S.Search>
          <InputText
            value={filter}
            onChange={handleInputChange}
            label="Filter By Title"
          />
          <InputWeekDay
            label=""
            value={dayFilter}
            onChange={handleChangeFilterDay}
          />
        </S.Search>
        <CardList tasks={filteredTasks} />
      </Margin>
    </Base>
  );
}
