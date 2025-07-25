// import { Navbar } from "@/SharedComponent/Navbar"
import { DashboardSidebar } from "@/SharedComponent/DasboardEmployee";
import { Outlet } from "react-router-dom";

export const EmployeeLayout = () => {
  return (
    <div className="grid lg:grid-cols-12 xl:grid-cols-12 lg:gap-5 xl:gap-10">
      <div className="pb-16 lg:col-span-3 xl:col-span-2">
        {/* <SecondNavbar /> */}
        <DashboardSidebar />
      </div>
      <div className="lg:col-span-9 xl:col-span-10 px-5">
        <Outlet />
      </div>
    </div>
  );
};
