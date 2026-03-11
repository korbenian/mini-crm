//C:\Users\User\mini-crm\app\[locale]\Tasks\TaskEditing.tsx
'use client'
import { useState } from 'react'
import Input from '../components/Input'
import { Task } from '../types/types'
import { useTranslations } from 'next-intl'
import styles from './TaskEdidting.module.scss'
import useTasks from '../hooks/useTasks'
type PropTask={
  utils:Task
}
export default function TaskEditing ({
  task,
  onSave, 
 
}:{
  task: Task
  onSave: (id: string, title: string, deadline: string) => void
  
} ) {
  const [title, setTitle] = useState(task.name)
  const [deadline, setDeadline] = useState(task.deadline)
const  t  = useTranslations()
const {removeTask}=useTasks()

  return (
  <div className={styles.container}>
    <div className={styles.inputGroup}>
      <Input
        type='text'
        placeholder={t('taskedit.titlePlaceholder')}
        value={title}
        onChange={e => setTitle(e.target.value)}
        className={styles.titleInput}
      />
    </div>

    <div className={styles.deadlineWrapper}>
      <label>
        {t('taskedit.deadline')}:
        <Input
          type='date'
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          className={styles.dateInput}
        />
      </label>
    </div>

    <div className={styles.actions}>
      <button
        onClick={() => onSave(task.id, title, deadline)}
        className={`${styles.btn} ${styles.save}`}
      >
        {t('taskedit.create')}
      </button> 

      <button
        className={`${styles.btn} ${styles.delete}`}
        onClick={async () => {
          await removeTask(task.id)
        }}
      >
        {t('taskedit.delete')}
      </button>
    </div>
  </div>
)
}
