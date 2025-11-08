import { AssetRequestType } from "@/Type/Types";
import { MdImageNotSupported } from "react-icons/md";

export const TopRequestDisplay = ({ asset }: { asset: AssetRequestType }) => {
  return (
    <div className="bg-[#EFF6FF] dark:bg-slate-900 rounded-lg p-5 flex flex-col border border-[#BFDBFE]">
      <div className="flex items-center space-x-4 mb-4">
        {asset?.assetImageUrl ? (
          <img
            src={asset.assetImageUrl}
            alt={`${asset?.companyName} Logo`}
            className="w-12 h-12 rounded-full bg-black "
          />
        ) : (
          <div
            title="Image is not available"
            className="bg-gray-200 flex items-center justify-center rounded-full h-12 w-12  p-1"
          >
            <MdImageNotSupported className="h-6 w-6 " />
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold">{asset?.assetName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {asset?.companyName}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600 flex justify-between font-medium dark:text-gray-200">
          <span className="font-bold">Status:</span>{" "}
          <span className="capitalize">{asset?.status}</span>
        </p>
        <p className="text-sm text-gray-600 flex justify-between font-medium dark:text-gray-200">
          <span className="font-bold">Type:</span>
          <span className="capitalize">{asset?.assetType}</span>
        </p>
        <p className="text-sm text-gray-600 flex justify-between font-medium dark:text-gray-200">
          <span className="font-bold">Request Date:</span>
          <span className="capitalize">{asset?.requestDate}</span>
        </p>
      </div>
    </div>
  );
};
