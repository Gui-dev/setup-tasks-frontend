import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface ICheckbox extends CheckboxRadix.CheckboxProps {
  title: string
}

export const Checkbox = ({ title, ...rest }: ICheckbox) => {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <CheckboxRadix.Root
        className="flex items-center gap-3 group"
        {...rest}
      >
        <div
          className="flex items-center justify-center h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-600"
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
