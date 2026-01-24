//C:\Users\User\mini-crm\src\pages\admin\cards.tsx
import { useEffect, useState } from 'react'
import { collection, onSnapshot, getDoc } from 'firebase/firestore'
import { db} from '../../firebase'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Task } from '../../types/task' 
import TaskEditing from '../Tasks/TaskEditing'
 import styles from './cards.module.scss'
import Sidebar from '../../components/Sidebar'
 const AllCards = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const { t } = useTranslation()

useEffect(() => {
  const unsub = onSnapshot(collection(db, 'cards'), async snap => {
    const tasks = await Promise.all(
      snap.docs.map(async d => {
        const task = { id: d.id, ...d.data() } as Task

        if (task.uid) {
          const userSnap = await getDoc(doc(db, 'users', task.uid))
          return {
            ...task,
            userName: userSnap.exists()
              ? userSnap.data().name
              : 'Unknown'
          }
        }

        return task
      })
    )

    setTasks(tasks)
  })

  return unsub
}, [])




  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'cards'), snap => {
      const data = snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      })) as Task[]

      setTasks(data)
    })

    return unsub
  }, [])

  const handleSave = async (id: string, title: string, deadline: string) => {
    await updateDoc(doc(db, 'cards', id), { title, deadline })
    setEditingId(null)
  }

  const removeTask = async (id: string) => {
    await deleteDoc(doc(db, 'cards', id))
  }

  return (
    <div>
    <Sidebar/>
     <p className={styles.cardsTitle}>All Cards</p>
      <div className={styles.taskList}>
    
       {tasks.map(task => (
        <div key={task.id} className={styles.taskCard}>
          <div className={styles.taskHeader}>
            <h2>{task.title || t('tasks.noTitle')}</h2>

            <select value={task.status} disabled>
              <option value="To Do">{t('tasks.status.todo')}</option>
              <option value="In Progress">{t('tasks.status.inProgress')}</option>
              <option value="Done">{t('tasks.status.done')}</option>
            </select>
          </div>

          <p className={styles.taskDeadline}>
            {t('tasks.deadline')}: {task.deadline || '—'}
<p className={styles.user}>
  👤 {task.userName || '—'}
</p>
          </p>

          <div className={styles.taskActions}>
            <button
              className={styles.delete}
              onClick={() => removeTask(task.id)}
            >
              {t('tasks.delete')}
            </button>

            <button
              className={styles.edit}
              onClick={() =>
                setEditingId(editingId === task.id ? null : task.id)
              }
            >
              {editingId === task.id
                ? t('tasks.close')
                : t('tasks.fill')}
            </button>
          </div>

          <AnimatePresence>
            {editingId === task.id && (
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
              >
                <TaskEditing task={task} onSave={handleSave} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
   </div> </div>
  )
}

export default AllCards