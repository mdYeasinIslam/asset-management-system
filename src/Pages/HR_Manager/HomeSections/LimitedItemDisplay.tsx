import { AssetType } from "@/Type/Types";

export const LimitedItemDisplay = ({ asset }: { asset: AssetType }) => {
  return (
    <div className=" bg-sky-50 dark:bg-slate-900 shadow-md rounded-lg p-4">
      <div className=" flex flex-col">
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
          <p className="text-sm  dark:text-gray-200 flex justify-between">
            <span className="font-bold">Status:</span>{" "}
            <span className="font-medium text-gray-700">{asset?.status}</span>
          </p>
          <p className="text-sm  dark:text-gray-200 flex justify-between">
            <span className="font-bold">Type:</span> <span className="font-medium text-gray-700">{asset?.type}</span>
          </p>
          <p className="text-sm  dark:text-gray-200 flex justify-between">
            <span className="font-bold">Quantity:</span>
            <span className="font-medium text-gray-700">{asset?.quantity}</span>
          </p>
          <p className="text-sm  dark:text-gray-200 flex justify-between">
            <span className="font-bold">Request Date:</span>
            <span className="font-medium text-gray-700">{asset?.date}</span>
          </p>
        </div>
        {/* <div className="mt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">
                View Details
              </button>
            </div> */}
      </div>
    </div>
  );
};
