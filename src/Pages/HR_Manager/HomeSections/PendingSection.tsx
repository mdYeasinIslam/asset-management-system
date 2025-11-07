import { AssetRequestType } from "@/Type/Types";
import { DisplayPendingRequest } from "../../../SharedComponent/DisplayPendingRequest";
import { CommonHeading } from "@/SharedComponent/CommonHeading";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";
import { IoMdStopwatch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      {/* <CommonHeading content={contentPending} /> */}
      <SectionHeader
        title=" Pending Asset Requests"
        icon={<IoMdStopwatch className="w-5 h-5 text-blue-500 " />}
      />
      <div
        className={`grid grid-cols-1 md:grid-cols-2  gap-2 ${
          pendingRequest.length > 2
            ? "lg:grid-cols-3 "
            : "lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {pendingRequest.slice(0, 6)?.map((request) => (
          <DisplayPendingRequest key={request._id} request={request} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link to={"/admin/allRequest"}>
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-[#2563EB] border-2 border-[#2563EB]"
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};
