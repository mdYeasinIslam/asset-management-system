import { Navbar } from "@/SharedComponent/Navbar"
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return (
    <div>
      <div className=" pb-16">
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}
