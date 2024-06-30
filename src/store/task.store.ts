import { Task } from '@/entity/Task/dto'
import { create } from 'zustand'

type State = {
  tasks: Task[]
}
type Action = {
  addTask: (task: Task) => void
  removeTask: (task: Task) => void
}

const useTaskStore = create<State & Action>()((set) => ({
  tasks: [],

  addTask: (task: Task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),

  removeTask: (task: Task) => set((state) => ({ 
    tasks: state.tasks.filter(t => t!== task) 
  })),

}))

export default useTaskStore