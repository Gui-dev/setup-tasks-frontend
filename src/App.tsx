import './lib/dayjs'
import 'react-toastify/dist/ReactToastify.min.css'

import { ToastContainer } from 'react-toastify'

import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

import './styles/global.css'

function App () {
  return (
    <section className="flex item-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-16 px-6 w-full max-w-5xl">
        <Header />
        <SummaryTable />
        <ToastContainer position="top-center" theme="dark" />
      </div>
    </section>
  )
}

export default App
