type HabitProps = {
  completed: number
}

export const Habit = ({ completed }: HabitProps) => {
  return (
    <div className="flex items-center justify-center text-white text-center h-10 w-10 m-2 bg-zinc-900 rounded">
      {completed}
    </div>
  )
}
