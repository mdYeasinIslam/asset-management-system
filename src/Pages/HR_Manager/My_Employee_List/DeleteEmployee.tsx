import { Button } from "@/components/ui/button"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useEmployeeList } from "@/hook/useEmployeeList"
import toast from "react-hot-toast"

export const DeleteEmployee = ({ row }: { row: any }) => {
    const axiosSecure = useAxiosSecure()
    const [, ,refetch]=useEmployeeList()
    
    const handleDelete = async (id: string) => {
        
        const res =await axiosSecure.delete(`/hr/addEmployee/${id}`)
        
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
