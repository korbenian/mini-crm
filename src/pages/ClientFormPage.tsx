import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, User } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import styles from './ClientFormPage.module.scss'
import ThemeButton from '../components/ThemeButton'
import { useTranslation } from 'react-i18next'
type UserProfile = {
  name: string
  age: number
  about: string
}

const ClientForm: React.FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null)
  const [profileData, setProfileData] = useState<UserProfile | null>(null)
  const { t } = useTranslation()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        setFirebaseUser(user)

        const q = query(collection(db, 'users'), where('uid', '==', user.uid))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          setProfileData(querySnapshot.docs[0].data() as UserProfile)
        } else {
          console.log('Профиль не найден')
        }
      } else {
        setFirebaseUser(null)
        setProfileData(null)
      }
    })

    return () => unsubscribe()
  }, [])

  if (!firebaseUser) {
    return <p>Вы не вошли в систему</p>
  }

  if (!profileData) {
    return <p>{t('loading.loadingdata')}</p>
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.options}>
          <Link className={styles.options_first} to='/EditProfile'>
            {t('profile.edit')}
          </Link>
          <Link className={styles.options_second} to='/DashBoard'>
            {t('profile.exit')}
          </Link>
          <ThemeButton />
        </p>
      </div>
      <div className={styles.dataUser}>
        <h1>{t('profile.profile')}</h1>
        <p>
          <strong>{t('profile.email')}:</strong> {firebaseUser.email}
        </p>
        <p>
          <strong>{t('profile.name')}:</strong> {profileData.name}
        </p>
        <p>
          <strong>{t('profile.age')}:</strong> {profileData.age}
        </p>
        <p>
          <strong>{t('profile.aboutuser')}:</strong> {profileData.about}
        </p>
      </div>
    </div>
  )
}

export default ClientForm
