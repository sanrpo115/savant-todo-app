import { createContext } from "react";

const initContext = {
  tasksList: [],
  tasksLoaded: false,
  addNewTask: () => {},
  completeTask: () => {},
  deleteTask: () => {},
  setTasksList: () => {},
  setTasksLoaded: () => {}
}

interface TaskApp {
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>
  setTasksLoaded: React.Dispatch<React.SetStateAction<boolean>>
  addNewTask: (t: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
  tasksList: Array<Task>;
  tasksLoaded: boolean; 
}

export const TaskAppContext = createContext<TaskApp>(initContext);
export const TaskAppProvider = TaskAppContext.Provider;