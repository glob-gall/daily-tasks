import { Task } from '@/entity/Task/dto'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';



type State = {
  tasks: Task[]
}

type Action = {
  addTask: (task: Task) => void
  removeTask: (task: Task) => void
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