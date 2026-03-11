'use client'
//C:\Users\User\mini-crm\app\[locale]\Tasks\addTasks.tsx
import { useEffect, useState } from 'react'
import TaskView from './TaskView'
import { useTranslations } from 'next-intl'
import { Task } from '../types/types'
import styles from './tasks.module.scss' 
import Sidebar from '../components/Sidebar'
import { supabase } from '@/utils/supabase'

export default function AddTask() {
  const [tasks, setTasks] = useState<Task[]>([])
  const  t  = useTranslations()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
 const fetchTasks = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error("Ошибка загрузки:", error)
    } else {
      setTasks(data as unknown as Task[]) // ВОТ ЭТОГО НЕ ХВАТАЛО!
    }
  }
  useEffect(()=>{
  fetchTasks()},[])
  
const handleNewTask = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  const tempId = crypto.randomUUID() 
const newTaskPlaceholder: Task = {
    id: tempId,
    name: '',
    status: 'To Do',
    user_id: user.id,
    description: '',
    deadline: '', 
    isDone: false,   
    created_at: new Date().toISOString()
  }


  setTasks(prev => [newTaskPlaceholder, ...prev])


  const { data, error } = await supabase
    .from('leads')
    .insert([{ name: '', status: 'To Do', user_id: user.id, description: '' }])
    .select()
    .single()

  if (error) {
    console.error("Ошибка при сохранении:", error)
 
    setTasks(prev => prev.filter(t => t.id !== tempId))
    alert("Ошибка связи с сервером. Попробуй еще раз.")
  } else {
    setTasks(prev => prev.map(t => t.id === tempId ? data : t))
  }
}

  const filteredTasks = tasks.filter(task => {
    const matchesTitle = (task.name || '').toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'All' || task.status === statusFilter
    return matchesTitle && matchesStatus
  })



  return (
  <div className={styles.addTaskPage}>
    <Sidebar/>
    <div className={styles.wrapper}>
    <div className={styles.filters}>
      <input
        type="text"
        placeholder={t('addtask.search')}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={e => setStatusFilter(e.target.value)}
      >
        <option value="All">{t('addtask.filter.all')}</option>
        <option value="To Do">🔴 {t('addtask.status.todo')}</option>
        <option value="In Progress">🟡 {t('addtask.status.inProgress')}</option>
        <option value="Done">✅ {t('addtask.status.done')}</option>
      </select>
    </div>

    <button className={styles.addButton} onClick={handleNewTask}>
      +
    </button>

    <div className={styles.taskList}>
      {filteredTasks.map(task => (
        <TaskView key={task.id} task={task} />
      ))}
    </div></div>
  </div>
)
}
