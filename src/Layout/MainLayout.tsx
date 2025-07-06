
// import { Navbar } from "@/SharedComponent/Navbar"
import Footer from "@/SharedComponent/Footer";
import { SecondNavbar } from "@/SharedComponent/SecondNavbar"
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return (
    <div>
      <div className=" pb-16">
        <SecondNavbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
