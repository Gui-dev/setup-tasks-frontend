import dayjs from 'dayjs'
import { Spinner } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import { HabitDay } from './HabitDay'

type Summary = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export const SummaryTable = () => {
  const [summary, setSummary] = useState<Summary>([])
  const [loading, setLoading] = useState(true)
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const summaryDates = generateDatesFromYearBeginning()
  const minimumSummaryDatesSize = 18 * 7 // 18 weeks
  const amountOdDaysToFill = minimumSummaryDatesSize - summaryDates.length

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const { data } = await api.get('/summary')
        setSummary(data.summaries)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    loadSummary()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center mb-60">
        <Spinner size={50} weight="bold" className="text-violet-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex w-full mb-10">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className="flex items-center-justify-center font-bold text-xl text-zinc-400 h-10 w-10"
            >
              {weekDay}
            </div>
          )
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.length > 0 && summaryDates.map(summaryDate => {
          const dayInSummary: any = summary.find(day => {
            return dayjs(summaryDate).isSame(day.date, 'day')
          })
          return (
            <HabitDay
              key={summaryDate.toString()}
              date={summaryDate}
              defaultCompleted={dayInSummary?.completed}
              amount={dayInSummary?.amount}
            />
          )
        })}

        {amountOdDaysToFill > 0 && Array.from({ length: amountOdDaysToFill }).map((value, index) => {
          return (
            <div
              key={String(index)}
              className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded opacity-40 cursor-not-allowed"
            />
          )
        })}
      </div>
    </div>
  )
}
