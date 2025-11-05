import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { AssetRequestType, AssetType } from "@/Type/Types";
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
  ) as AssetRequestType[];

  const typeWiseAssets = Object.entries(
    assetsData.reduce((acc: any, item: AssetType) => {
      const type = item.type;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {})

  ).map(([type, value]) => ({ type, value }));
  const typeWiseRequest = Object.entries(
    requestedAssets.reduce((acc: any, item: AssetRequestType) => {
      const type = item.assetType;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {})
  ).map(([type, value]) => ({ type, value }));


  if (isPending || isLoading) {
    return <SkeletonBar />;
  }
  return (
    <div className=" py-8 bg-white dark:text-white space-y-10 px-10">
      {/* <HrPagesHeading page="Overview : " /> */}
      <StatsSection
        assetsData={assetsData}
        pendingRequest={pendingRequest}
        typeWiseAssets={typeWiseAssets}
        typeWiseRequest={typeWiseRequest}
      />
      <PendingSection pendingRequest={pendingRequest} />
      {assetsData?.length > 0 && <LimitedStockItem assetData={assetsData} />}
      <TopRequests requestedAssets={requestedAssets} />
      <PieChart requestedAssets={requestedAssets} />
      <EventSection />
      <NoticeSection />
      {/* <Footer /> */}
    </div>
  );
};
