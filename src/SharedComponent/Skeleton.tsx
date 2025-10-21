import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonBar() {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 mt-10">
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
    </div>
  );
}
