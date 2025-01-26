 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GitPullRequestClosed } from "lucide-react"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { useAuth } from "@/hook/useAuth"
import toast from "react-hot-toast"

export const ActionBtton = ({ row }: { row: any }) => {
    const { user } = useAuth()
    const email=user?.email as string
  const [, , refetch] = useAllRequestedAsset(email);
  const axiosSecure = useAxiosSecure()
    const disable = `${row.original?.status}`
console.log(row.original)
    const handleDelete = async(id:string) => {
        console.log(id)
        const res = await axiosSecure.delete(`/employee/assetRequest/${id}`)
        console.log(res)
        if (res.data?.acknowledged) {
            toast.success('Request is successfully deleted')
            refetch()
        }
    }
  return (
    <div className="text-right">
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Button variant="action"  disabled={disable=='reject' && true}>
          <GitPullRequestClosed className="text-red-800"/>
          </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" >
           <DropdownMenuLabel>Request Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
            disable =='pending' &&
            <>
            <DropdownMenuCheckboxItem
            onClick={()=>handleDelete(row.original?._id)}
             >
                     Cancel
            </DropdownMenuCheckboxItem>
            </>
        }
        {
            disable =='approved' &&
            <>
            {
                row.orginal?.assetStatus=='Returnable' ?
                <>
                 <DropdownMenuCheckboxItem
                // onClick={()=>handleAction('approved')}
                >
                        Print
                </DropdownMenuCheckboxItem>
                 <DropdownMenuCheckboxItem
                // onClick={()=>handleAction('approved')}
                >
                        Return
                </DropdownMenuCheckboxItem>
                </>
                :
                <>
                 <DropdownMenuCheckboxItem
                // onClick={()=>handleAction('approved')}
                >
                        Print
                </DropdownMenuCheckboxItem>
                </>
            }
           
            </>
          
        }
        {/* <DropdownMenuCheckboxItem
            // onClick={()=>handleAction('approved')}
        >
          Approved
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
            //  onClick={()=>handleAction('rejected')}
        >
          Rejected
        </DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
