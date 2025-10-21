import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { MonthlyRequests } from "./MonthlyRequests";
import { MyPendingRequest } from "./MyPendingRequest";
import { useAuth } from "@/hook/useAuth";
import { DisplayPendingRequest } from "../../../SharedComponent/DisplayPendingRequest";
import { AssetRequestType } from "@/Type/Types";
import { CommonHeading } from "@/SharedComponent/CommonHeading";
import { EventSecton } from "./EventSection/EventSection";
import Calendar from "./EventSection/Calendar";
import SkeletonBar from "@/SharedComponent/Skeleton";
import { TotalRequests } from "./TotalRequest";

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
  const contentPending = (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl uppercase font-medium leading-tight">
        Pending Asset Requests
      </h1>
      <p className="text-gray-800">
        Find assets as your choice and neccesity. And use them carefully ,may be
        you need to return it to the company.
      </p>
    </div>
  );
  const contentMonthly = (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl uppercase font-medium leading-tight">
        Monthly Asset Requests
      </h1>
      <p className="text-gray-800">
        Find assets as your choice and neccesity. And use them carefully ,may be
        you need to return it to the company.
      </p>
    </div>
  );
 
  return (
    <div className="  space-y-10 mt-10 dark:text-white">
      <div className=" flex gap-2 items-center justify-between ">
        <TotalRequests requestedAssets={requestedAssets} />
        <MyPendingRequest requestedAssets={requestedAssets} />
        <MonthlyRequests requestedAssets={requestedAssets} />
      </div>
      <div className="space-y-10">
        <CommonHeading content={contentPending} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {pendingRequest.map((asset: AssetRequestType) => (
            <DisplayPendingRequest key={asset._id} request={asset} />
          ))}
        </div>
      </div>
      <div className="space-y-10">
        <CommonHeading content={contentMonthly} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {requestedAssets.map((asset: AssetRequestType) => (
            <DisplayPendingRequest key={asset._id} request={asset} />
          ))}
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-2">
        <EventSecton />
        <Calendar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
