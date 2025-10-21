import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { AssetRequestType } from "@/Type/Types";
import { PendingSection } from "./HomeSections/PendingSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllAssets } from "@/hook/useAllAssets";
import { LimitedStockItem } from "./HomeSections/LimitedStockItem";
import { TopRequests } from "./HomeSections/TopRequests";
import PieChart from "./HomeSections/PieChart";
import { EventSecton } from "../Employee/EmployeeHome/EventSection/EventSection";
import NoticeSection from "./HomeSections/NoticeSection";
import HrPagesHeading from "@/SharedComponent/HrPagesHeading";
import Loader from "@/SharedComponent/Loader";

export const HrHome = () => {
  const [requestedAssets, isPending] = useAllRequestedAsset();
  const [assetsData, , , isLoading] = useAllAssets();
  const pendingRequest = requestedAssets?.filter(
    (asset: AssetRequestType) => asset.status == "pending"
  );

  if (isPending || isLoading) {
    return (
      <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
        {/* <Skeleton className="h-4 w-2/3 bg-gray-700" />
        <Skeleton className="h-4 w-2/3 bg-gray-700" />
        <Skeleton className="h-4 w-2/3 bg-gray-700" />
        <Skeleton className="h-4 w-2/3 bg-gray-700" /> */}
        <Loader/>
      </div>
    );
  }
  console.log(assetsData);
  return (
    <div className=" pt-10 space-y-16 dark:text-white">
      <HrPagesHeading page="Asset Overview" />
      <PendingSection pendingRequest={pendingRequest} />
      {assetsData?.length > 0&& <LimitedStockItem assetData={assetsData} />}
      <TopRequests requestedAssets={requestedAssets} />
      <PieChart requestedAssets={requestedAssets} />
      <EventSecton />
      <NoticeSection />
      {/* <Footer /> */}
    </div>
  );
};
