import { Button } from "@/components/ui/button"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useEmployeeList } from "@/hook/useEmployeeList"
import toast from "react-hot-toast"
import { AiFillDelete } from "react-icons/ai"

export const DeleteEmployee = ({ row }: { row: any }) => {
    const axiosSecure = useAxiosSecure()
    const [, ,refetch]=useEmployeeList()
    
    // const handleDelete = async (id: string) => {
        
    //     const res =await axiosSecure.delete(`/hr/addEmployee/${id}`)
        
    //     if (res.data?.acknowledged) {
    //         toast.success('Employee is successfully deleted')
    //     }
    //     refetch()
    // }
     
 const handleDelete = async (id:string) => {
   const toastId = toast.custom(
     () => (
       <div className="space-y-5 bg-[#FFFFFF] font-semibold p-5 rounded-lg">
         <span className="">Do you want to delete this request?</span>
         <div className="flex gap-5 justify-center">
           <Button
             onClick={async () => {
               try {
                 const response = await axiosSecure.delete(
                   `/hr/addEmployee/${id}`
                 );
                 if (response?.data?.acknowledged) {
                   toast.success("Asset successfully deleted!");
                   toast.dismiss(toastId);
                   refetch();
                   return;
                 }
               } catch (error) {
                 toast.error(" Failed to delete asset.");
               }
             }}
             variant="outline"
             className="border border-red-500 hover:bg-red-500 hover:text-white cursor-pointer "
           >
             Yes
           </Button>
           <Button
             onClick={() => toast.dismiss(toastId)}
             variant="outline"
             className="border border-blue-500 hover:bg-[var(--bg-primary-color)] cursor-pointer hover:text-white"
           >
             No
           </Button>
         </div>
       </div>
     ),
     {
       duration: Infinity, // Keep it open until user acts
       id: "delete-confirm-toast",
     }
   );
 };
  return (
    <div onClick={() => handleDelete(row.original?._id)} className="text-right flex justify-end">
      <Button className="hover:bg-red-600 hover:text-white flex items-center gap-2  justify-end" variant="outline">
        <AiFillDelete className="w-4 h-4" /> <span>Remove</span>
      </Button>
    </div>
  );
}
