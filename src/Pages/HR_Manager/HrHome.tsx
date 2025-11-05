import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { AssetRequestType } from "@/Type/Types";
import { PendingSection } from "./HomeSections/PendingSection";
import { useAllAssets } from "@/hook/useAllAssets";
import { LimitedStockItem } from "./HomeSections/LimitedStockItem";
import { TopRequests } from "./HomeSections/TopRequests";
import PieChart from "./HomeSections/PieChart";
import NoticeSection from "./HomeSections/NoticeSection";
import SkeletonBar from "@/SharedComponent/Skeleton";
import StatsSection from "./HomeSections/StatsSection";
import EventSection from "../Employee/EmployeeHome/EventSection/EventSection";

export const HrHome = () => {
  const [requestedAssets, isPending] = useAllRequestedAsset();
  const [assetsData, , , isLoading] = useAllAssets();
  const pendingRequest = requestedAssets?.filter(
    (asset: AssetRequestType) => asset.status == "pending"
  );

  if (isPending || isLoading) {
    return (<SkeletonBar/>);
  }
  return (
    <div className=" py-8 bg-white dark:text-white space-y-10 px-10">
      {/* <HrPagesHeading page="Overview : " /> */}
      <StatsSection />
      <PendingSection pendingRequest={pendingRequest} />
      {assetsData?.length > 0&& <LimitedStockItem assetData={assetsData} />}
      <TopRequests requestedAssets={requestedAssets} />
      <PieChart requestedAssets={requestedAssets} />
      <EventSection />
      <NoticeSection />
      {/* <Footer /> */}
    </div>
  );
};
