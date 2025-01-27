import { Skeleton } from '@/components/ui/skeleton';
import { ChangeEvent, useState } from 'react';

interface User {
_id:string
Employee_Name: string,
Employee_photo:string 
}

const DisplayEmployees = ({userInfo,isPending}:{userInfo:User[],isPending:boolean}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

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
  const getSelectedData = () => {
    const selectedData = userInfo.filter((user) => selectedRows.includes(user._id));
    console.log('Selected Rows:', selectedData);
  };

  return (
    <div className="p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
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
                        onClick={() => console.log('Add to :', user)}
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
        Get Selected Data
      </button>
    </div>
  );
};

export default DisplayEmployees;
