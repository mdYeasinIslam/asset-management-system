import { useAllAssets } from "@/hook/useAllAssets";
import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset";
import { AssetRequestType, AssetType } from "@/Type/Types";
import { FaArrowRightLong, FaArrowTrendUp } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function StatsSection() {
  const [requestedAssets, isPending] = useAllRequestedAsset();
  const [assetsData, , , isLoading] = useAllAssets();
  // const newArr = new Array(1).fill([...requestedAssets, ...assetsData])
  const pendingRequest = requestedAssets?.filter(
    (asset: AssetRequestType) => asset.status == "pending"
  );
  const typeWiseAssets = Object.entries(
    assetsData.reduce((acc: any, item: AssetType) => {
      const type = item.type;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));
const typeWiseRequest = Object.entries(
  requestedAssets.reduce((acc: any, item: AssetRequestType) => {
    const type = item.assetType;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({ name, value }));

    
  console.log(typeWiseRequest);

  return (
    <section className="">
      <div className="container mx-auto rounded-lg shadow-md p-6 space-y-4 bg-white ">
        <div className="flex items-center gap-2">
          <IoDocumentTextOutline className="w-5 h-5" />
          <h2 className="text-xl font-bold">Application Lifecycle Analytics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Total asset stats */}
          <div className="w-full bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-5 ">
            <div className="pb-4">
              <div className="flex items-center gap-2">
                <IoDocumentTextOutline className="w-4 h-4 text-[#2563EB] " />
                <h2 className="text-lg font-semibold text-[#4B5563]">
                  Total Assets
                </h2>
              </div>
              <h4 className="text-[#1F2937] text-2xl font-bold">
                {assetsData?.length < 10
                  ? "0" + assetsData.length
                  : assetsData?.length}
              </h4>
              <div className="flex items-center gap-1">
                <FaArrowTrendUp className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[#16A34A]">+12.5%</p>
                <p className="text-[#6B7280]">vs last period</p>
              </div>
            </div>

            {/* stat list */}
            <div className="border-t border-[#E5E7EB]  space-y-3">
              <div className="flex justify-between">
                <p className="text-[#4B5563]">Total type</p>
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

          <div className="w-full bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-5 ">
            <div className="pb-4">
              <div className="flex items-center gap-1">
                <IoDocumentTextOutline className="w-4 h-4 text-[#2563EB] " />
                <h2 className="text-lg font-semibold text-[#4B5563]">
                  Pending Assets Request
                </h2>
              </div>
              <h4 className="text-[#1F2937] text-2xl font-bold">
                {pendingRequest?.length < 10
                  ? "0" + pendingRequest.length
                  : pendingRequest?.length}
              </h4>
              <div className="flex items-center gap-1">
                <FaArrowTrendUp className="w-4 h-4 text-[#16A34A]" />
                <p className="text-[#16A34A]">+12.5%</p>
                <p className="text-[#6B7280]">vs last period</p>
              </div>
            </div>

            {/* stat list */}
            <div className="border-t border-[#E5E7EB]  space-y-3">
              <div className="flex justify-between">
                <p className="text-[#4B5563]">Total type</p>
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
        </div>
      </div>
    </section>
  );
}
