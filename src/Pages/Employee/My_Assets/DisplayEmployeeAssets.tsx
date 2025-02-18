
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
import { Input } from "@/components/ui/input"
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
import { Badge } from "@/components/ui/badge"
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { useAuth } from "@/hook/useAuth"
import { ActionBtton } from "./ActionButton"


export type AssetsType = {
  assetName: string
  assetType: string,
  notes: string,
  requesterName: string,
  requesterEmail: string,
  requestDate: string,
  updateDate?: string,
  status:string

}
export const columns: ColumnDef<AssetsType>[] = [
 
    {
    accessorKey: "assetName",
    header: "Asset Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("assetName")}</div>,
    },
  
    {
    accessorKey: "assetType",
    header: "Asset Type",
        cell: ({ row }) => {
          return  <div className="">{row.getValue("assetType")}</div>
        },
    },
    {
    accessorKey: "assetStatus",
    header: "Asset Status",
        cell: ({ row }) => {
          return  <div className="">{row.getValue("assetStatus")}</div>
        },
    },

  
   
   {
    accessorKey: "requestDate",
    header: "Requeste Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("requestDate")}</div>
    ),
  },
   {
    accessorKey: "updateDate",
    header: "Update Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("updateDate") ? row.getValue("updateDate"):"No Updation"}</div>
    ),
  },
   {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        {
          row.getValue('status') == 'pending' && <Badge variant="pending">{row.getValue("status")}</Badge>
        }
        {
          row.getValue('status') == 'approved' && <Badge variant="success">{row.getValue("status")}</Badge>
        }
        {
          row.getValue('status') == 'rejected' && <Badge variant="destructive">{row.getValue("status")}</Badge>
        }
        
      </div>
    ),
  },
 
  {
    id: "actions",
     header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
          return <>
          <ActionBtton row={row} />
          </>
      },
      
  },
]

export function DisplayEmployeeAssets() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
    
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const { user } = useAuth()
    const email =user?.email as string
  const [requestedAssets,isPending] = useAllRequestedAsset(email)
  const table = useReactTable({
    data:requestedAssets,
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
  return (
    <div className="container mx-auto w-full h-full lg:h-[100vh] dark:text-white">
      <div className="flex flex-col lg:flex-row  items-center py-4 gap-3">
            <Input
              placeholder="Search by name..."
              value={(table.getColumn("assetName")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("assetName")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
                  />
           </div>
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
