import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './DashboardPage.module.scss'
import { auth, db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Sidebar from '../../components/Sidebar'

const DashBoardPage = () => {
  const { t } = useTranslation()
  const [userCount, setUserCount] = useState(0)
  const [totalCards, setTotalCards] = useState(0)
  const [avgAge, setAvgAge] = useState(0)
  const [myCards, setMyCards] = useState(0)
  const userId = auth.currentUser?.uid

  const loadMetrics = async () => {
    try {
      const usersSnap = await getDocs(collection(db, 'users'))
      setUserCount(usersSnap.size)

      const cardsSnap = await getDocs(collection(db, 'cards'))
      setTotalCards(cardsSnap.size)

      const ages = usersSnap.docs.map(doc => (doc.data() as any).age || 0)
      const avg = ages.length ? Math.round(ages.reduce((a, b) => a + b, 0) / ages.length) : 0
      setAvgAge(avg)

      if (userId) {
        const myCardsSnap = cardsSnap.docs.filter(
          doc => (doc.data() as any).uid === userId
        )
        setMyCards(myCardsSnap.length)
      }
    } catch (err) {
      console.error('Firestore error:', err)
    }
  }

  useEffect(() => {
    loadMetrics()
  }, [userId])

  const metrics = [
    { id: 1, title: t('dashboardMetrics.totalUsers'), value: userCount },
    { id: 2, title: t('dashboardMetrics.totalCards'), value: totalCards },
    { id: 3, title: t('dashboardMetrics.avgAge'), value: avgAge },
    { id: 4, title: t('dashboardMetrics.myCards'), value: myCards }
  ]

  return (
    <div className={styles.DashBoardPage}>
      <div className={styles.Sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>{t('dashboardMetrics.title')}</h1>

        {/* Метрики */}
        <div className={styles.metrics}>
          {metrics.map(m => (
            <div key={m.id} className={styles.metricCard}>
              <h3 className={styles.metricTitle}>{m.title}</h3>
              <p className={styles.metricValue}>{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashBoardPage
