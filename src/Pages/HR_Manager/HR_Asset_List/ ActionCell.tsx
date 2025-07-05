import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAllAssets } from "@/hook/useAllAssets";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import toast from "react-hot-toast";
import { MoreHorizontal, PencilLine, Trash2 } from "lucide-react";
import UpdateAsset from "./UpdateAsset";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ActionCell = ({ row }: { row: any }) => {
  const axiosSecure = useAxiosSecure();
  const [, isPending, refetch] = useAllAssets();
  const [open, setOpen] = useState(false);
  const handleDelete = async (id: any) => {
    toast(
      () => (
        <div className="space-y-5">
          <span> Are you sure you want to delete this user?</span>
          <div className="flex gap-5 justify-center">
            <Button
              onClick={async () => {
                const response = await axiosSecure.delete(`/assets/${id}`);

                if (response.data?.acknowledged) {
                  toast.success("The user is deleted");
                  toast.dismiss();
                  refetch();
                }
              }}
            >
              Yes
            </Button>
            <Button onClick={() => toast.dismiss()}>No</Button>
          </div>
        </div>
      ),
      {
        duration: 5000,
      }
    );
  };
  const modalOpen = (value: boolean) => {
    setOpen(value);
  };
  if (isPending) {
    return <div>loading.......</div>;
  }
  return (
    <div className="text-right">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 ">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <div className="flex flex-col gap-1 ">
            <Button
              onClick={() => handleDelete(row.original._id)}
              className="font-medium hover:bg-[#1F2937] hover:text-white"
              variant={"outline"}
            >
              <span className="hover:text-white">Delete</span>{" "}
              <Trash2 className="text-red-800" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  onClick={() => modalOpen(true)}
                  variant="outline"
                  className="hover:bg-[#1F2937] hover:text-white"
                >
                  <span>Update</span> <PencilLine className="text-primary" />
                </Button>
              </DialogTrigger>
              {open && (
                <UpdateAsset
                  assetInfo={row.original}
                  setOpen={setOpen}
                  refetch={refetch}
                />
              )}
            </Dialog>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ActionCell;
