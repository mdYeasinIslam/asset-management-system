 
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
import { PrintPage } from "./PrintPage"
import { pdf } from "@react-pdf/renderer"

export const ActionBtton = ({ row }: { row: any }) => {
    const { user } = useAuth()
    const email=user?.email as string
  const [, , refetch] = useAllRequestedAsset(email);
  const axiosSecure = useAxiosSecure()
  const disable = row.original?.status;
  
    const handleDelete = async(id:string) => {
        
        const res = await axiosSecure.delete(`/employee/assetRequest/${id}`)
        
        if (res.data?.acknowledged) {
            toast.success('Request is successfully deleted')
            refetch()
        }
    }
  const handleReturn = async(id:string) => {
  
    const res= await axiosSecure.patch(`/employee/assetRequest/${id}`,{value:'Returned'})
  
    if (res.data?.acknowledged) {
            toast.success('Request is successfully deleted')
            refetch()
      }
  }
  const handlePrint = async () => {
      const assetData = row.original
    const blob = await pdf(<PrintPage assetData={assetData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "asset-details.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="text-right">
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Button variant="action">
          <GitPullRequestClosed className="text-black dark:text-white"/>
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
            disable =='rejected' &&
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
                row.original?.assetStatus=='Returnable' ?
                <>
                 <DropdownMenuCheckboxItem
                onClick={handlePrint}
                >
                        Print
                </DropdownMenuCheckboxItem>
                 <DropdownMenuCheckboxItem
                onClick={()=>handleReturn(row.original?._id)}
                >
                        Return
                </DropdownMenuCheckboxItem>
                </>
                :
                <>
                 <DropdownMenuCheckboxItem
               onClick={handlePrint}
                >
                        Print
                </DropdownMenuCheckboxItem>
                </>
            }
           
            </>
          
        }
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
