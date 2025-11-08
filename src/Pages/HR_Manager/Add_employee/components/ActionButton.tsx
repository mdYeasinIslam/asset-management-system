import { Button } from "@/components/ui/button";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import { useUsersData } from "@/hook/useUsersData";
import { HrDataType } from "@/Type/Types";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
interface User {
  _id: string;
  Employee_Name: string;
  Employee_photo: string;
  date_of_birth: string;
  email: string;
  role: string;
}
export default function ActionButton({ row }: { row: any }) {
  const [usersData, , refetch] = useUsersData();
  const axiosSecure = useAxiosSecure();
  const hrData = usersData?.userInfo[0] as HrDataType;
  // ✅ Single employee add
  const handleSingleEmployee = async (user?: User) => {
    const info = {
      hrName: hrData?.HR_Name,
      hrEmail: hrData?.email,
      Employee_Name: user?.Employee_Name,
      Employee_photo: user?.Employee_photo,
      role: user?.role,
      email: user?.email,
      employeeId: user?._id,
    };
    const res = await axiosSecure.post("/hr/addEmployee", info);

    if (res.data?.status == false) {
      return toast.error(`${res.data?.message}`);
    }
    if (res.data?.acknowledged) {
      toast.success(
        `${user?.Employee_Name} successfully added as Employee to your company`
      );
    }
  };
  const handleDelete = async (id: string) => {
    const toastId = toast.custom(
      () => (
        <div className="space-y-5 bg-[#FFFFFF] font-semibold p-5 rounded-lg">
          <span className="">Do you want to delete this user?</span>
          <div className="flex gap-5 justify-center">
            <Button
              onClick={async () => {
                try {
                    const response = await axiosSecure.delete(`/user/${id}`);
                  if (response?.data?.acknowledged) {
                    toast.success("user data successfully deleted!");
                    toast.dismiss(toastId);
                    refetch();
                    return;
                  }
                } catch (error) {
                  toast.error(" Failed to delete user.");
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
    <div className="flex items-center gap-2 justify-end">
      <div className="text-right">
        <Button
          className="hover:bg-[#2563EB] hover:text-white bg-[#EFF6FF]"
          variant="outline"
          onClick={() => handleSingleEmployee(row.original)}
        >
          Add
        </Button>
      </div>
      <div
        onClick={() => handleDelete(row.original?._id)}
        className="text-right"
      >
        <Button className="hover:bg-red-600 hover:text-white" variant="outline">
          <AiFillDelete className="w-4 h-4  hover:!text-black" />{" "}
          <span>Remove</span>
        </Button>
      </div>
    </div>
  );
}
