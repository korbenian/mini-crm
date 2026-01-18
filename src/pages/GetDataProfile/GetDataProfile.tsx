import React, { useState, useEffect } from 'react'
import { auth, db } from '../../firebase'
import { collection, query, where, getDocs, addDoc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged ,User} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import styles from './GetDataProfile.module.scss'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

import { Link } from 'react-router-dom'
import ChangeTheme from '../../components/ThemeButton'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/ChangeLanguage'
type UserProfile = {
  name: string
  age: number
  about: string
  role: 'admin' | 'user',
  avatarUrl?: string;
}

const CreateProfile: React.FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null)
  const { t } = useTranslation()
  const [profileData, setProfileData] = useState<UserProfile>({
    name: '',
    age: 0,
    about: '',
    role: 'user'
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
): Promise<void> => {
  const file = e.target.files?.[0];
  if (!file) return;

  const user = auth.currentUser;
  if (!user) return;

  const avatarRef = ref(storage, `avatars/${user.uid}`);
  await uploadBytes(avatarRef, file);

  const url = await getDownloadURL(avatarRef);

  await updateDoc(doc(db, "users", user.uid), {
    avatarUrl: url,
  });
};


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
  role:profileData.role
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
      <p className={styles.ExitBox}>
        <Link className={styles.exit} to='/Dashboard'>
          {t('createprofile.exit')}
        </Link>
        <ChangeTheme />
        <LanguageSwitcher/>
        
      </p>
      <div className={styles.create_account}>
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
        <button onClick={handleSaveProfile}>{t('createprofile.create')}</button>
      </div>
    </div>
  )
}

export default CreateProfile
