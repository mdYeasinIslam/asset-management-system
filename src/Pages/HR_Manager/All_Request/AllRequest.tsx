"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  // VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable, 
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { Badge } from "@/components/ui/badge";
import { RequestAction } from "./RequestAction";
import SkeletonBar from "@/SharedComponent/Skeleton";
import { Button } from "@/components/ui/button";

export type AssetRequestType = {
  assetName: string;
  assetType: string;
  notes: string;
  requesterName: string;
  requesterEmail: string;
  requestDate: string;
  status: string;
};

// ============ Columns ============
export const columns: ColumnDef<AssetRequestType>[] = [
  {
    accessorKey: "assetName",
    header: "Asset Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("assetName")}</div>
    ),
  },
  {
    accessorKey: "assetType",
    header: "Asset Type",
    cell: ({ row }) => <div>{row.getValue("assetType")}</div>,
  },
  {
    accessorKey: "requesterEmail",
    header: "Requester Email",
    cell: ({ row }) => (
      <div className="">{row.getValue("requesterEmail")}</div>
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
    header: "Request Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("requestDate")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("status") === "pending" && (
          <Badge variant="pending">{row.getValue("status")}</Badge>
        )}
        {row.getValue("status") === "approved" && (
          <Badge variant="success">{row.getValue("status")}</Badge>
        )}
        {row.getValue("status") === "rejected" && (
          <Badge variant="destructive">{row.getValue("status")}</Badge>
        )}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => <RequestAction row={row} />,
  },
];

// ============ Component ============
export function AllRequest() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [requestedAssets, isPending] = useAllRequestedAsset();

  const table = useReactTable({
    data: requestedAssets,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <div className="container mx-auto w-full bg-[#F4F8FD] dark:text-white min-h-screen px-1">
      {/* Search input */}
      <div className="flex flex-col lg:flex-row  py-4 gap-3">
        <Input
          placeholder="Search by asset name..."
          value={
            (table.getColumn("assetName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("assetName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>

      {/* Table */}
      <div className="rounded-md border">
        {isPending ? (
          <SkeletonBar />
        ) : (
          <>
            <div className="">
              <Table>
                <TableHeader className="sticky top-0 bg-white dark:bg-neutral-900 z-10">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className="text-black dark:text-white font-medium text-sm md:text-sm"
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
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell
                            key={cell.id}
                            className="text-xs md:text-sm py-3"
                          >
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
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-3 gap-3">
              {/* Left side: Prev/Next */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>

              {/* Middle: Page info */}
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Page{" "}
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </strong>
              </div>

              {/* Right side: page size selector */}
              <select
                className="border rounded-md px-2 py-1 text-sm dark:bg-neutral-900 dark:text-white"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
