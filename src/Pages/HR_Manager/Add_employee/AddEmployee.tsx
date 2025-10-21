
import { useUsersData } from "@/hook/useUsersData"
import { Packages } from "./packageSection/Packages"
import DisplayEmployees from "./DisplayEmployees"
import { CommonHeading } from "@/SharedComponent/CommonHeading"
import SkeletonBar from "@/SharedComponent/Skeleton"

export const AddEmployee = () => {
  const [usersData,isPending] = useUsersData()
  if (isPending) {
    return <SkeletonBar/>
  }
  
  const userInfo = usersData?.employee
  
  const content = <div className="flex flex-col items-center">
    <h1 className="text-2xl  font-medium leading-tight">Available Employees</h1>
    <p className="text-gray-800">Find employee as your choice and neccesity.</p>
  </div>
  
  return (
    <div className="container mx-auto">
      <Packages />
      <div className="max-w-4xl mx-auto pb-10 dark:text-white">
        <CommonHeading content={content} />
        <DisplayEmployees userInfo={userInfo} isPending={isPending}/>
      </div>
    </div>
  )
}
