import { AssetRequestType } from "@/Type/Types"

export const TopRequestDisplay = ({asset}:{asset:AssetRequestType}) => {
  return (
    <div
            
            className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-4 flex flex-col"
          >
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
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Status:</span>{" "}
                {asset?.status}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Type:</span> {asset?.assetType}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span className="font-bold">Request Date:</span>{" "}
                {asset.requestDate}
              </p>

            </div>
         
          </div>
  )
}
