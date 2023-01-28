type ProgressbarProps = {
  progress: number
}

export const Progressbar = ({ progress }: ProgressbarProps) => {
  return (
    <div className="mt-4 h3 w-full bg-zinc-700 rounded-xl">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        className="h-3 bg-violet-600 rounded-xl"
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  )
}
