import React, { useState, useEffect } from 'react'
import { auth, db } from '../../firebase'
import { collection, query, where, getDocs, setDoc, serverTimestamp } from 'firebase/firestore'
import { onAuthStateChanged ,User} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import styles from './GetDataProfile.module.scss'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc} from "firebase/firestore";
import { useTranslation } from 'react-i18next'
import Sidebar from '../../components/Sidebar'
export type UserProfile = {
  name: string
  age: number
  about: string
  role: 'admin' | 'user',
  avatarUrl?: string;
  
}

const CreateProfile: React.FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null)
  const { t } = useTranslation()
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
const [avatarLoading, setAvatarLoading] = useState(false)
  const [profileData, setProfileData] = useState<UserProfile>({
    name: '',
    age: 0,
    about: '',
    role: 'user',
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



const storage = getStorage();

const handleAvatarChange = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0]
  if (!file) return

  const user = auth.currentUser
  if (!user) return

  try {
    setAvatarLoading(true)

    const avatarRef = ref(storage, `avatars/${user.uid}`)
    await uploadBytes(avatarRef, file)

    const url = await getDownloadURL(avatarRef)
    setAvatarUrl(url)

    console.log('AVATAR UPLOADED:', url)
  } catch (err) {
    console.error('AVATAR ERROR:', err)
    alert('Ошибка загрузки аватара')
  } finally {
    setAvatarLoading(false)
  }
}





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

      await setDoc(doc(db, "users", firebaseUser.uid), {
 uid: firebaseUser.uid,
  name: profileData.name,
  age: profileData.age,
  about: profileData.about,
    avatarUrl: avatarUrl,
  role: profileData.role,
  createdAt: serverTimestamp() 
});
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
     <Sidebar/>
      <div className={styles.create_account}>
        <div className={styles.true_reg}>
        <h1 className={styles.title}>{t('createprofile.createprofile')}</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {firebaseUser && (
  <input
    type="file"
    accept="image/*"
    onChange={handleAvatarChange}
  />
)}


        <Input
          className={styles.input}
          type='text'
          placeholder={t('createprofile.name')}
          value={profileData.name}
          onChange={e =>
            setProfileData({ ...profileData, name: e.target.value })
          }
        />
        <Input
          className={styles.input}
          placeholder={t('createprofile.age')}
          value={profileData.age}
          onChange={e =>
            setProfileData({ ...profileData, age: +e.target.value })
          }
        />
        <Input
          className={styles.textarea}
          placeholder={t('createprofile.description')}
          value={profileData.about}
          onChange={e =>
            setProfileData({ ...profileData, about: e.target.value })
          }
        />
     <button
  onClick={handleSaveProfile}
  disabled={avatarLoading}
>
  {avatarLoading ? 'Загрузка аватара...' : t('createprofile.create')}
</button>
      </div></div>
    </div>
  )
}

export default CreateProfile
