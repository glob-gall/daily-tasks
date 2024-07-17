import { Days } from "@/components/Input/InputWeekDay";
import { Task } from "@/entity/Task/dto";

export function filterTasksByDays(tasks: Task[], days: Days) {
  const filteredByDay = tasks.filter((t) => {
    if (t.type === "event") return true;

    if (!t.days) return false;
    if (t.days.monday && days.monday) {
      return true;
    } else if (t.days.tuesday && days.tuesday) {
      return true;
    } else if (t.days.wednesday && days.wednesday) {
      return true;
    } else if (t.days.thursday && days.thursday) {
      return true;
    } else if (t.days.friday && days.friday) {
      return true;
    } else if (t.days.saturday && days.saturday) {
      return true;
    } else if (t.days.sunday && days.sunday) {
      return true;
    }
  });

  return filteredByDay;
}

export function filterTasksByName(tasks: Task[], filter: string) {
  return tasks.filter((task) =>
    task.name.toLocaleLowerCase().startsWith(filter.toLowerCase()),
  );
}
