import { useEffect, useState } from 'react'
import styles from './DashboardPage.module.scss'
import { auth, db } from '../../firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import Input from '../../components/Input'
import Sidebar from '../../components/Sidebar'

type Card = {
  id: string
  name: string
  age: string
  description: string
  userId: string
}

const DashBoardPage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
   const [count, setCount] = useState(0)
  const [description, setDescription] = useState('')
  const [cards, setCards] = useState<Card[]>([])
  const userId = auth.currentUser?.uid
  const { t } = useTranslation()

  const LoadUserCards = async () => {
    const q = query(collection(db, 'cards'), where('userId', '==', userId))
    const snapshot = await getDocs(q)
    const UserCards = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Card[]
    setCards(UserCards)
  }
  useEffect(() => {
    LoadUserCards()
  }, [userId])

useEffect(() => {
  const ref = collection(db, 'users')

  getDocs(ref)
    .then(snapshot => {
      console.log('users size:', snapshot.size)
      setCount(snapshot.size)
    })
    .catch(err => {
      console.error('Firestore error:', err)
    })
}, [])

  const handleAddCard = async () => {
    if (!name || !age || !description) return

    if (cards.length < 12) {
      await addDoc(collection(db, 'cards'), {
        name,
        age,
        description,
        userId
      })
    } else {
    }

    setName('')
    setAge('')
    setDescription('')
    LoadUserCards()
  }
 const metrics = [
  
    { id: 1, title: 'Всего прользователей', value: count }
   
  
  ]
  return (
    <div className={styles.DashBoardPage}>
      <div className={styles.Sidebar}>
    <Sidebar />
  </div>
     <div className={styles.mainContent}>
      <p className={styles.ExitBox}>
      
      
       
      </p>
      <div className={styles.topSection}>
      <div className="metrics">
  {metrics.map(m => (
    <div key={m.id} className="metrics__card">
      <div className="metrics__content">
        <p className="metrics__value">{m.value}</p>
      </div>
    </div>
  ))}
</div>
        <h2>{t('dashboard.mycards')}</h2>

        <div className={styles.form}>
          <Input
            className={styles.getName}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t('dashboard.name')}
          />
          <Input
            value={age}
            className={styles.getAge}
            onChange={e => setAge(e.target.value)}
            placeholder={t('dashboard.age')}
          />
          <Input
            value={description}
            className={styles.getDescription}
            onChange={e => setDescription(e.target.value)}
            placeholder={t('dashboard.description')}
          />
          <button onClick={handleAddCard}>{t('dashboard.addcard')}</button>
        </div>
      </div>
      <div className={styles.cards}>
        {cards.map(card => (
          <div key={card.id} className={styles.card}>
            <h3 className={styles.name}>{card.name}</h3>
            <p className={styles.age}>
              {t('dashboard.age')}: {card.age}
            </p>
            <p>{card.description}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default DashBoardPage
