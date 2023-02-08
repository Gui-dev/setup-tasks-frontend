import { FormEvent, useState } from 'react'
import { Check, Spinner } from 'phosphor-react'
import { toast } from 'react-toastify'

import { Checkbox } from './Checkbox'
import { api } from '../lib/api'

export const NewHabitForm = () => {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [weekDays, setWeekDays] = useState<number[]>([])
  const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ]
  const handleCreateNewHabit = async (event: FormEvent) => {
    try {
      event.preventDefault()
      setLoading(true)
      if (!title || weekDays.length === 0) {
        toast.warning('Opsssss, você deve preencher o título e selecionar alguns ou todos os dias da semana')
        return
      }
      await api.post('/habits', {
        title,
        weekDays
      })
      toast.success('Hábito criado com sucesso!')
      setTitle('')
      setWeekDays([])
    } catch (error) {
      toast.error('Erro ao tentar crir hábito, tente mais tarde!')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
      setWeekDays(weekDaysWithRemovedOne)
    } else {
      setWeekDays(prevState => [...prevState, weekDay])
    }
  }

  return (
    <form
      className="flex flex-col mt-6 w-full"
      onSubmit={handleCreateNewHabit}
    >
      <label
        htmlFor="title"
        className="font-semibold leading-tight"
      >
        Qual seu comprometimento
      </label>
      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        autoFocus
        className="text-white mt-4 p-4 bg-zinc-800 rounded-lg placeholder:text-zinc-400  focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <label
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrência?
      </label>
      {availableWeekDays.map((weekday, index) => {
        return (
          <Checkbox
            key={weekday}
            title={weekday}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          />
        )
      })}
      <button
        type="submit"
        className="flex flex-row items-center justify-center gap-3 font-semibold mt-6 p-4 rounded-lg bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600  focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        {!loading
          ? (
            <>
              <Check size={20} weight="bold" />
              Confirmar
            </>
          )
          : (
            <Spinner
              size={20}
              weight="bold"
              className="animate-spin"
            />
          )
        }
      </button>
    </form>
  )
}
