
import { EmployeeListDisplay } from "./EmployeeListDisplay"
import { useEmployeeList } from "@/hook/useEmployeeList"
import HrPagesHeading from "@/SharedComponent/HrPagesHeading"
import SkeletonBar from "@/SharedComponent/Skeleton"
import { HiUsers } from "react-icons/hi"

export const EmployeeList = () => {
  const [employeeData,isPending] = useEmployeeList()
  if (isPending) {
    return  <SkeletonBar/>
  }
  return (
    <div className="py-10 h-full lg:h-[100vh] bg-[#F4F8FD]  ">
      <HrPagesHeading title={"Employees List"} icon={<HiUsers className="w-7 h-7 " />} />
      <EmployeeListDisplay employeeInfo={employeeData} isPending={isPending} />
    </div>
  );
}
