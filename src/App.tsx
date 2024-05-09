import './App.scss'
import { TaskAppProvider } from './context/context'
import { useTask } from './hooks/useTask';
import Layout from './layout/Layout'

const App: React.FC = () => {

  const context = useTask();

  return (
    <TaskAppProvider value={context}>
      <Layout />
    </TaskAppProvider>
  )
}

export default App
