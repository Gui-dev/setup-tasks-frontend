import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface ICheckbox extends CheckboxRadix.CheckboxProps {
  title: string
}

export const Checkbox = ({ title, ...rest }: ICheckbox) => {
  return (
    <div className="flex flex-col gap-3 mt-3 transition-colors">
      <CheckboxRadix.Root
        className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
        {...rest}
      >
        <div
          className="flex items-center justify-center h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-600 group-focus:ring-2 group-focus:ring-violet-600  group-focus:ring-offset-2 group-focus:ring-offset-background"
        >
          <CheckboxRadix.Indicator>
            <Check size={20} className="text-white" />
          </CheckboxRadix.Indicator>
        </div>
        <span className="text-md text-white font-semibold leading-tight group-data-[state=checked]:text-zinc-400">
          {title}
        </span>
      </CheckboxRadix.Root>

    </div>
  )
}
