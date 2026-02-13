import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { useUserStore } from '../../store/userStore'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, User } from 'firebase/auth'
import {getDoc,doc} from 'firebase/firestore'
import styles from './ClientFormPage.module.scss'
import TechSelector from '../../components/TechSelector'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../components/Sidebar'

export type UserProfile = {
  name: string
  age: number
  about: string
  avatarUrl?: string
  techStack?: string[]
}


const ClientForm: React.FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null)
    const [techStack, setTechStack] = useState<string[]>([])
     const [showTech, setShowTech] = useState(false)
  const [profileData, setProfileData] = useState<UserProfile | null>(null)
  const { t } = useTranslation()
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async user => {
    if (!user) {
      setFirebaseUser(null)
      setProfileData(null)
      return
    }

    setFirebaseUser(user)

    const userRef = doc(db, 'users', user.uid)
    const snap = await getDoc(userRef)
    if (snap.exists()) {
  const data = snap.data() as UserProfile
  setProfileData(data)
const { setUser } = useUserStore.getState();
setUser({
  uid:user.uid,
  email:user.email,
  name:data.name
})

  if (data.techStack) {
    setTechStack(data.techStack)
  }
} else {
      console.log('Профиль не найден')
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
     <div className={styles.Sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.options}>
          
       
           <div className={styles.dataUser}>
  <h1>{t('profile.profile')}</h1>

  <img
    src={profileData.avatarUrl ?? '/default-avatar.png'}
    alt="avatar"
    className={styles.avatar}
  />

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
  </p>    <span className={styles.techText}>
    {t('profile.technologies')} : {techStack.join(', ')}
  </span>
  <p className={styles.techList + ' ' + (!showTech ? styles.hidden : '')}>
  <TechSelector onChange={list => setTechStack(list)} />

</p>

<button
  className={styles.techToggleButton}
  onClick={() => setShowTech(prev => !prev)}
>
  {showTech ? t('hideTech') : t('addTech')}
</button>
<Link className={styles.tariffs} to="/TariffPlans">{t('tariff.plans')}</Link>
<Link className={styles.options_first} to='/EditProfile'>
            {t('profile.edit')}
          </Link>
</div>

        
      </div>
    
        </div>
</div>

    
  )
}

export default ClientForm
