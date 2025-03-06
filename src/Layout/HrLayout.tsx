// import { Navbar } from "@/SharedComponent/Navbar"
import { SecondNavbar } from "@/SharedComponent/SecondNavbar"
import { Outlet } from "react-router-dom"

export const HrLayout = () => {
  return (
      <div>
           <div className=" pb-16">
        <SecondNavbar />
      </div>
          <Outlet/>
    </div>
  )
}
