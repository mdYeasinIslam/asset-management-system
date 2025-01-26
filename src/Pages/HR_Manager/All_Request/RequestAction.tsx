 
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
import toast from "react-hot-toast"

export const RequestAction = ({row}:{row:any}) => {
  const [, , refetch] = useAllRequestedAsset();
  const axiosSecure = useAxiosSecure()
  const disable=`${row.original?.status}`
  const handleAction =async (value:string | string) => {
    console.log(value)
    console.log(row.original?._id)
    const res = await axiosSecure.patch(`/employee/assetRequest/${row.original?._id}`,{value})
    console.log(res)
    if (res.data?.update.acknowledged) {
      toast.success(`Request is ${res.data?.value}`)
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
        <DropdownMenuCheckboxItem
            onClick={()=>handleAction('approved')}
        >
          Approved
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
             onClick={()=>handleAction('rejected')}
        >
          Rejected
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
