import { Header } from './components/Header'
import { Habit } from './components/Habit'

import './styles/global.css'

function App () {
  return (
    <section className="flex item-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-16 px-6 w-full max-w-5xl">
        <Header />
        <Habit completed={3} />
      </div>
    </section>
  )
}

export default App
