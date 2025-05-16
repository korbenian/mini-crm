import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashBoardPage from './pages/DashBoardPage'
import ProfilePage from './pages/ClientFormPage'
import EditProfile from './pages/EditProfile'

import './App.css'
import CreateProfile from './pages/GetDataProfile'
import ClientForm from './pages/ClientFormPage'

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
      </Routes>
    </>
  )
}

export default App
