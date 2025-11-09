import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { MonthlyRequests } from "./MonthlyRequests";
import { MyPendingRequest } from "./MyPendingRequest";
import { useAuth } from "@/hook/useAuth";
import { DisplayPendingRequest } from "../../../SharedComponent/DisplayPendingRequest";
import { AssetRequestType } from "@/Type/Types";
import SkeletonBar from "@/SharedComponent/Skeleton";
import { TotalRequests } from "./TotalRequest";
import EventSection from "./EventSection/EventSection";
import HrPagesHeading from "@/SharedComponent/HrPagesHeading";
import { IoMdStopwatch } from "react-icons/io";
import { BiCalendarEvent } from "react-icons/bi";

export const EHome = () => {
  const { user } = useAuth();
  const email = user?.email as string;
  const [requestedAssets, isPending] = useAllRequestedAsset(email);
  const pendingRequest = requestedAssets.filter(
    (asset: AssetRequestType) => asset.status.toLowerCase() == "pending"
  );
 
  if (isPending) {
    return <SkeletonBar/> 
  }

  return (
    <div className="  space-y-10 mt-10 dark:text-white">
      <div className=" flex gap-2 items-center justify-between ">
        <TotalRequests requestedAssets={requestedAssets} />
        <MyPendingRequest requestedAssets={requestedAssets} />
        <MonthlyRequests requestedAssets={requestedAssets} />
      </div>
      <div className="space-y-3">
        <HrPagesHeading
          title={"Pending Asset Requests"}
          icon={<IoMdStopwatch className="w-5 h-5 text-blue-500 " />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {pendingRequest.map((asset: AssetRequestType) => (
            <DisplayPendingRequest key={asset._id} request={asset} />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <HrPagesHeading
          title={"Monthly Asset Requests"}
          icon={<BiCalendarEvent className="w-5 h-5 text-blue-500 " />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {requestedAssets.map((asset: AssetRequestType) => (
            <DisplayPendingRequest key={asset._id} request={asset} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <EventSection />
        {/* <Calendar /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
