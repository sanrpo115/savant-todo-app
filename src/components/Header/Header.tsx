import { format } from 'date-fns';
import { es } from 'date-fns/locale'
import Input from '../Input/Input';
import './styles.scss'

const Header: React.FC = () => {

  const currentDate: Date = new Date();
  const formattedDate: string = format(currentDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })

  return (
    <header>
      <div className="date">
        {formattedDate}
      </div>
      <Input />
    </header>
  )

}

export default Header;