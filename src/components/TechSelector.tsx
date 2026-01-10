import {
  doc,
  setDoc,
  arrayUnion,
  getDoc
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'

interface TechSelectorProps {
  onChange?: (techs: string[]) => void
}

const POPULAR_TECHS = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'Go',
  'Rust',
  'C++',
  'PHP',
  'Ruby'
]

export default function TechSelector ({ onChange }: TechSelectorProps) {
  const [selected, setSelected] = useState<string[]>([])
  const [isAddingCustom, setIsAddingCustom] = useState(false)
  const [customValue, setCustomValue] = useState('')

  const auth = getAuth()
  const user = auth.currentUser

  // 🔹 загрузка techStack из users/{uid}
  useEffect(() => {
    const loadTechStack = async () => {
      if (!user) return

      const userRef = doc(db, 'users', user.uid)
      const snap = await getDoc(userRef)

      if (snap.exists()) {
        const data = snap.data()
        if (data.techStack) {
          setSelected(data.techStack)
        }
      }
    }

    loadTechStack()
  }, [user])

  // 🔹 toggle технологии
  const toggleTech = async (tech: string) => {
    if (!user) return

    const newList = selected.includes(tech)
      ? selected.filter(t => t !== tech)
      : [...selected, tech]

    setSelected(newList)
    onChange?.(newList)

    const userRef = doc(db, 'users', user.uid)

    await setDoc(
      userRef,
      { techStack: newList },
      { merge: true }
    )
  }

  // 🔹 добавление кастомной технологии
  const addCustomTech = async () => {
    const tech = customValue.trim()
    if (!tech || !user) return

    if (!selected.includes(tech)) {
      setSelected(prev => [...prev, tech])
      onChange?.([...selected, tech])

      const userRef = doc(db, 'users', user.uid)

      await setDoc(
        userRef,
        { techStack: arrayUnion(tech) },
        { merge: true }
      )
    }

    setCustomValue('')
    setIsAddingCustom(false)
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {POPULAR_TECHS.map(tech => (
        <button
          key={tech}
          onClick={() => toggleTech(tech)}
          className={`px-3 py-1 rounded-full border cursor-pointer ${
            selected.includes(tech)
              ? 'bg-blue-600 text-white border-blue-600'
              : 'border-gray-400 text-gray-700'
          }`}
        >
          {tech}
        </button>
      ))}

      {!isAddingCustom && (
        <button
          onClick={() => setIsAddingCustom(true)}
          className='px-3 py-1 rounded-full border border-dashed border-gray-400 text-gray-500'
        >
          + Другая...
        </button>
      )}

      {isAddingCustom && (
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Введите технологию'
            value={customValue}
            onChange={e => setCustomValue(e.target.value)}
            className='px-2 py-1 border rounded'
          />
          <button
            onClick={addCustomTech}
            className='px-3 py-1 bg-green-600 text-white rounded'
          >
            Добавить
          </button>
        </div>
      )}
    </div>
  )
}
