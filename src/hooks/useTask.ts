import { useEffect, useState } from "react";

export const useTask = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [tasksLoaded, setTasksLoaded] = useState(false);

  useEffect(() => {
    const tasksString = localStorage.getItem('tasksList');
    if (tasksString !== null) {
      console.log('Tareas almacenadas', tasksString);
      setTasksList(JSON.parse(tasksString));
      setTasksLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (tasksLoaded) {
      localStorage.setItem('tasksList', JSON.stringify(tasksList))
    }
  }, [tasksList]);

  const addNewTask = (task: string) => {
    setTasksList(prevTasksList => {
      const newTask: Task = { id: prevTasksList.length + 1, text: task, completed: false };
      console.log("Tarea nueva: ", newTask);
      return [...prevTasksList, newTask];
    });
  }

  const completeTask = (taskId: number) => {
    setTasksList(prevTasksList => {
      const updatedTasksList = prevTasksList.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
      return updatedTasksList
    });
  }
  
  const deleteTask = (taskId: number) => {
    setTasksList(prevTasksList => {
      const updatedTasksList = prevTasksList.filter(task => task.id !== taskId);
      return updatedTasksList;
    });
  }

  return {
    tasksList,
    tasksLoaded,
    addNewTask,
    completeTask,
    deleteTask,
    setTasksList,
    setTasksLoaded
  }
}