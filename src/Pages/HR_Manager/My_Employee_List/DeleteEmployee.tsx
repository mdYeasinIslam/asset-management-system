import { Button } from "@/components/ui/button"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useEmployeeList } from "@/hook/useEmployeeList"
import toast from "react-hot-toast"

export const DeleteEmployee = ({ row }: { row: any }) => {
    const axiosSecure = useAxiosSecure()
    const [employeeData, ,refetch]=useEmployeeList()
    console.log(employeeData)
    const handleDelete = async (id: string) => {
        console.log(id)
        const res =await axiosSecure.delete(`/hr/addEmployee/${id}`)
        console.log(res)
        if (res.data?.acknowledged) {
            toast.success('Employee is successfully deleted')
        }
        refetch()
    }
  return (
      <div onClick={()=>handleDelete(row.original?._id)} className="text-right">
          <Button className="" variant='outline'>Remove</Button>
    </div>
  )
}
