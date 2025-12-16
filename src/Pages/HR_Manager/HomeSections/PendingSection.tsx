import { AssetRequestType } from "@/Type/Types";
import { DisplayPendingRequest } from "../../../SharedComponent/DisplayPendingRequest";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";
import { IoMdStopwatch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Paths from "@/base/constant/Paths";

export const PendingSection = ({
  pendingRequest,
}: {
  pendingRequest: AssetRequestType[];
}) => {
  return (
    <div className="space-y-5 bg-white p-6">
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
        <Link to={Paths.admin.allRequest}>
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
