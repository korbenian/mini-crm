import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabase'
import { Task } from '../types/types'

export function useAllCards() {
  const [cards, setCards] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCards = async () => {
    setLoading(true)
    
    const { data, error: supabaseError } = await supabase
      .from('leads')
      .select(`
    *,
    profiles (name) 
  `)
      .order('created_at', { ascending: false }) 

    if (supabaseError) {
      setError(supabaseError.message)
      console.error("Ошибка при получении юзеров:", supabaseError)
    } else {
      setCards(data || [])
    }
    
    setLoading(false)
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return { cards, loading, error, refresh: fetchCards }
}