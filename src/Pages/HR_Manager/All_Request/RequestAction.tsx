 
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
import Loader from "@/SharedComponent/Loader"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { RxCross2 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";

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

  // const handleDelete = async () => {
  //   toast(
  //     () => (
  //       <div className="space-y-5">
  //         <span> Are you sure you want to delete this user?</span>
  //         <div className="flex gap-5 justify-center">
  //           <Button
  //             onClick={async () => {
  //               const response = await axiosSecure.delete(
  //                 `/employee/assetRequest/${row.original?._id}`
  //               );
  //               console.log(response);
  //               if (response?.data?.acknowledged) {
  //                 console.log("inside");
  //                 toast.success("Asset is successfully deleted inside");
  //                 setShowToast(true);
  //                 toast.dismiss();
  //                 refetch();
  //                 return;
  //               }
  //             }}
  //             variant={"outline"}
  //             className="border border-blue-500 hover:bg-[var(--bg-primary-color)] cursor-pointer hover:text-white"
  //           >
  //             Yes
  //           </Button>
  //           <Button
  //             onClick={() => toast.dismiss()}
  //             variant={"outline"}
  //             className="border border-blue-500 hover:bg-[var(--bg-primary-color)] cursor-pointer hover:text-white"
  //           >
  //             No
  //           </Button>
  //         </div>
  //       </div>
  //     ),
  //     {
  //       duration: 5000,
  //     }
  //   );
  // };
  const handleDelete = async () => {
    const toastId = toast.custom(
      () => (
        <div className="space-y-5 bg-[#FFFFFF] font-semibold p-5 rounded-lg">
          <span className="">Do you want to delete this request?</span>
          <div className="flex gap-5 justify-center">
            <Button
              onClick={async () => {
                try {
                  const response = await axiosSecure.delete(
                    `/employee/assetRequest/${row.original?._id}`
                  );
                  if (response?.data?.acknowledged) {
                    toast.success("Asset successfully deleted!");
                    toast.dismiss(toastId);
                    refetch();
                    return
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
  if (isPending) {
    return <div><Loader/></div>
  }
  return (
    <div className="text-right">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="action">
            <GitPullRequestClosed className="text-black dark:text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 font-semibold">
          <DropdownMenuLabel>Request Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            onClick={() => handleAction("approved")}
            className="hover:!bg-green-600 flex gap-2"
          >
            <IoMdCheckmarkCircleOutline className="w-4 h-4" />
            <span>Approved</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={() => handleAction("rejected")}
            className="hover:!bg-red-400 hover:!text-black flex gap-2"
          >
            <RxCross2 className="w-4 h-4" />
            <span>Rejected</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            color="red"
            onClick={handleDelete}
            className="hover:!bg-red-600 flex gap-2"
          >
            <AiFillDelete className="w-4 h-4" />
            <span>Delete</span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
