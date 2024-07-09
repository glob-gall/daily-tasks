import { Task, TaskDay } from "@/entity/Task/dto";
import getWeekDay from "./getWeekDay";

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

export function compareDateToTaskDate(date: Date, taskDate: string): boolean {
  const dateYear = date.getFullYear()
  const dateMonth = date.getMonth() < 9 ?`0${date.getMonth()+ 1}` : date.getMonth() + 1
  const dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const dateString = `${dateYear}/${dateMonth}/${dateDay}`
  
  return taskDate.localeCompare(dateString) === 0
}

function checkTaskAvailability(task:Task): boolean {
  if (task.type === 'event' && task.date) {
    return compareDateToTaskDate(new Date(),task.date)
  } 
  return checkTaskWeekDay(task.days)
}

export default checkTaskAvailability