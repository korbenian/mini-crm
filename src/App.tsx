import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import DashBoardPage from './pages/dashboard/DashBoardPage'
import EditProfile from './pages/EditProfile/EditProfile'
import ArticlesPage from './pages/Articles/Articles'
import './App.css'
import CreateProfile from './pages/GetDataProfile/GetDataProfile'
import ClientForm from './pages/ClientFormPage/ClientFormPage'
import ChatWithAI from './pages/ChatWithAI/ChatWithAI'
import TaskPage from './pages/Tasks/Tasks'
import TariffPlans from './pages/adminPlan/plans'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashBoardPage />} />
        <Route path='/ClientForm' element={<ClientForm />} />
        <Route path='/EditProfile' element={<EditProfile />} />
        <Route path='/CreateProfile' element={<CreateProfile />} />
         <Route path='/Articles' element={<ArticlesPage />} />
         <Route path='/ChatWithAI' element={<ChatWithAI />} />
          <Route path='/TaskPage' element={<TaskPage />} />
          <Route path='/TariffPlans' element={<TariffPlans />} />
      </Routes>
    </>
  )
}

export default App
