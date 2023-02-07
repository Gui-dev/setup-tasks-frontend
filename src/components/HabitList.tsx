import dayjs from 'dayjs'
import { Spinner } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../lib/api'
import { Checkbox } from './Checkbox'

interface IHabitList {
  date: Date
  onAmountCompletedChanged: (completed: number) => void
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string
    title: string
    created_at: string
  }>
  completedHabits: Array<string>
}

export const HabitList = ({ date, onAmountCompletedChanged }: IHabitList) => {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()
  const [loading, setLoading] = useState(true)
  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  useEffect(() => {
    const loadHabitDays = async () => {
      try {
        const { data } = await api.get('/day', {
          params: {
            date: date.toISOString()
          }
        })
        setHabitsInfo(data.habitDays)
      } catch (error) {
        toast.error('Erro, tente recarregar a página')
      } finally {
        setLoading(false)
      }
    }
    loadHabitDays()
  }, [date])

  const handleToggleHabit = async (habitId: string) => {
    await api.patch(`/habits/${habitId}/toggle`)
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)
    let completedHabits: string[] = []
    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }
    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits
    })
    onAmountCompletedChanged(completedHabits.length)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner size={32} className="text-violet-500 animate-spin" />
      </div>
    )
  }

  return (
    <>
      {
        habitsInfo?.possibleHabits.map(habit => {
          return (
            <Checkbox
              key={habit.id}
              title={habit.title}
              onCheckedChange={() => handleToggleHabit(habit.id)}
              checked={habitsInfo!.completedHabits && habitsInfo!.completedHabits.includes(habit.id)}
              disabled={isDateInPast}
            />
          )
        })
      }
    </>
  )
}
