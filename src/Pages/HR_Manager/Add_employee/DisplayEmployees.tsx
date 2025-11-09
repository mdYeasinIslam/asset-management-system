"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import { useUsersData } from "@/hook/useUsersData";
import { HrDataType } from "@/Type/Types";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import ActionButton from "./components/ActionButton";

 interface User {
  _id: string;
  Employee_Name: string;
  Employee_photo: string;
  date_of_birth: string;
  email: string;
  role: string;
}

const DisplayEmployees = ({
  userInfo,
  isPending,
}: {
  userInfo: User[];
  isPending: boolean;
}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [usersData] = useUsersData();
  const axiosSecure = useAxiosSecure();
  const hrData = usersData?.userInfo[0] as HrDataType;

  // ✅ Select all
  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(userInfo.map((user) => user._id));
    } else {
      setSelectedRows([]);
    }
  };

  // ✅ Select single
  const handleRowSelect = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  

  // ✅ Add all selected
  const getSelectedData = async () => {
    const selectedData = userInfo.filter((u) => selectedRows.includes(u._id));
    const actualEmployeeData = selectedData.map((d) => ({
      ...d,
      hrName: hrData?.HR_Name,
      hrEmail: hrData?.email,
    }));
    const res = await axiosSecure.post(
      "/hr/addEmployee/array",
      actualEmployeeData
    );

    if (res.data?.acknowledged)
      return toast.success("Members added to the team");
    if (res.data?.status == false) return toast.error(res.data?.message);
  };

  // ✅ Define TanStack columns
  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: () => (
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={selectedRows.length === userInfo.length}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(row.original._id)}
          onChange={() => handleRowSelect(row.original._id)}
        />
      ),
    },
    {
      accessorKey: "Employee_photo",
      header: " Image",
      cell: ({ row }) => (
        <div className="w-10 h-10">
          <img
            src={row.original.Employee_photo}
            alt={row.original.Employee_Name}
            className="w-full h-full object-cover object-center rounded-full ring-2 ring-blue-200"
          />
        </div>
      ),
    },
    {
      accessorKey: "Employee_Name",
      header: " Name",
      cell: ({ row }) => (
        <div className="capitalize font-medium text-gray-800 dark:text-gray-100">
          {row.original.Employee_Name}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="font-medium text-gray-800 dark:text-gray-100">
          {row.original.email}
        </div>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => (
       <ActionButton row={row}/>
      ),
    },
  ];

  // ✅ Create table instance
  const table = useReactTable({
    data: userInfo,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  // ✅ Loading state
  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
        <Skeleton className="h-10 w-1/2 rounded-xl bg-gray-700" />
        <div className="space-y-2 w-full flex flex-col items-center">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-1/2 bg-gray-700" />
          ))}
        </div>
      </div>
    );
  }

  // ✅ Table rendering
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-x-auto">
      <Table className="min-w-[600px] border border-gray-200 dark:border-gray-700 text-sm">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="bg-gray-100 dark:bg-gray-800"
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-200 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-3 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center py-10 text-gray-500 dark:text-gray-400"
              >
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="mt-5 text-right">
        <Button
          className="bg-[#2563EB]  text-white font-semibold text-md hover:bg-[#033fc0] hover:border hover:border-[#030814]"
          variant="outline"
          size="responsive"
          onClick={getSelectedData}
        >
          Add selected members
        </Button>
      </div>
    </div>
  );
};

export default DisplayEmployees;
