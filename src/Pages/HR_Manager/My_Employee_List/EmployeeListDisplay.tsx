
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
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { CommonHeading } from "@/SharedComponent/CommonHeading"
import { DeleteEmployee } from "./DeleteEmployee"


export type EmployeeInfoType = {
  employeeName: string,
  employeePhoto: string,
  EmployeeRole:string

}

export const columns: ColumnDef<EmployeeInfoType>[] = [
  {
    accessorKey: "Employee_photo",
    header: "Member Imagee",
        cell: ({ row }) => {
          return <div className="">
            <img src={row.getValue("Employee_photo")} className="w-12 h-12 rounded-xl" alt="" />
          </div>
        },
    }, 
    {
    accessorKey: "Employee_Name",
    header: "Member Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("Employee_Name")}</div>,
    },
  {
    id: "actions",
     header: () => <div className="text-right">Actions</div>,
      // cell: ({ row }) => <div className="text-right">Remove</div>,
      cell: ({ row }) => <DeleteEmployee row={row} />,
  },
]

export function EmployeeListDisplay({employeeInfo,isPending}:{employeeInfo:EmployeeInfoType[],isPending:boolean}) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  
  const table = useReactTable({
    data:employeeInfo,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
    
    const contentPending = <div className="flex flex-col items-center">
    <h1 className="text-2xl uppercase font-medium leading-tight">Your Employees List</h1>
  </div>
  return (
    <div className="max-w-4xl mx-auto w-full space-y-5 dark:text-white">
      <CommonHeading content={contentPending} />
          <div className="rounded-md border">
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
          </div>
         :

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-black dark:text-white font-medium ">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
         }
      </div>
    
    </div>
  )
}
