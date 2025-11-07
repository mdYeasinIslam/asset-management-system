 
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
import moment from "moment"
import { useUsersData } from "@/hook/useUsersData"

export const RequestAction = ({row}:{row:any}) => {
  const [, , refetch] = useAllRequestedAsset();
  const [usersData,isPending] = useUsersData()
  const axiosSecure = useAxiosSecure()
  // const disable=`${row.original?.status}`
  const handleAction =async (value:string | string) => {
    const updateDate = moment().format('DD-MM-YYYY')
    const hrInfo=usersData.userInfo[0]
    const companyName = hrInfo?.companyName;
    const companyLogo = hrInfo?.company_logo;
    const doc = {
      value,
      updateDate,
      companyName,
      companyLogo
    }
    const res = await axiosSecure.put(`/employee/assetRequest/${row.original?._id}`,doc)
    if (res.data?.update.acknowledged) {
      toast.success(`Request is ${res.data?.value}`)
      refetch()
    }
  }

  const handleDelete = async() => {
    const res = await axiosSecure.delete(
      `/employee/assetRequest/${row.original?._id}`
    );
    console.log(res)
    if (res.data?.update.acknowledged) {
      toast.success(`Request is ${res.data?.value}`);
      refetch();
    }
  }
  if (isPending) {
    return <div>loading.............</div>
  }
  return (
    <div className="text-right">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="action" >
            <GitPullRequestClosed className="text-black dark:text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Request Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem onClick={() => handleAction("approved")}>
            Approved
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onClick={() => handleAction("rejected")}>
            Rejected
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  color="red" onClick={handleDelete} className="hover:bg-red-600!">
            Delete
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
