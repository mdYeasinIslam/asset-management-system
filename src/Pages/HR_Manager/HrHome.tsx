import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { AssetRequestType, HrDataType } from "@/Type/Types";
import { PendingSection } from "./HomeSections/PendingSection";
import { useAllAssets } from "@/hook/useAllAssets";
import { LimitedStockItem } from "./HomeSections/LimitedStockItem";
import { TopRequests } from "./HomeSections/TopRequests";
import PieChart from "./HomeSections/PieChart";
import NoticeSection from "./HomeSections/NoticeSection";
import SkeletonBar from "@/SharedComponent/Skeleton";
import StatsSection from "./HomeSections/StatsSection";
import EventSection from "../Employee/EmployeeHome/EventSection/EventSection";
import { useUsersData } from "@/hook/useUsersData";

export const HrHome = () => {
  const [requestedAssets, isPending] = useAllRequestedAsset();
  const [assetsData, , , isLoading] = useAllAssets();
  const [usersData] = useUsersData();
  console.log(usersData);
  const pendingRequest = requestedAssets?.filter(
    (asset: AssetRequestType) => asset.status == "pending"
  ) as AssetRequestType[];
  
  if (isPending || isLoading) {
    return <SkeletonBar />;
  }
  return (
    <div className=" py-8 bg-[#F4F8FD] dark:text-white space-y-10 px-5">
      {/* <HrPagesHeading page="Overview : " /> */}
      <StatsSection pendingRequest={pendingRequest} />
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
