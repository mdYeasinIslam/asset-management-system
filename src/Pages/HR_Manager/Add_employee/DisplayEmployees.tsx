import { Skeleton } from '@/components/ui/skeleton';
import { useAxiosSecure } from '@/hook/useAxiosSecure';
import { useUsersData } from '@/hook/useUsersData';
import { HrDataType } from '@/Type/Types';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

interface User {
_id:string
Employee_Name: string,
  Employee_photo: string 
  date_of_birth: string, 
  email: string,
  role: string,
}

const DisplayEmployees = ({userInfo,isPending}:{userInfo:User[],isPending:boolean}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const[usersData]=useUsersData()
  const axiosSecure = useAxiosSecure()
  const hrData = usersData?.userInfo[0] as HrDataType
  
  // Handle selecting/deselecting all checkboxes
  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(userInfo.map((user) =>user?._id));
    } else {
      setSelectedRows([]);
    }
  };

  // Handle selecting/deselecting a single checkbox
  const handleRowSelect = (id: string) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  // Log data for selected rows
  const handleSingleEmployee = async(user?:User) => {
    
    const info = {
      hrName: hrData?.HR_Name,
      hrEmail: hrData?.email,
      Employee_Name: user?.Employee_Name,
      Employee_photo: user?.Employee_photo,
      role: user?.role,
      email: user?.email,
      employeeId: user?._id
    }
    const res = await axiosSecure.post('/hr/addEmployee',info)
   
    if (res.data?.status == false) {
      return toast.error(`${res.data?.message}`)
    }
    if (res.data?.acknowledged) {
      toast.success(`${user?.Employee_Name} is successfully add as Employee to you company`)
    }

  };
  const getSelectedData =async () => {
    const selectedData = userInfo.filter((user) => selectedRows.includes(user._id));
   
    const actualEmployeeData = selectedData?.map(data => ({ ...data, hrName: hrData?.HR_Name, hrEmail: hrData?.email}))
    
    const res = await axiosSecure.post('/hr/addEmployee/array', actualEmployeeData)
   
    if (res.data?.acknowledged) {
    return  toast.success('Members are add to the team')
    }
    if (res.data?.status == false) {
    return  toast.error(res.data?.message)
    }
  };
  if (isPending) {
    return <div>loading.......</div>
  }
  return (
    <div className="p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100 dark:bg-slate-900">
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.length === userInfo.length}
              />
            </th>
            <th className="px-4 py-2 text-left">Requester Image</th>
            <th className="px-4 py-2 text-left">Requester Name</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
            isPending ?
                <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                    <Skeleton className="h-10 w-1/2 rounded-xl  bg-gray-700" />
                    <div className="space-y-2 w-full flex flex-col items-center">
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                        <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    </div>
                    </div> :
                    <>
                {userInfo.map((user) => (
                    <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                    >
                    <td className="px-4 py-2">
                        <input
                        type="checkbox"
                        checked={selectedRows.includes(user._id)}
                        onChange={() => handleRowSelect(user._id)}
                        />
                    </td>
                    <td className="px-4 py-2">
                        <img
                        src={user.Employee_photo}
                        alt={user.Employee_Name}
                        className="w-10 h-10 rounded-full"
                        />
                    </td>
                    <td className="px-4 py-2">{user.Employee_Name}</td>
                    <td className="px-4 py-2">
                        <button
                        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleSingleEmployee(user)}
                        >
                        Add to them
                        </button>
                    </td>
                    </tr>
                ))}
                    </>
            }
        </tbody>
      </table>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={getSelectedData}
      >
        Add selected member
      </button>
    </div>
  );
};

export default DisplayEmployees;
