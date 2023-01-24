import { Plus } from 'phosphor-react'

import logoImage from './../assets/logo.svg'

export const Header = () => {
  return (
    <div className="flex items-center justify-between m-auto w-full max-w-3xl">
      <img src={logoImage} alt="Habits" />
      <button
        className="flex item-center justify-center gap-3 font-semibold px-6 py-4 border border-violet-500 rounded hover:border-violet-300"
      >
        <Plus className="text-violet-500" size={20} />
        Novo hábito
      </button>
    </div>
  )
}
