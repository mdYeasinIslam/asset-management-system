import { AssetType } from "@/Type/Types";

export const LimitedItemDisplay = ({ asset }: { asset: AssetType }) => {
  return (
    <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={asset.companyLogo}
          alt={`${asset?.companyName} Logo`}
          className="w-12 h-12 rounded-full bg-black dark:bg-white"
        />
        <div>
          <h2 className="text-lg font-semibold">{asset?.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {asset?.companyName}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <span className="font-bold">Status:</span> {asset?.status}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <span className="font-bold">Type:</span> {asset?.type}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <span className="font-bold">Quantity:</span> {asset.quantity}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-200">
          <span className="font-bold">Request Date:</span> {asset.date}
        </p>
      </div>
      {/* <div className="mt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">
                View Details
              </button>
            </div> */}
    </div>
  );
};
