
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

import { Button } from "@/components/ui/button"
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
import { useAllAssets } from "@/hook/useAllAssets"
import { Skeleton } from "@/components/ui/skeleton"
import { SelectTrigger,Select, SelectContent, SelectItem } from "@/components/ui/select"
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { Badge } from "@/components/ui/badge"


export type Payment = {
  //   _id: string
  //   name: string
  //   type: string
  //   date: string
  // quantity: number
    

  assetName: string
  assetType: string,
  notes: string,
  requesterName: string,
  requesterEmail: string,
  requestDate: string,
  status:string

}

export const columns: ColumnDef<Payment>[] = [
 
    {
    accessorKey: "assetName",
    header: "Product Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("assetName")}</div>,
    },
  
    {
    accessorKey: "assetType",
    header: "Product Type",
        cell: ({ row }) => {
          return  <div className="">{row.getValue("assetType")}</div>
        },
    },

   {
    accessorKey: "requesterEmail",
    header: "Requester Email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("requesterEmail")}</div>
    ),
  },
   {
    accessorKey: "requesterName",
    header: "Requester Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("requesterName")}</div>
    ),
  },
   {
    accessorKey: "requestDate",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("requestDate")}</div>
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
          row.getValue('status') == 'success' && <Badge variant="success">{row.getValue("status")}</Badge>
        }
        {
          row.getValue('status') == 'reject' && <Badge variant="destructive">{row.getValue("status")}</Badge>
        }
        
      </div>
    ),
  },
 
  {
    id: "actions",
     header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => <div className="text-right">Reject</div>,
      // cell: ({ row }) => <ActionCell row={row} />,
  },
]

export function AllRequest() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [assetsData, isPending] = useAllAssets()
  const [requestedAssets] = useAllRequestedAsset()
  console.log(requestedAssets)

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
    
    // Filter section ----------------------------------------------------------------------------------------------------------------------
  //   const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  //   const handleFilterChange = (type: string | undefined) => {
  //       setSelectedType(type);
  //       table.getColumn("type")?.setFilterValue(type ?? ""); 
  //   };

  //   const clearFilter = () => {
  //       handleFilterChange(undefined);
  //   };
  //   const types = [...new Set(table.getRowModel().rows.map((row) => row.original.type))];
    
  //   const handleQuantityFilter = (filterStatus:"available" | "outOfStock") => {
  //       if (filterStatus == 'available') {
  //           table.getColumn('quantity')?.setFilterValue(filterStatus)
  //       }
  //       if (filterStatus == 'outOfStock') {
  //           table.getColumn('quantity')?.setFilterValue(filterStatus)
  //       }
  //   }
  // const handleSort = (direction: "asc" | "desc") => {
  //   table.setSorting([{ id: "quantity", desc: direction === "desc" }]);
  // };
  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-col lg:flex-row  items-center py-4 gap-3">
        <Input
          placeholder="Search by name..."
          value={(table.getColumn("assetName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("assetName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
              />
              <div className="flex gap-4">         
                {/* <div>
                <Select
                        onValueChange={(value) => handleFilterChange(value)}
                    >
                        <SelectTrigger className="max-w-xs">
                        <span>{selectedType || "Filter by Type"}</span>
                        </SelectTrigger>
                        <SelectContent>
                                {types.map((type, idx) => (
                            <SelectItem className="bg-white hover:bg-primary hover:text-white" key={idx} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    {selectedType &&<Button onClick={clearFilter} className="bg-white text-black hover:bg-primary hover:text-white w-full">Show all</Button>} 
                        </SelectContent>
                    </Select>    
                    </div>     */}
                    {/* --------------------filter by stock------------------------- */}
                {/* <div>
                <Select
                        onValueChange={(value) => handleFilterChange(value)}
                        // value={selectedType ??''}
                    >
                        <SelectTrigger className="max-w-lg md:max-w-xs">
                        <span> Filter by Stock</span>
                        </SelectTrigger>
                            <SelectContent>
                                <div className="flex flex-col gap-2">
                                    
                                <Button onClick={()=>handleQuantityFilter('available')} className="bg-white text-black hover:bg-primary hover:text-white w-full">Available</Button>
                                <Button onClick={()=>handleQuantityFilter('outOfStock')} className="bg-white text-black hover:bg-primary hover:text-white w-full">Out of stock</Button>
                                <Button onClick={() => table.getColumn("quantity")?.setFilterValue("")}  className="bg-white text-black hover:bg-primary hover:text-white w-full">Show all</Button>
                                </div>
                                
                        </SelectContent>
                    </Select>    
                </div>     */}
                    {/* -----------sorting by quantity---------------------------- */}
                {/* <div>
                <Select
                        onValueChange={(value) => handleFilterChange(value)}
                    >
                        <SelectTrigger className="max-w-xs">
                        <span> "Sorting"</span>
                        </SelectTrigger>
                            <SelectContent>
                                <div className="flex flex-col gap-2">
                                    
                                    <Button
                                        onClick={() => handleSort("asc")}
                                        variant="outline"
                                        className="capitalize"
                                    >
                                        Sort by Quantity (Ascending)
                                    </Button>
                                    <Button
                                        onClick={() => handleSort("desc")}
                                        variant="outline"
                                        className="capitalize"
                                    >
                                        Sort by Quantity (Descending)
                                    </Button>
                                </div>
                                
                        </SelectContent>
                    </Select>    
                </div>     */}
            </div>
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
                    <TableHead key={header.id} className="text-black font-medium ">
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
