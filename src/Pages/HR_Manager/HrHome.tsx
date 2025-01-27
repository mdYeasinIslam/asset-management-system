import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { AssetRequestType } from "@/Type/Types"
import { PendingSection } from "./HomeSections/PendingSection"
import { Skeleton } from "@/components/ui/skeleton"
import { useAllAssets } from "@/hook/useAllAssets"
import { LimitedStockItem } from "./HomeSections/LimitedStockItem"
import { TopRequests } from "./HomeSections/TopRequests"
import PieChart from "./HomeSections/PieChart"
import { EventSecton } from "../Employee/EmployeeHome/EventSection/EventSection"
import NoticeSection from "./HomeSections/NoticeSection"

export const HrHome = () => {
  const [requestedAssets, isPending,] = useAllRequestedAsset()
  const [assetsData, , ,isLoading] =useAllAssets()
  const pendingRequest = requestedAssets?.filter((asset: AssetRequestType) => asset.status == 'pending')
  

  if (isPending || isLoading) {
    return  <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
            </div>
  }
  return (
    <div className="container mx-auto my-10 space-y-16">
      <PendingSection pendingRequest={pendingRequest} />
      <LimitedStockItem assetData={assetsData} />
      <TopRequests requestedAssets={requestedAssets} />
      <PieChart requestedAssets={requestedAssets} />
      <EventSecton />
      <NoticeSection/>
    </div>
  )
}
