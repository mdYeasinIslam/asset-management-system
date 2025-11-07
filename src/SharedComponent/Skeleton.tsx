import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonBar() {
  return (
    <div className="h-screen flex flex-col items-center gap-3 mt-10">
      
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-2/3 bg-gray-200" />
    </div>
  );
}
