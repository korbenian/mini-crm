import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import styles from './GetDataProfile.module.scss'
import { Link } from 'react-router-dom'
import ChangeTheme from '../components/ThemeButton'
import { useTranslation } from 'react-i18next'
type UserProfile = {
  name: string
  age: number
  about: string
}

const CreateProfile: React.FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<any>(null)
  const { t } = useTranslation()
  const [profileData, setProfileData] = useState<UserProfile>({
    name: '',
    age: 0,
    about: ''
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        setFirebaseUser(user)

        const q = query(collection(db, 'users'), where('uid', '==', user.uid))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          navigate('/ClientForm')
        }
      } else {
        setFirebaseUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [navigate])

  const handleSaveProfile = async () => {
    if (!firebaseUser) return

    try {
      const q = query(
        collection(db, 'users'),
        where('uid', '==', firebaseUser.uid)
      )
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        setError('Профиль уже существует')
        navigate('/ClientForm')
        return
      }

      await addDoc(collection(db, 'users'), {
        uid: firebaseUser.uid,
        name: profileData.name,
        age: profileData.age,
        about: profileData.about
      })
      console.log('Профиль создан')
      navigate('/ClientForm')
    } catch (err) {
      setError('Ошибка при создании профиля')
    }
  }

  if (loading) return <p>Загрузка...</p>
  if (!firebaseUser) return <p>Пожалуйста, войдите в систему</p>

  return (
    <div className={styles.wrapper}>
      <p className={styles.ExitBox}>
        <ChangeTheme />
        <Link className={styles.exit} to='/Dashboard'>
          {t('createprofile.exit')}
        </Link>
      </p>
      <div className={styles.create_account}>
        <h1 className={styles.title}>{t('createprofile.createprofile')}</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          className={styles.input}
          type='text'
          placeholder={t('createprofile.name')}
          value={profileData.name}
          onChange={e =>
            setProfileData({ ...profileData, name: e.target.value })
          }
        />
        <input
          className={styles.input}
          placeholder={t('createprofile.age')}
          value={profileData.age}
          onChange={e =>
            setProfileData({ ...profileData, age: +e.target.value })
          }
        />
        <textarea
          className={styles.textarea}
          placeholder={t('createprofile.description')}
          value={profileData.about}
          onChange={e =>
            setProfileData({ ...profileData, about: e.target.value })
          }
        />
        <button onClick={handleSaveProfile}>{t('createprofile.create')}</button>
      </div>
    </div>
  )
}

export default CreateProfile
