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

import { Button } from "@/components/ui/button";
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
import { useAllAssets } from "@/hook/useAllAssets";
import ActionCell from "./ ActionCell";
import {
  SelectTrigger,
  Select,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import SkeletonBar from "@/SharedComponent/Skeleton";

export type AssetType = {
  _id: string;
  name: string;
  type: string;
  date: string;
  quantity: number;
};

export const columns: ColumnDef<AssetType>[] = [
  {
    accessorKey: "name",
    header: "Asset Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },

  {
    accessorKey: "type",
    header: "Asset Type",
    cell: ({ row }) => {
      return <div className="">{row.getValue("type")}</div>;
    },
  },

  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center">Quantity</div>,
    cell: ({ row }) => {
      const quantity = parseInt(row.getValue("quantity"));
      return <div className="text-center font-medium">{`${quantity}`}</div>;
    },
    filterFn: (row, columnId, filterValue) => {
      const quantity = Number(row.getValue(columnId)); // Convert quantity to number
      if (filterValue === "available") {
        return quantity > 0;
      }
      if (filterValue === "outOfStock") {
        return quantity === 0;
      }
      return true; // Default: Show all
    },
    enableSorting: true, // Enable sorting
    sortingFn: (a, b) => {
      // Custom sorting function for string quantity
      const aQuantity = Number(a.original.quantity) || 0;
      const bQuantity = Number(b.original.quantity) || 0;
      return aQuantity - bQuantity;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => <ActionCell row={row} />,
  },
];

export function DisplayAssets() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [assetsData, isPending] = useAllAssets();

  const table = useReactTable({
    data: assetsData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
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
  });

  // Filter section ----------------------------------------------------------------------------------------------------------------------
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );
  const handleFilterChange = (type: string | undefined) => {
    setSelectedType(type);
    table.getColumn("type")?.setFilterValue(type ?? "");
  };

  const clearFilter = () => {
    handleFilterChange(undefined);
  };
  const types = [
    ...new Set(table.getRowModel().rows.map((row) => row.original.type)),
  ];

  const handleQuantityFilter = (filterStatus: "available" | "outOfStock") => {
    if (filterStatus == "available") {
      table.getColumn("quantity")?.setFilterValue(filterStatus);
    }
    if (filterStatus == "outOfStock") {
      table.getColumn("quantity")?.setFilterValue(filterStatus);
    }
  };
  const handleSort = (direction: "asc" | "desc") => {
    table.setSorting([{ id: "quantity", desc: direction === "desc" }]);
  };
  if (isPending) {
    return <SkeletonBar/>
  }
  return (
    <div className=" dark:text-white   w-full">
      <div className="flex flex-col lg:flex-row  items-center py-4 gap-3">
        <Input
          placeholder="Search by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex gap-4">
          <div>
            <Select
              onValueChange={(value) => handleFilterChange(value)}
              // value={selectedType ??''}
            >
              <SelectTrigger className="max-w-xs">
                <span>{selectedType || "Filter by Type"}</span>
              </SelectTrigger>
              <SelectContent>
                {types.map((type, idx) => (
                  <SelectItem
                    className="bg-white hover:bg-primary hover:text-white"
                    key={idx}
                    value={type}
                  >
                    {type}
                  </SelectItem>
                ))}
                {selectedType && (
                  <Button
                    onClick={clearFilter}
                    className="bg-white text-black hover:bg-primary hover:text-white w-full"
                  >
                    Show all
                  </Button>
                )}
              </SelectContent>
            </Select>
          </div>
          {/* --------------------filter by stock------------------------- */}
          <div>
            <Select
              onValueChange={(value) => handleFilterChange(value)}
              // value={selectedType ??''}
            >
              <SelectTrigger className="max-w-lg md:max-w-xs">
                <span> Filter by Stock</span>
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleQuantityFilter("available")}
                    className="bg-white text-black hover:bg-primary hover:text-white w-full"
                  >
                    Available
                  </Button>
                  <Button
                    onClick={() => handleQuantityFilter("outOfStock")}
                    className="bg-white text-black hover:bg-primary hover:text-white w-full"
                  >
                    Out of stock
                  </Button>
                  <Button
                    onClick={() =>
                      table.getColumn("quantity")?.setFilterValue("")
                    }
                    className="bg-white text-black hover:bg-primary hover:text-white w-full"
                  >
                    Show all
                  </Button>
                </div>
              </SelectContent>
            </Select>
          </div>
          {/* -----------sorting by quantity---------------------------- */}
          <div>
            <Select onValueChange={(value) => handleFilterChange(value)}>
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
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        {isPending ? (
          <SkeletonBar />
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="text-black dark:text-white font-medium "
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
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
                    No Asset add by you.
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
