'use client'
import styles from './DashboardPage.module.scss'
import Sidebar from '../components/Sidebar'
import { Typewriter } from 'react-simple-typewriter'
import { useRenderProfile } from '../hooks/useProfile'
import { useDashboard } from '../hooks/useDashboard' 

export default function DashBoardPage() {
  const { profileData } = useRenderProfile()
  const { metrics, loading } = useDashboard()

  if (loading) return <div>Loading dashboard...</div>

  return (
    <div className={styles.DashBoardPage}>
      <div className={styles.Sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.wrapper_greeting}>
          <div className={styles.greeting}>
            Hello, {profileData?.name || 'friend'} 👋
            <Typewriter
              words={['Here is a quick overview of your work today']}
              typeSpeed={80}
            />
          </div>
        </div>

        <div className={styles.metrics}>
          <div className={styles.wrap_metricCard}>
            <div className={styles.metricCard}>
              <div className={styles.MyCard}>
                <span> My cards
                  <h1>{metrics.myCards}</h1>
                </span>
              </div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.DoneCard}>
                <span>Done Cards 
                  <h2>{metrics.doneCards}</h2>
                </span>
              </div>
            </div>
            
            <div className={styles.metricCard}>
              <h3>Progress</h3>
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
            <strong>Welcome back, {profileData?.name || 'friend'} 👋</strong>
            <p>You have {metrics.activeCards} active cards waiting for you</p>
          </div>
        </div>
      </div>
    </div>
  )
}