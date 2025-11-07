import { useAllAssets } from "@/hook/useAllAssets";
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { useEmployeeList } from "@/hook/useEmployeeList";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";
import SkeletonBar from "@/SharedComponent/Skeleton";
import { AssetRequestType, AssetType } from "@/Type/Types";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";

interface IProp {
  typeWiseAssets?: {
    type: string;
    value: unknown;
  }[];
  pendingRequest: AssetRequestType[];
  typeWiseRequest?: {
    type: string;
    value: unknown;
  }[];
  assetsData?: AssetType[];
}

export default function StatsSection({ pendingRequest }: IProp) {
  const [requestedAssets, isLoading] = useAllRequestedAsset();
  const [assetsData, ,] = useAllAssets();

  const [employeeData, isPending] = useEmployeeList();
  const totalApproved = requestedAssets?.filter(
    (data: AssetRequestType) => data.status == "approved"
  );
  //  const totalApproved = requestedAssets?.filter(
  //   (data: AssetRequestType) => data.status == "approved"
  // );
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

  // const limitedItems = assetsData
  //   ?.filter((asset: AssetType) => asset.quantity < 10)
  //   .sort((a: AssetType, b: AssetType) => a.quantity - b.quantity);

  const typeWiseApprovedAsset = Object.entries(
    totalApproved.reduce((acc: any, item: AssetRequestType) => {
      const type = item.assetType;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {})
  ).map(([type, value]) => ({ type, value }));
console.log(typeWiseApprovedAsset)
  if (isPending || isLoading) {
    return <SkeletonBar />;
  }
  return (
    <section className="py-10">
      <div className="container mx-auto rounded-lg shadow-md p-6 space-y-4 bg-white ">
        <SectionHeader
          title="Assets Lifecycle Analytics"
          icon={<IoDocumentTextOutline className="w-5 h-5" />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Total asset stats */}
          <div className="w-full bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-5 ">
            <div className="pb-4">
              <div className="flex items-center gap-2">
                <IoDocumentTextOutline className="w-5 h-5 text-[#2563EB] " />
                <h2 className="text-lg font-semibold text-[#4B5563]">
                  Total Assets
                </h2>
              </div>
              <h4 className="text-[#1F2937] text-2xl font-bold">
                {assetsData?.length < 10
                  ? "0" + assetsData.length
                  : assetsData?.length}
              </h4>
              {/* <div className="flex items-center gap-1">
                <FaArrowTrendUp className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[#16A34A]">+12.5%</p>
                <p className="text-[#6B7280]">vs last period</p>
              </div> */}
            </div>

            {/* stat list */}
            <div className="border-t border-[#E5E7EB]  space-y-3 pt-2">
              <div className="flex justify-between">
                <p className="text-[#4B5563]">Total asset type</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">
                    {typeWiseAssets?.length}
                  </p>
                </div>
              </div>
              <div className=" text-[#1677FF] text-sm hover:underline">
                <Link
                  to={"/admin/assetList"}
                  className="flex items-center gap-1"
                >
                  <button> View details </button>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          {/* Pending asset request stats */}

          <div className="w-full bg-[#FEFCE8] border border-[#BFDBFE] rounded-lg p-5 ">
            <div className="pb-4">
              <div className="flex items-center gap-1">
                <IoMdStopwatch className="w-5 h-5 text-[#CA8A04] " />
                <h2 className="text-lg font-semibold text-[#4B5563]">
                  Pending Assets Request
                </h2>
              </div>
              <h4 className="text-[#1F2937] text-2xl font-bold">
                {pendingRequest?.length < 10
                  ? "0" + pendingRequest.length
                  : pendingRequest?.length}
              </h4>
              {/* <div className="flex items-center gap-1">
                <FaArrowTrendUp className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[#16A34A]">+12.5%</p>
                <p className="text-[#6B7280]">vs last period</p>
              </div> */}
            </div>

            {/* stat list */}
            <div className="border-t border-[#E5E7EB]  space-y-3 pt-2">
              <div className="flex justify-between">
                <p className="text-[#4B5563]"> Asset type</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">
                    {typeWiseRequest?.length}
                  </p>
                </div>
              </div>
              <div className=" text-[#1677FF] text-sm hover:underline">
                <Link
                  to={"/admin/allRequest"}
                  className="flex items-center gap-1"
                >
                  <button> View details </button>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          {/* Approved request stats */}

          <div className="w-full bg-[#F0FDF4] border border-[#BFDBFE] rounded-lg p-5 ">
            <div className="pb-4">
              <div className="flex items-center gap-1">
                <IoMdCheckboxOutline className="w-5 h-5 text-[#16A34A] " />
                <h2 className="text-lg font-semibold text-[#4B5563]">
                  Approved Request
                </h2>
              </div>
              <h4 className="text-[#1F2937] text-2xl font-bold">
                {totalApproved?.length < 10
                  ? "0" + totalApproved.length
                  : totalApproved?.length}
              </h4>
              {/* <div className="flex items-center gap-1">
                <FaArrowTrendUp className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[#16A34A]">+12.5%</p>
                <p className="text-[#6B7280]">vs last period</p>
              </div> */}
            </div>

            {/* stat list */}
            <div className="border-t border-[#E5E7EB]  space-y-3 pt-2">
              <div className="flex justify-between">
                <p className="text-[#4B5563]">Asset type</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">
                    {typeWiseApprovedAsset?.length}
                  </p>
                </div>
              </div>
              <div className=" text-[#1677FF] text-sm hover:underline">
                <Link
                  to={"/admin/allRequest"}
                  className="flex items-center gap-1"
                >
                  <button> View details </button>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          {/* All Employee stats */}

          <div className="w-full bg-[#FEF2F2] border border-[#BFDBFE] rounded-lg p-5 ">
            <div className="pb-4">
              <div className="flex items-center gap-1">
                <GrUserWorker className="w-5 h-5 text-[#2563EB] " />
                <h2 className="text-lg font-semibold text-[#4B5563]">
                  Total Employee
                </h2>
              </div>
              <h4 className="text-[#1F2937] text-2xl font-bold">
                {employeeData?.length < 10
                  ? "0" + employeeData.length
                  : employeeData?.length}
              </h4>
              {/* <div className="flex items-center gap-1">
                <FaArrowTrendUp className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[#16A34A]">+12.5%</p>
                <p className="text-[#6B7280]">vs last period</p>
              </div> */}
            </div>

            {/* stat list */}
            <div className="border-t border-[#E5E7EB]  space-y-3 pt-2">
              <div className="flex justify-between">
                <p className="text-[#4B5563]">Available</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">
                    {employeeData?.length}
                  </p>
                </div>
              </div>
              <div className=" text-[#1677FF] text-sm hover:underline">
                <Link
                  to={"/admin/employeeList"}
                  className="flex items-center gap-1"
                >
                  <button> View details </button>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
