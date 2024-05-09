import Header from "../components/Header/Header";
import TaskList from "../components/TaskList/TaskList";
import './styles.scss'

const Layout: React.FC = () => {
  
  return (
    <>
      <div className="main-section">
        <Header />
        <div className="tasks-container">
          <TaskList />
        </div>
      </div>
    </>
  )

}

export default Layout;