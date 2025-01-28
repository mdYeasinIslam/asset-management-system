import { useEmployeeList } from "@/hook/useEmployeeList"
import { Skeleton } from "@/components/ui/skeleton"


export const MyTeam = () => {
  const [employeeData,isPending] = useEmployeeList()
 
  if (isPending) {
    return  <div>loading.......</div>
  }
  return (
  
       <div className="p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Member Image</th>
            <th className="px-4 py-2 text-left">Member Name</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
            {
            isPending ?
                <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                    <Skeleton className="h-10 w-1/2 rounded-xl  bg-gray-700" />
                    <div className="space-y-2 w-full flex flex-col items-center">
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    </div>
                    </div> :
                    <>
                {employeeData?.map((user:any) => (
                    <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                    >
                    <td className="px-4 py-2">
                        <img
                        src={user.Employee_photo}
                        alt={user.Employee_Name}
                        className="w-10 h-10 rounded-full"
                        />
                    </td>
                    <td className="px-4 py-2">{user.Employee_Name}</td>
                    <td className="px-4 py-2">
                       {user.role}
                    </td>
                    </tr>
                ))}
                    </>
            }
        </tbody>
      </table>
    </div>
  )
}
