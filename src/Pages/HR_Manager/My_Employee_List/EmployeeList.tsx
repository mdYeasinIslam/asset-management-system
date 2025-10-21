
import { EmployeeListDisplay } from "./EmployeeListDisplay"
import { useEmployeeList } from "@/hook/useEmployeeList"
import SkeletonBar from "@/SharedComponent/Skeleton"

export const EmployeeList = () => {
  const [employeeData,isPending] = useEmployeeList()
  console.log(employeeData);
  if (isPending) {
    return  <SkeletonBar/>
  }
  return (
    <div className="py-10 h-full lg:h-[100vh]">
      
      <EmployeeListDisplay employeeInfo={employeeData} isPending={isPending} />
    </div>
  )
}
