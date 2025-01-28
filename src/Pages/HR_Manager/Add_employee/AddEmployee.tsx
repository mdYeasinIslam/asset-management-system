
import { useUsersData } from "@/hook/useUsersData"
import { Packages } from "./packageSection/Packages"
import { Skeleton } from "@/components/ui/skeleton"
import DisplayEmployees from "./DisplayEmployees"
import { CommonHeading } from "@/SharedComponent/CommonHeading"

export const AddEmployee = () => {
  const [usersData,isPending] = useUsersData()
  if (isPending) {
    return  <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                <Skeleton className="h-10 w-2/3 rounded-xl  bg-gray-700" />
                <div className="space-y-2 w-full flex flex-col items-center">
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                </div>
          </div>
  }
  
  const userInfo = usersData?.employee
  
  const content = <div className="flex flex-col items-center">
    <h1 className="text-2xl  font-medium leading-tight">Available Employees</h1>
    <p className="text-gray-800">Find employee as your choice and neccesity.</p>
  </div>
  
  return (
    <div className="container mx-auto">
      <Packages />
      <div className="max-w-4xl mx-auto pb-10">
        <CommonHeading content={content} />
        <DisplayEmployees userInfo={userInfo} isPending={isPending}/>
      </div>
    </div>
  )
}
