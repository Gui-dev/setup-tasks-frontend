import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from './../assets/logo.svg'
import { NewHabitForm } from './NewHabitForm'

export const Header = () => {
  return (
    <div className="flex items-center justify-between m-auto w-full max-w-3xl">
      <img src={logoImage} alt="Habits" />
      <Dialog.Root>
        <Dialog.Trigger
          className="flex item-center justify-center gap-3 font-semibold px-6 py-4 border border-violet-500 rounded hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600  focus:ring-offset-2 focus:ring-offset-background"
        >
          <Plus className="text-violet-500" size={20} />
          Novo hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed h-screen w-screen bg-black/80 inset-0"
          />
          <Dialog.Content
            className="absolute top-1/2 left-1/2 p-10 w-full max-w-md bg-zinc-900 rounded-2xl -translate-x-1/2 -translate-y-1/2"
          >
            <Dialog.Close className="absolute top-6 right-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600  focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl font-extrabold leading-tight">
              Criar hábito
            </Dialog.Title>
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
