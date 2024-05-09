import { useContext, useState } from 'react';
import { TaskAppContext } from '../../context/context';
import './styles.scss'

const Input: React.FC = () => {

  const [newTask, setNewTask] = useState("");
  const { addNewTask } = useContext(TaskAppContext);

  const handleOnClick = () => {
    if (newTask.length > 0) {
      addNewTask(newTask.trim());
      setNewTask(""); 
    }
  }

  return (
    <>
      <div className="add-task">
        <button className="btn btn-primary" onClick={handleOnClick}>
          <span className="btn-primary__icon"></span>
          Agregar
        </button>
        <input 
          type="text" 
          placeholder="Agrega una nueva tarea" 
          className="input-text"
          autoFocus
          autoComplete="off"
          value={newTask}
          onChange={(e:any) => {
            setNewTask(e.target.value);
          }}
        />
      </div>
    </>
  )
}

export default Input;