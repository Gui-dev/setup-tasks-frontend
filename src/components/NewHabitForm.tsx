import { Check } from 'phosphor-react'

export const NewHabitForm = () => {
  return (
    <form className="flex flex-col mt-6 w-full">
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
        className="text-white mt-4 p-4 bg-zinc-800 rounded-lg placeholder:text-zinc-400"
      />
      <label
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrência?
      </label>
      <button
        type="submit"
        className="flex flex-row items-center justify-center gap-3 font-semibold mt-6 p-4 rounded-lg bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}
