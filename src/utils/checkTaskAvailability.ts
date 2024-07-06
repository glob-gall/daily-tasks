import { Task, TaskDay } from "@/entity/Task/dto";
import getWeekDay from "./getWeekDay";

function checkTaskAvailability(task:Task): boolean {
  if (!task.days) return false
  const today = getWeekDay()
  
  if (today === 'Domingo') return task.days.sunday   
  if (today === 'Segunda-Feira') return task.days.monday   
  if (today === 'Terça-Feira') return task.days.tuesday   
  if (today === 'Quarta-Feira') return task.days.wednesday   
  if (today === 'Quinta-Feira') return task.days.thursday   
  if (today === 'Sexta-Feira') return task.days.friday   
  if (today === 'Sabado') return task.days.saturday   
  return false
}

export function checkTaskWeekDay(taskDay:TaskDay|undefined): boolean {
  if (!taskDay) return false
  const today = getWeekDay()
  
  if (today === 'Domingo') return taskDay.sunday   
  if (today === 'Segunda-Feira') return taskDay.monday   
  if (today === 'Terça-Feira') return taskDay.tuesday   
  if (today === 'Quarta-Feira') return taskDay.wednesday   
  if (today === 'Quinta-Feira') return taskDay.thursday   
  if (today === 'Sexta-Feira') return taskDay.friday   
  if (today === 'Sabado') return taskDay.saturday   
  return false
}


export default checkTaskAvailability