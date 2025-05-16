import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import styles from './RegisterPage.module.scss'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ChangeTheme from '../components/ThemeButton'
const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)

      navigate('/dashboard')
    } catch (err) {
      setError('Регистрация не удалась.Попробуйте еще раз')
    }
  }
  return (
    <div className={styles.RegisterPage}>
      <p className={styles.ExitBox}>
        <ChangeTheme />
      </p>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleRegister}>
          <h2 className={styles.ExitBox}>registration</h2>
          <Input
            value={email}
            name='email'
            onChange={e => setEmail(e.target.value)}
            placeholder='email'
          />
          <Input
            value={password}
            name='password'
            onChange={e => setPassword(e.target.value)}
            placeholder='password'
          />
          {error && <p>{error}</p>}
          <Button type='submit' label='register' />
          <p>
            Do you have an account?<Link to='/'>CLick here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default RegisterPage
