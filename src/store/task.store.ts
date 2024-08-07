import { Task, UpdateTaskDto } from "@/entity/Task/dto";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import compareDateToTaskDate from "@/utils/compareDateToTaskDate";
import checkTaskAvailability from "@/utils/checkTaskAvailability";
import deepCopy from "@/utils/deepCopy";
import areSameDay from "@/utils/areSameDay";
import { compareTask } from "@/utils/taskTimeToNumber";

type State = {
  tasks: Task[];
  todayTasks: Task[];
  currentDay?: Date;
};

type Action = {
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, task: UpdateTaskDto) => void;

  attTodaysTasks: () => void;
  checkTodayTasks: (id: string) => void;
};

function updateTaskFields(task: Task, newData: UpdateTaskDto): Task {
  const updatedTask: Task = {
    type: newData.type,
    id: task.id,
    checked: task.checked,
    emoji: newData.emoji || task.emoji,
    name: newData.name || task.name,
    description: newData.description,
    color: newData.color || task.color,
    date: newData.date || task.date,
    days: newData.days || task.days,
    time: newData.time,
  };
  if (newData.type === "daily") delete updatedTask.date;
  if (newData.type === "event") delete updatedTask.days;
  return updatedTask;
}

function updateTaskArray(tasks: Task[], newData: UpdateTaskDto): Task[] {
  return tasks.map((t) =>
    t.id !== newData.id ? t : updateTaskFields(t, newData),
  );
}

const useTaskStore = create<State & Action>()(
  persist(
    (set) => ({
      tasks: [],
      todayTasks: [],
      currentDay: undefined,

      addTask: (task: Task) =>
        set((state) => {
          const isAvailable = checkTaskAvailability(task);
          const todayTasks = deepCopy(state.todayTasks);
          let attTodaysTask = isAvailable ? [...todayTasks, task] : todayTasks;

          attTodaysTask = attTodaysTask.sort((a, b) => compareTask(a, b));

          return {
            tasks: [...state.tasks, task],
            todayTasks: attTodaysTask,
          };
        }),

      removeTask: (id: string) =>
        set((state) => {
          const filteredTasks = state.tasks.filter((t) => t.id !== id);
          const filteredTodayTasks = state.todayTasks.filter(
            (t) => t.id !== id,
          );
          return {
            tasks: filteredTasks,
            todayTasks: filteredTodayTasks,
          };
        }),

      updateTask: (id, newData: UpdateTaskDto) =>
        set((state) => {
          newData.id = id;
          const updatedTasks = updateTaskArray(state.tasks, newData);

          let updatedTodayTasks = deepCopy(state.todayTasks);
          updatedTodayTasks = updateTaskArray(updatedTodayTasks, newData);

          let todayTask = updatedTodayTasks.find((t) => t.id === id);

          const taskToToday = updatedTasks.find((t) => t.id === id);
          if (!todayTask) {
            if (taskToToday && checkTaskAvailability(taskToToday)) {
              updatedTodayTasks = [...updatedTodayTasks, taskToToday];
            }
          } else if (todayTask && !checkTaskAvailability(todayTask)) {
            updatedTodayTasks = updatedTodayTasks.filter((t) => t.id !== id);
          }
          updatedTodayTasks = updatedTodayTasks.sort((a, b) =>
            compareTask(a, b),
          );

          return {
            tasks: updatedTasks,
            todayTasks: updatedTodayTasks,
          };
        }),

      attTodaysTasks: (day?: Date) =>
        set((state) => {
          const today = day || new Date();
          let attCheck = true;
          if (state.currentDay) {
            attCheck = !areSameDay(state.currentDay, today);
          }

          const todayTasks = state.tasks.filter((task) => {
            if (task.type === "event" && task.date) {
              return compareDateToTaskDate(today, task.date);
            }
            return checkTaskAvailability(task);
          });

          let copy = deepCopy(todayTasks);
          copy = copy.map((t) => {
            const todayTask = state.todayTasks.find(
              (stateTask) => stateTask.id === t.id,
            );
            if (todayTask) {
              t.checked = todayTask.checked;
            }
            return t;
          });

          copy = copy.sort((a, b) => compareTask(a, b));

          if (attCheck) {
            copy = copy.map((t) => ({ ...t, checked: false }));
          }
          return {
            currentDay: today,
            todayTasks: copy,
          };
        }),

      checkTodayTasks: (id: string) =>
        set((state) => {
          const updatedTasks = state.todayTasks.map((t) => {
            if (t.id !== id) return t;
            t.checked = !t.checked;
            return t;
          });

          return {
            todayTasks: updatedTasks,
          };
        }),
    }),
    {
      name: "@Tasks:task-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useTaskStore;
