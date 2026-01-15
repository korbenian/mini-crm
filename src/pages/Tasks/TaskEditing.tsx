// C:\Users\01\training\src\app\pages\TaskEditing.tsx

import { db } from '../../firebase'
import { useState } from 'react'
import Input from '../../components/Input'
import { doc, updateDoc,addDoc,collection ,deleteDoc,onSnapshot} from 'firebase/firestore'
import { Task } from '../../types/task'
import { useTranslation } from 'react-i18next'

export default function TaskEditing ({
  task,
  onSave
}: {
  task: Task
  onSave: (id: string, title: string, deadline: string) => void
}) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState(task.title)
  const [deadline, setDeadline] = useState(task.deadline)
const { t } = useTranslation()
const removeTask = async (id: string) => {
    console.log('[TaskContext] removeTask called id=', id)
    try {
      const ref = doc(db, 'cards', id)
      await deleteDoc(ref)
      console.log('[TaskContext] deleteDoc resolved for id=', id)

      setTasks(tasks.filter(task => task.id !== id))
    } catch (err) {
      console.error('[TaskContext] delete error:', err)
    }
  }
  const handleAddTask = async () => {
    await onSave(task.id, title, deadline)
  }

  return (
  <div>
    <div className='flex items-center gap-3'>
      <Input
        type='text'
        placeholder={t('taskedit.titlePlaceholder')}
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='w-96'
      />
    </div>

    <div className='mt-2'>
      <label className='text-sm text-gray-600'>
        {t('taskedit.deadline')}:
        <Input
          type='date'
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          className='ml-2 w-40'
        />
      </label>
    </div>

    <div className='flex gap-2'>
      <button
        onClick={handleAddTask}
        className='mt-2 px-3 py-1 bg-green-600 text-white rounded-lg'
      >
        {t('taskedit.create')}
      </button>

      <button
        className='mt-2 px-3 py-1 bg-red-600 text-white rounded-lg'
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
