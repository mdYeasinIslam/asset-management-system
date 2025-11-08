
import { useUsersData } from "@/hook/useUsersData"
import DisplayEmployees from "./DisplayEmployees"
import SkeletonBar from "@/SharedComponent/Skeleton"
import HrPagesHeading from "@/SharedComponent/HrPagesHeading"
import { HiUsers } from "react-icons/hi"

export const AddEmployee = () => {
  const [usersData,isPending] = useUsersData()
  if (isPending) {
    return <SkeletonBar/>
  }
  
  const userInfo = usersData?.employee
  

  
  return (
    <div className="py-10">
      {/* <Packages /> */}
      <div className=" pb-10 dark:text-white">
        <HrPagesHeading title='Available Employees' icon={<HiUsers className="w-7 h-7 " />} />
        <DisplayEmployees userInfo={userInfo} isPending={isPending}/>
      </div>
    </div>
  )
}
