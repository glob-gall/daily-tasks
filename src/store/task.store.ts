import { Task } from '@/entity/Task/dto'
import { create } from 'zustand'

type State = {
  tasks: Task[]
}

type Action = {
  addTask: (task: Task) => void
  removeTask: (task: Task) => void
  setChecked: (id: string) => void
}

const useTaskStore = create<State & Action>()((set) => ({
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

}))

export default useTaskStore