import { AssetType } from "@/Type/Types"
import { LimitedItemDisplay } from "./LimitedItemDisplay"
import { CommonHeading } from "@/SharedComponent/CommonHeading"

export const LimitedStockItem = ({ assetData }: { assetData: AssetType[] }) => {
    const limitedItems = (assetData?.filter(asset => asset.quantity < 10)).sort((a,b)=>a.quantity -b.quantity)
  
  const contentPending = <div className="flex flex-col items-center">
    <h1 className="text-2xl uppercase font-medium leading-tight">Limited Stock Asset Items</h1>
    <p className="text-gray-800">Find assets as your choice and neccesity. And use them carefully ,may be you need to return it to the company.</p>
  </div>
  return (
    <div className="space-y-5">
      <CommonHeading content={ contentPending} />
       <div className={`grid grid-cols-1 md:grid-cols-2  gap-2 ${assetData.length>2 && 'lg:grid-cols-3 xl:grid-cols-4'}`}>
      {
        limitedItems?.map(asset=><LimitedItemDisplay key={asset._id} asset={asset} />)
      }
    </div>
    </div>
   
  )
}
