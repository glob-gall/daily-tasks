import { TaskDto } from '@/app/entity/Task/dto'
import { create } from 'zustand'

type State = {
  tasks: TaskDto[]
}
type Action = {
  addTask: (task: TaskDto) => void
  removeTask: (task: TaskDto) => void

}


const useTaskStore = create<State & Action>()((set) => ({
  tasks: [],

  addTask: (task: TaskDto) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),

  removeTask: (task: TaskDto) => set((state) => ({ 
    tasks: state.tasks.filter(t => t!== task) 
  })),

}))

export default useTaskStore