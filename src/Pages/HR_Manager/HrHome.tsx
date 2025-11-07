import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { AssetRequestType } from "@/Type/Types";
import { PendingSection } from "./HomeSections/PendingSection";
import { useAllAssets } from "@/hook/useAllAssets";
import { TopRequests } from "./HomeSections/TopRequests";
import PieChart from "./HomeSections/PieChart";
import NoticeSection from "./HomeSections/NoticeSection";
import SkeletonBar from "@/SharedComponent/Skeleton";
import StatsSection from "./HomeSections/StatsSection";
import EventSection from "../Employee/EmployeeHome/EventSection/EventSection";
import LimitedStockItem from "./HomeSections/LimitedStockItem";
import OutOfStock from "./HomeSections/OutOfStock";
import AssetUsageBarChart from "./HomeSections/AssetUsageBarChart";

export const HrHome = () => {
  const [requestedAssets, isPending] = useAllRequestedAsset();
  const [assetsData, , , isLoading] = useAllAssets();
  const pendingRequest = requestedAssets?.filter(
    (asset: AssetRequestType) => asset.status == "pending"
  ) as AssetRequestType[];
  
  if (isPending || isLoading) {
    return <SkeletonBar />;
  }
  return (
    <div className=" lg:py-8 bg-[#F4F8FD] dark:text-white space-y-10 pr-0 lg:pr-5">
      {/* <HrPagesHeading page="Overview : " /> */}
      <StatsSection pendingRequest={pendingRequest} />
      <PendingSection pendingRequest={pendingRequest} />
      {assetsData?.length > 0 && <LimitedStockItem assetData={assetsData} />}
      <OutOfStock assetData={assetsData} />
      <TopRequests requestedAssets={requestedAssets} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <PieChart requestedAssets={requestedAssets} />
        <AssetUsageBarChart assetsData={assetsData} />
      </div>
      <EventSection />
      <NoticeSection />
      {/* <Footer /> */}
    </div>
  );
};
