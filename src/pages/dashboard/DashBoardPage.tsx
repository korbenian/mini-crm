import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './DashboardPage.module.scss'
import { auth, db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Sidebar from '../../components/Sidebar'
import { Typewriter } from 'react-simple-typewriter'
import { useUserStore } from '../../store/userStore'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DashBoardPage = () => {
  const { t } = useTranslation()
  const user = useUserStore(state => state.user)
const navigate = useNavigate()
  const userId = auth.currentUser?.uid

  const [myCards, setMyCards] = useState(0)
  const [doneCards, setDoneCards] = useState(0)

  const loadMetrics = async () => {
    if (!userId) return

    try {
      const allCardsQuery = query(
        collection(db, 'cards'),
        where('uid', '==', userId)
      )

      const doneCardsQuery = query(
        collection(db, 'cards'),
        where('uid', '==', userId),
        where('status', '==', 'Done')
      )

      const [allSnap, doneSnap] = await Promise.all([
        getDocs(allCardsQuery),
        getDocs(doneCardsQuery)
      ])

      setMyCards(allSnap.size)
      setDoneCards(doneSnap.size)

    } catch (err) {
      console.error('Firestore error:', err)
    }
  }

  useEffect(() => {
    loadMetrics()
  }, [userId])

  const activeCards = myCards - doneCards
const progress= 0?0:Math.round((doneCards/myCards)*100)
  return (
    <div className={styles.DashBoardPage}>
      <div className={styles.Sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>
          {t('dashboardMetrics.title')}
        </h1>

        <div className={styles.wrapper_greeting}>
          <div className={styles.greeting}>
            <Typewriter
              words={[`Hello, ${user?.name || 'there'} 👋`]}
              typeSpeed={80}
            />
            <Typewriter
              words={['Here is a quick overview of your work today']}
              typeSpeed={80}
            />
          </div>
        </div>

        <div className={styles.metrics}>
          <div className={styles.wrap_metricCard}>
          <div className={styles.metricCard}>
            <h3>{t('dashboardMetrics.myCards')}</h3>
            <p>{myCards}</p>
          </div>

          <div className={styles.metricCard}>
            <h3>{t('dashboardMetrics.doneCards')}</h3>
            <p>{doneCards}</p></div>
            <div className={styles.metricCard}>
  <h3>Progress</h3>

  <div className={styles.progressBar}>
    <div
     className={styles.progressFill}
  style={{
    width: `${progress}%`,
    background:
      progress === 100
        ? '#22c55e'
        : progress > 50
        ? '#3b82f6'
        : '#f59e0b'
  }}
    />
  </div>

  <p>{progress}%</p>
</div>
          
</div>
        
        
           
         <div  className={styles.hellowindow}  onClick={() => navigate('/TaskPage')}>
            <strong>
              Welcome back, {user?.name || 'friend'} 👋
            </strong>
            <p>
              You have {activeCards} active cards waiting for you
            </p>
          </div>
          
         
    
        </div>
       
      </div>
    </div>
  )
}

export default DashBoardPage
