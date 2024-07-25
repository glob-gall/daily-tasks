import { Task } from "@/entity/Task/dto";

export function taskTimeToNumber(time?: string) {
  if (!time) return 2499;

  const [hours, min] = time.split(":");
  const timeNumber = +(hours + min);
  return timeNumber;
}

export function compareTime(a?: string, b?: string) {
  return taskTimeToNumber(a) - taskTimeToNumber(b);
}
export function compareNames(a: string, b: string) {
  let aOrder = +a.split("-")[0];
  let bOrder = +b.split("-")[0];

  if (Number.isNaN(aOrder) && !Number.isNaN(bOrder)) {
    return -1;
  } else if (!Number.isNaN(aOrder) && Number.isNaN(bOrder)) {
    return 1;
  } else if (Number.isNaN(aOrder) && Number.isNaN(bOrder)) {
    return a.localeCompare(b);
  }

  return aOrder - bOrder;
}

export function compareTask(a: Task, b: Task) {
  if (!a.time && !b.time) {
    return compareNames(a.name, b.name);
  }

  const timeCompare = compareTime(a.time, b.time);

  return timeCompare;
}
