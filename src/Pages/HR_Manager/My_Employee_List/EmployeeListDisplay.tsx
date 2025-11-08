"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DeleteEmployee } from "./DeleteEmployee";

export type EmployeeInfoType = {
  employeeName: string;
  employeePhoto: string;
  EmployeeRole: string;
};

export const columns: ColumnDef<EmployeeInfoType>[] = [
  {
    accessorKey: "Employee_photo",
    header: "Profile",
    cell: ({ row }) => (
      <div className="flex items-center  ">
        <img
          src={row.getValue("Employee_photo")}
          alt="employee"
          className=" w-12 h-12 rounded-full object-cover ring-2 ring-blue-400/30"
        />
      </div>
    ),
  },
  {
    accessorKey: "Employee_Name",
    header: "Name",
    cell: ({ row }) => (
      <span className="capitalize font-medium text-gray-800 dark:text-gray-200">
        {row.getValue("Employee_Name")}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="capitalize font-medium text-gray-800 dark:text-gray-200">
        {row.getValue("email")}
      </span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <span className="capitalize font-medium text-gray-800 dark:text-gray-200">
        {row.getValue("role")}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right font-semibold">Actions</div>,
    cell: ({ row }) => <DeleteEmployee row={row} />,
  },
];

export function EmployeeListDisplay({
  employeeInfo,
  isPending,
}: {
  employeeInfo: EmployeeInfoType[];
  isPending: boolean;
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: employeeInfo,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="space-y-5 py-3 pr-3 dark:text-white">
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isPending ? (
          <div className="flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
            <Skeleton className="h-10 w-1/2 rounded-xl bg-gray-700" />
            <div className="space-y-2 w-full flex flex-col items-center">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-1/2 bg-gray-700" />
              ))}
            </div>
          </div>
        ) : (
          <Table className="w-full min-w-[600px] text-sm">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="bg-gray-100 dark:bg-gray-800 "
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-gray-700 dark:text-gray-300 font-semibold uppercase text-xs tracking-wide py-3"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
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
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800"
                    } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-3 ">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-gray-500 dark:text-gray-400"
                  >
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
