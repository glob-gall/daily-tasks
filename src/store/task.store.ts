import { Task, UpdateTaskDto } from '@/entity/Task/dto'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import compareDateToTaskDate from '@/utils/compareDateToTaskDate';
import checkTaskAvailability, { checkTaskWeekDay } from '@/utils/checkTaskAvailability';


type TodayTasks = {
  day?: Date
  tasks: Task[]
}

type State = {
  tasks: Task[]
  todayTasks: TodayTasks
}

type Action = {
  addTask: (task: Task) => void
  removeTask: (id:string) => void
  updateTask: (id:string, task: UpdateTaskDto) => void
  
  attTodaysTasks: () => void
  checkTodayTasks: (id:string) => void
}

// function addTask(state:<State & Action){

// }

const useTaskStore = create<State & Action>()(persist((set, get) => ({
  tasks: [],
  todayTasks: {
    tasks: [],
  },

  addTask: (task: Task) => set((state) => {
    const deepCopy:Task = JSON.parse((JSON.stringify(task)))
    const todayTasks = state.todayTasks.tasks

    if (checkTaskAvailability(deepCopy)) {
      todayTasks.push(deepCopy)
    }
    return { 
      tasks: [...state.tasks, task],
      todayTasks:{
        tasks: todayTasks
      }
    }
  }),

  removeTask: (id:string) => set((state) => {
    
    const filteredTasks = state.tasks.filter(t => t.id !== id)
    const filteredTodayTasks = state.todayTasks.tasks.filter(t => t.id !== id)
    return { 
      tasks: filteredTasks, 
      todayTasks:{
        tasks: filteredTodayTasks
      } 
    }
  }),

  updateTask: (id, task: UpdateTaskDto) => set((state) => {
    let todayTasks = state.todayTasks.tasks

    const updatedTasks = state.tasks.map(t => {
      if (t.id !== id) return t
      const updatedTask:Task = {
        type: task.type,
        id: t.id,
        checked: t.checked,
        emoji: task.emoji || t.emoji,
        name: task.name || t.name,
        description: task.description || t.description,
        color: task.color || t.color,
        date: task.date || t.date,
        days: task.days || t.days,
        time: task.time || t.time,
      }  

      if (task.type === 'daily') delete updatedTask.date
      if (task.type === 'event') delete updatedTask.days
      return updatedTask
    })

    
    const findedTodayTask = state.todayTasks.tasks.find(t => t.id === id)
    
    if (findedTodayTask) {
      if (!checkTaskWeekDay(task.days)) {
        todayTasks = todayTasks.filter( t => t.id !== findedTodayTask.id)
      }
    }

    return ({
      tasks: updatedTasks,
      todayTasks: {
        tasks: todayTasks
      }
    })
  }),

  attTodaysTasks: (day?: Date) => set((state) => {

    const todayTasks = state.tasks.filter(task => {
      const selectedDay = day || new Date()
      if (task.date) {
        return compareDateToTaskDate(selectedDay,task.date)
      }
      return checkTaskAvailability(task)
    })

    const deepCopy:Task[] = JSON.parse((JSON.stringify(todayTasks)))

    return {
      todayTasks: {
        day: new Date(),
        tasks: deepCopy
      }
    }
  }),

  checkTodayTasks: (id:string) => set((state) => {
    const updatedTasks = state.todayTasks.tasks.map( t => {
      if(t.id !== id) return t;
      t.checked = !t.checked  
      return t
    })

    return {
      todayTasks:{ tasks: updatedTasks }
    }
  }),

}),{
  name:'@Tasks:task-storage',
  storage: createJSONStorage(() => AsyncStorage),
}))

export default useTaskStore


// setChecked: (id: string) => void
// setChecked: (id: string) => set((state) => {
//   const updatedTasks = state.tasks.map( t => {
//       if(t.id !== id) return t;
//       t.checked = !t.checked  
//       return t
//     })
//   return { tasks: updatedTasks }
// }),