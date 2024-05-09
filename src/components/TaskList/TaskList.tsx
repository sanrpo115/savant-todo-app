import { useContext } from "react";
import { TaskAppContext } from "../../context/context";
import Empty from "../Empty/Empty";
import ItemTask from "../ItemTask/ItemTask";
import './styles.scss'

const TaskList: React.FC = () => {

  const { tasksList } = useContext(TaskAppContext);

  return (
    <>
      <h1>Lista de tareas:</h1>
      {tasksList && tasksList.length !== 0 ? (
        <ul>
          {tasksList.map((t:Task) => (
            <ItemTask 
              key={t.id}
              task={t}
            />
          ))} 
        </ul>
        ) : <Empty />
      }
      <h4 className="counter">{tasksList.length} tareas restantes</h4>
    </>
  )
}

export default TaskList;