import { AssetRequestType } from "@/Type/Types"
import { useEffect, useState } from "react"
import { TopRequestDisplay } from "./TopRequestDisplay";
import { CommonHeading } from "@/SharedComponent/CommonHeading";

export const TopRequests = ({ requestedAssets }: { requestedAssets: AssetRequestType[] }) => {
    const [duplicates, setDuplicates] = useState<AssetRequestType[]>([]);

  useEffect(() => {
    // Find duplicate assetIds
    const grouped = requestedAssets.reduce((acc:any, item) => {
      acc[item.assetId] = (acc[item.assetId] || 0) + 1;
      return acc;
    }, {});

    // Filter items with duplicate assetIds
    const duplicateItems = requestedAssets.filter(
      (item) => grouped[item.assetId] > 1
    );

    // Remove duplicates, keep only one item per assetId
    const uniqueDuplicateItems:any= Object.values(
      duplicateItems.reduce((acc:any, item) => {
        if (!acc[item.assetId]) {
          acc[item.assetId] = item;
        }
        return acc;
      }, {})
    );

    setDuplicates(uniqueDuplicateItems);
  }, []);
   
    const contentPending = <div className="flex flex-col items-center">
    <h1 className="text-3xl uppercase font-semibold leading-tight">Top Most Request</h1>
  </div>
    return (
      <div className="space-y-5 px-5">
            <CommonHeading content={contentPending} />
        <div className={`grid grid-cols-1 md:grid-cols-2  gap-2 ${duplicates?.length>2 && 'lg:grid-cols-3 xl:grid-cols-4'}`}>
            {
                duplicates.map((asset)=><TopRequestDisplay key={asset?._id} asset={asset} />)
            }
        </div>
      </div>
  )
}
