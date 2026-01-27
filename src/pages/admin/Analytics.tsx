 import { useEffect, useState } from 'react'
 import { useTranslation } from 'react-i18next'
 import { collection, getDocs } from 'firebase/firestore'
 import { auth, db } from '../../firebase'
 import styles from './Analytics.module.scss'
 import Sidebar from '../../components/Sidebar'
 const Analytics =()=>{
      const { t } = useTranslation()
const [userCount, setUserCount] = useState(0)
  const [totalCards, setTotalCards] = useState(0)
  const [avgAge, setAvgAge] = useState(0)
const AdminMetrics=[  { id: 1, title: t('dashboardMetrics.totalUsers'), value: userCount },
    { id: 2, title: t('dashboardMetrics.totalCards'), value: totalCards },
    { id: 3, title: t('dashboardMetrics.avgAge'), value: avgAge },]
const LoadAdminmetrics= async ()=>{
    try{
        const usersSnap = await getDocs(collection(db, 'users'))
              setUserCount(usersSnap.size)
        
              const cardsSnap = await getDocs(collection(db, 'cards'))
              setTotalCards(cardsSnap.size)
        
              const ages = usersSnap.docs.map(doc => (doc.data() as any).age || 0)
              const avg = ages.length ? Math.round(ages.reduce((a, b) => a + b, 0) / ages.length) : 0
              setAvgAge(avg)
    }catch (err) {
      console.error('Firestore error:', err)
    }
}
useEffect(()=>{
    LoadAdminmetrics()
})
return(
     <div className={styles.DashBoardPage}>
          <div className={styles.Sidebar}>
            <Sidebar />
          </div>
    
          <div className={styles.mainContent}>
            <h1 className={styles.pageTitle}>{t('dashboardMetrics.title')}</h1>
    
            {/* Метрики */}
            <div className={styles.metrics}>
              {AdminMetrics.map(m => (
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
export default Analytics