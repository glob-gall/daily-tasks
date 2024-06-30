import { ColorNames } from "@/styles/colors"

export type Color = {
  label:string
  color: ColorNames | 'white'
}

export type Task = {
  checked: boolean,
  id: string
  name: string
  emoji: string
  color: ColorNames | 'white',
  description?: string
  days?: {
      monday: boolean
      tuesday: boolean
      wednesday: boolean
      thursday: boolean
      friday: boolean
      saturday: boolean
      sunday: boolean
  }
  time?: string,
  date?: string
}

export type TaskType ='daily'|'event'

export type TaskFormFields = {
  name: string;
  description: string;
  type: TaskType;
  emoji: string;
  days: {
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
      sunday: boolean;
  };
  time: string,
  dailyTime: string,
  dailyColor: Color,
  color: Color,
  date: string;
}