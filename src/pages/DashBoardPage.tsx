import { useEffect, useState } from 'react'
import styles from './DashboardPage.module.scss'
import { auth, db } from '../firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Input from '../components/Input'
import Button from '../components/Button'
import ChangeTheme from '../components/ThemeButton'
import ChangeLanguage from '../components/ChangeLanguage'

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

  return (
    <div className={styles.DashBoardPage}>
      <p className={styles.ExitBox}>
        <Link className={styles.exit} to='/'>
          {t('dashboard.exit')}
        </Link>
        <Link className={styles.CreateProfile} to='/CreateProfile'>
          {t('dashboard.account')}
        </Link>
        <ChangeTheme />
        <ChangeLanguage />
      </p>
      <div className={styles.topSection}>
        <h2>{t('dashboard.mycards')}</h2>

        <div className={styles.form}>
          <input
            className={styles.getName}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t('dashboard.name')}
          />
          <input
            value={age}
            className={styles.getAge}
            onChange={e => setAge(e.target.value)}
            placeholder={t('dashboard.age')}
          />
          <input
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
  )
}

export default DashBoardPage
