import { Task, UpdateTaskDto } from '@/entity/Task/dto'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';



type State = {
  tasks: Task[]
}

type Action = {
  addTask: (task: Task) => void
  removeTask: (task: Task) => void
  updateTask: (id:string, task: UpdateTaskDto) => void
  setChecked: (id: string) => void
}

const useTaskStore = create<State & Action>()(persist((set) => ({
  tasks: [],

  addTask: (task: Task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),

  removeTask: (task: Task) => set((state) => ({ 
    tasks: state.tasks.filter(t => t !== task) 
  })),

  updateTask: (id, task: UpdateTaskDto) => set((state) => {
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
    return ({
      tasks: updatedTasks
    })
  }),
  setChecked: (id: string) => set((state) => {
    const updatedTasks = state.tasks.map( t => {
        if(t.id !== id) return t;
        t.checked = !t.checked  
        return t
      })
    return { tasks: updatedTasks }
  }),

}),{
  name:'@Tasks:task-storage',
  storage: createJSONStorage(() => AsyncStorage),
}))

export default useTaskStore