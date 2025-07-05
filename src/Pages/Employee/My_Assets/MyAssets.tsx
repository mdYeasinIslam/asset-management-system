import { Skeleton } from "@/components/ui/skeleton"
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { useAuth } from "@/hook/useAuth"
import { DisplayEmployeeAssets } from "./DisplayEmployeeAssets"
import HrPagesHeading from "@/SharedComponent/HrPagesHeading"

export const MyAssets = () => {
  const { user } = useAuth()
  const email=user?.email as string
  const [, isPending] = useAllRequestedAsset(email)
  if (isPending) {
    return  <div className=" flex flex-col items-center justify-center gap-1 space-y-5 mt-10">
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
                    <Skeleton className="h-4 w-1/2 bg-gray-700" />
             </div>
  }
  return (
    <div className="h-screen">
      <HrPagesHeading page="My Assets"/>
      <DisplayEmployeeAssets />
    </div>
  )
}