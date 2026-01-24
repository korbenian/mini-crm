import React, { useState, useEffect } from 'react'
import styles from './EditProfile.module.scss'
import { auth, db } from '../../firebase'
import { Link } from 'react-router-dom'
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
type UserProfile = {
  name: string
  age: number
  about: string
}

const EditProfile: React.FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<any>(null)
  const [docId, setDocId] = useState<string>('')
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
          const SnapData = querySnapshot.docs[0]
          setDocId(SnapData.id)
          setProfileData(SnapData.data() as UserProfile)
        }
      } else {
        setFirebaseUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleSaveProfile = async () => {
    if (!firebaseUser || !docId) return
    try {
      await updateDoc(doc(db, 'users', docId), {
        name: profileData.name,
        age: profileData.age,
        about: profileData.about
      })
      console.log('Профиль обновлён')
      navigate('/ClientForm')
    } catch (err) {
      setError('Ошибка при обновлении профиля')
    }
  }

  if (loading) return <p>{t('loading.loading')}</p>
  if (!firebaseUser) return <p>Пожалуйста, войдите в систему</p>

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('edit.edit')}</h1>
      {error && <p className={styles.error}>{error}</p>}

      <input
        className={styles.input}
        type='text'
        placeholder={t('edit.name')}
        value={profileData.name}
        onChange={e => setProfileData({ ...profileData, name: e.target.value })}
      />
      <input
        className={styles.input}
        type='number'
        placeholder='Возраст'
        value={profileData.age}
        onChange={e => setProfileData({ ...profileData, age: +e.target.value })}
      />
      <textarea
        className={styles.textarea}
        placeholder={t('edit.aboutuser')}
        value={profileData.about}
        onChange={e =>
          setProfileData({ ...profileData, about: e.target.value })
        }
      />
      <button className={styles.button} onClick={handleSaveProfile}>
        {t('edit.save')}
      </button>
      <Link to='/ClientForm'>{t('edit.exit')}</Link>
    </div>
  )
}

export default EditProfile
