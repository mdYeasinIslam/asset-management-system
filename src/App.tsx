import './App.css'
import { useAuth } from './hook/useAuth'
import { Root } from './Router/Root'
import { Toaster } from 'react-hot-toast'
function App() {
  const {dark} = useAuth()
  return (
    <div className={` ${dark?'bg-[#1F2937] dark':''}`}>
      <Root />
       <Toaster />

    </div>
  )
}

export default App
