import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import { HabitDay } from './HabitDay'

export const SummaryTable = () => {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const summaryDates = generateDatesFromYearBeginning()
  const minimumSummaryDatesSize = 18 * 7 // 18 weeks
  const amountOdDaysToFill = minimumSummaryDatesSize - summaryDates.length

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
        {summaryDates.map(summaryDate => {
          return (
            <HabitDay
              key={summaryDate.toString()}
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
