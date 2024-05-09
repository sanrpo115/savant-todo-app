import { useContext } from 'react';
import { Trash2 } from 'react-feather';
import { TaskAppContext } from '../../context/context';
import './styles.scss'

interface ItemTaskProps {
  task: Task;
}

const ItemTask: React.FC<ItemTaskProps> = ({ task }) => {

  const { completeTask, deleteTask } = useContext(TaskAppContext);

  const handleCompleteTask = (id: number) => {
    completeTask(id);
  }
  
  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  }

  return (
    <li className={`view ${task.completed ? 'completed' : ''}`}>
      <div className="view-content">
        <input
          className='toggle'
          type='checkbox'
          checked={task.completed}
          onChange={() => handleCompleteTask(task.id)}
        />
        <label>{task.text}</label>
      </div>
      <button
        type='button'
        className='destroy'
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash2 />
      </button>
    </li>
  )
}

export default ItemTask;