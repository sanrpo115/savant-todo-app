import Image from './../../assets/img/empty.png';
import './styles.scss'

const Empty: React.FC = () => {

  return (
    <>
      <div className="img-content">
        <img src={Image} alt="No hay tareas disponibles" />
      </div>
    </>
  )
}

export default Empty;
