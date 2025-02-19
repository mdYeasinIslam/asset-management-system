import { RouterProvider } from 'react-router-dom'
import './App.css'
import { useAuth } from './hook/useAuth'
import {  routes } from './Router/Root'
import { Toaster } from 'react-hot-toast'
function App() {
  const {dark} = useAuth()
  return (
    <div className={` ${dark?'bg-[#1F2937] dark':''}`}>
      <RouterProvider router={routes}/>
      <Toaster />

    </div>
  )
}

export default App
