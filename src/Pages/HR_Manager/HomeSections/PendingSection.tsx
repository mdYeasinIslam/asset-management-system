import { AssetRequestType } from "@/Type/Types";
import { DisplayPendingRequest } from "../../../SharedComponent/DisplayPendingRequest";
import { CommonHeading } from "@/SharedComponent/CommonHeading";

export const PendingSection = ({
  pendingRequest,
}: {
  pendingRequest: AssetRequestType[];
}) => {
  const contentPending = (
    <div className="flex flex-col items-center ">
      <h1 className="text-2xl uppercase font-medium leading-tight">
        Pending Asset Requests
      </h1>
      <p className="text-gray-800 w-1/2 text-center">
        Find assets as your choice and neccesity. And use them carefully ,may be
        you need to return it to the company.
      </p>
    </div>
  );
  return (
    <div className="space-y-5">
      <CommonHeading content={contentPending} />
      <div
        className={`grid grid-cols-1 md:grid-cols-2  gap-2 ${
          pendingRequest.length > 2
            ? "lg:grid-cols-3 "
            : "lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {pendingRequest?.map((request) => (
          <DisplayPendingRequest key={request._id} request={request} />
        ))}
      </div>
    </div>
  );
};
