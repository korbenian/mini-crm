'use client'
import styles from './DashboardPage.module.scss'
import Sidebar from '../components/Sidebar'
import { Typewriter } from 'react-simple-typewriter'
import { useRenderProfile } from '../hooks/useProfile'
import { useDashboard } from '../hooks/useDashboard' 
import { useTranslations } from 'next-intl'

export default function DashBoardPage() {
  const { profileData } = useRenderProfile()
  const { metrics, loading } = useDashboard()
const t =useTranslations()
  if (loading) return <div>{t('loading.loading')}</div>

  return (
  <div className={styles.DashBoardPage}>
    <div className={styles.Sidebar}>
      <Sidebar />
    </div>

    <div className={styles.mainContent}>
      <div className={styles.wrapper_greeting}>
        <div className={styles.greeting}>
          {t('dashboard.welcome')}, {profileData?.name || t('dashboard.friend')} 
          <Typewriter
            words={[t('dashboard.overview')]}
            typeSpeed={80}
          />
        </div>
      </div>

      <div className={styles.metrics}>
        <div className={styles.wrap_metricCard}>
          <div className={styles.metricCard}>
            <div className={styles.MyCard}>
              <span> 
                {t('dashboard.my_cards')}
                <h1>{metrics.myCards}</h1>
              </span>
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.DoneCard}>
              <span>
                {t('dashboard.done_cards')}
                <h2>{metrics.doneCards}</h2>
              </span>
            </div>
          </div>
          
          <div className={styles.metricCard}>
            <h3>{t('dashboard.progress')}</h3>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${metrics.progress}%`,
                  background: metrics.progress === 100 ? '#22c55e' : metrics.progress > 50 ? '#3b82f6' : '#f59e0b'
                }}
              />
            </div>
            <p>{metrics.progress}%</p>
          </div>
        </div>

        <div className={styles.hellowindow}>
          <strong>{t('dashboard.welcome_back')}, {profileData?.name || t('dashboard.friend')} 👋</strong>
          <p>
            {t('dashboard.active_cards_msg', { activeCards: metrics.activeCards })}
          </p>
        </div>
      </div>
    </div>
  </div>
)
}