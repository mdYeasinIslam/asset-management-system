import { AssetRequestType } from "@/Type/Types";

export const TopRequestDisplay = ({ asset }: { asset: AssetRequestType }) => {
  return (
    <div className="bg-[#EFF6FF] dark:bg-slate-900 rounded-lg p-5 flex flex-col border border-[#BFDBFE]">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={asset.company_logo}
          alt={`${asset?.companyName} Logo`}
          className="w-12 h-12 rounded-full bg-black "
        />
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
