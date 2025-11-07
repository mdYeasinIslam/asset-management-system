import { AssetRequestType } from "@/Type/Types";

export const DisplayPendingRequest = ({
  request,
}: {
  request: AssetRequestType;
}) => {
  return (
    <div className="bg-[#EFF6FF] border border-[#BFDBFE] dark:bg-slate-700 dark:text-white  rounded-lg p-4 flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={request.company_logo}
          alt={`${request.companyName} Logo`}
          className="w-12 h-12 rounded-full bg-black"
        />
        <div>
          <h2 className="text-lg font-semibold">{request.assetName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {request.companyName}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm flex justify-between text-slate-700 font-medium  dark:text-gray-200">
          <span className="font-bold">Status:</span>
          <span>{request.assetStatus}</span>
        </p>
        <p className="text-sm flex justify-between text-slate-700 font-medium  dark:text-gray-200">
          <span className="font-bold">Type:</span>
          <span>{request.assetType}</span>
        </p>
        <p className="text-sm flex justify-between text-slate-700 font-medium  dark:text-gray-200">
          <span className="font-bold">Requester:</span>
          <span>{request.requesterName}</span>
        </p>
        <p className="text-sm flex justify-between text-slate-700 font-medium  dark:text-gray-200">
          <span className="font-bold">Request Date:</span>
          <span>{request.requestDate}</span>
        </p>
        <p className="text-sm flex justify-between text-slate-700 font-medium  dark:text-gray-200">
          <span className="font-bold">Notes:</span>
          <button
            title={request.notes}
            className="border border-blue-400 rounded-xl px-2 text-blue-500 hover:underline hover:text-blue-700 hover:border-blue-700"
          >
            Touch me
          </button>
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
