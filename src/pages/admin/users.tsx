import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, onSnapshot} from 'firebase/firestore'
import styles from './users.module.scss'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../components/Sidebar'

type UserProfile = {
  name: string
  age: number
  id:string,
  about: string
  avatarUrl?: string
  techStack?: string[]
}


const AllUsers: React.FC = () => {

const [users, setUsers] = useState<UserProfile[]>([])
const [loading, setLoading] = useState(true)
  const { t } = useTranslation()
  useEffect(() => {
  const usersRef = collection(db, 'users')

  const unsubscribe = onSnapshot(usersRef, snapshot => {
    const usersList: UserProfile[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<UserProfile, 'id'>)
    }))

    setUsers(usersList)
    setLoading(false)
  })

  return () => unsubscribe()
}, [])

 

  if (loading) return <p>{t('loading.loadingdata')}</p>

return (
  <div className={styles.wrapper}>
    <Sidebar />
   
       <p className={styles.usersTitle}>All Users</p>
    <div className={styles.main}> 

      {users.map(user => (
        <div key={user.id} className={styles.dataUser}>
          <img
            src={user.avatarUrl ?? '/default-avatar.png'}
            alt="avatar"
            className={styles.avatar}
          />

          <p><strong>{t('profile.name')}:</strong> {user.name}</p>
          <p><strong>{t('profile.age')}:</strong> {user.age}</p>
          <p><strong>{t('profile.aboutuser')}:</strong> {user.about}</p>

          {user.techStack?.length && (
            <span className={styles.techText}>
              {t('technologies')}: {user.techStack.join(', ')}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
)

}

export default AllUsers
