
import { EmployeeListDisplay } from "./EmployeeListDisplay"
import { Skeleton } from "@/components/ui/skeleton"
import { useEmployeeList } from "@/hook/useEmployeeList"

export const EmployeeList = () => {
  const [employeeData,isPending] = useEmployeeList()
  
  if (isPending) {
    return   <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                <Skeleton className="h-10 w-1/2 rounded-xl  bg-gray-700" />
                <div className="space-y-2 w-full flex flex-col items-center">
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                </div>
             </div>
  }
  return (
    <div className="my-10">
      
      <EmployeeListDisplay employeeInfo={employeeData} isPending={isPending} />
    </div>
  )
}
