import { useTranslation } from 'react-i18next'
import Sidebar from '../../components/Sidebar'
import AddTask from './addTasks'
import styles from './RenderTasks.module.scss'

export default function TaskPage() {
  const { t } = useTranslation()

  return (
    <div className='flex'>
      <Sidebar />

      <main className={styles.render}>
        <h1>{t('mainTasks.title')}</h1>
        <AddTask />
      </main>
    </div>
  )
}
