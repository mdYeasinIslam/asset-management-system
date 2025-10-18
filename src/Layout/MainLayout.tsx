
// import { Navbar } from "@/SharedComponent/Navbar"
import { SecondNavbar } from "@/SharedComponent/SecondNavbar"
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return (
    <div>
      <div className=" ">
        <SecondNavbar />
      </div>
      <Outlet />
      
    </div>
  );
}
