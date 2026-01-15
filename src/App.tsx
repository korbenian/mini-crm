import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashBoardPage from './pages/DashBoardPage'
import ProfilePage from './pages/ClientFormPage'
import EditProfile from './pages/EditProfile'
import ArticlesPage from './pages/Articles'
import './App.css'
import CreateProfile from './pages/GetDataProfile'
import ClientForm from './pages/ClientFormPage'
import ChatWithAI from './pages/ChatWithAI'
import TaskPage from './pages/Tasks/Tasks'

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
      </Routes>
    </>
  )
}

export default App
