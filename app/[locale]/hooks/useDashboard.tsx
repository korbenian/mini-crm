import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabase'
import { DashboardTypes } from '../types/types'

export function useDashboard() {
  const [metrics, setMetrics] = useState<DashboardTypes>({
    myCards: 0,
    doneCards: 0,
    activeCards: 0,
    progress: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) return

        const { data: leads, error } = await supabase
          .from('leads')
          .select('status')
          .eq('user_id', user.id)

        if (error) throw error

        const total = leads?.length || 0
        const done = leads?.filter(l => l.status?.toLowerCase() === 'done').length || 0
        const active = total - done

        setMetrics({
          myCards: total,
          doneCards: done,
          activeCards: active,
          progress: total > 0 ? Math.round((done / total) * 100) : 0
        })
      } catch (err) {
        console.error('Dashboard Hook Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  return { metrics, loading }
}