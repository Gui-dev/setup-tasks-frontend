import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Checkbox } from './Checkbox'

import { Progressbar } from './Progressbar'

interface HabitDayProps {
  date: Date
  completed?: number
  amount?: number
}

export const HabitDay = ({ date, completed = 0, amount = 0 }: HabitDayProps) => {
  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0
  const dayOfWeek = dayjs(date).format('dddd')
  const dayAndMonth = dayjs(date).format('DD/MM')

  return (
    <Popover.Root>
      <Popover.Trigger
        className={
          clsx('h-10 w-10 border-2 border-zinc-800 rounded-lg',
            {
              'bg-zinc-900 border-zinc-800': completedPercentage === 0,
              'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
              'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
              'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
              'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
              'bg-violet-500 border-violet-400': completedPercentage >= 80
            }
          )
        }
      />
      <Popover.Portal>
        <Popover.Content
          className="flex flex-col p-6 min-w-[320px] bg-zinc-900"
        >
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="font-extrabold text-3xl leading-tight">{dayAndMonth}</span>
          <Progressbar progress={completedPercentage} />
          <Checkbox title="Beber 2L d'água" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
