import './App.css'
import Header from './components/Header/Header'
import TableOptions from './components/TableOptions/TableOptions'
import UsersTable from './components/UsersTable/UsersTable'
import { UsersProvider } from './context/UsersContext'

function App() {
  return (
    <>
      <Header title="Пользователи" />
      <UsersProvider>
        <TableOptions/>
        <UsersTable />
      </UsersProvider>
      <footer className="footer">
      </footer>
    </>
  )
}

export default App
