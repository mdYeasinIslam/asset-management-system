import { AssetRequestType } from "@/Type/Types"

export const DisplayPendingRequest = ({ request }: { request: AssetRequestType }) => {
  return (
   <div
            className="bg-white dark:bg-slate-700 dark:text-white shadow-md rounded-lg p-4 flex flex-col"
          >
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
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Status:</span>{" "}
                {request.assetStatus}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Type:</span> {request.assetType}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Requester:</span>{" "}
                {request.requesterName} ({request.requesterRole})
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Request Date:</span>{" "}
                {request.requestDate}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Notes:</span> {request.notes}
              </p>
            </div>
            {/* <div className="mt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">
                View Details
              </button>
            </div> */}
          </div>
  )
}
