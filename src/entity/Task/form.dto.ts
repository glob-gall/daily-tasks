import { Color, TaskType } from "./dto";



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

export const defaultTaskFormValues: TaskFormFields = {
  name: "",
  description: "",
  type:"event",
  emoji: "😎",
  days:{
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
    sunday:false,
  },
  time: "",
  dailyTime: "",
  dailyColor: {"color": "white", "label": "Branco"},
  color: {"color": "white", "label": "Branco"},
  date:''
}