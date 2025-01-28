import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { MonthlyRequests } from "./MonthlyRequests"
import { MyPendingRequest } from "./MyPendingRequest"
import { useAuth } from "@/hook/useAuth"
import { Skeleton } from "@/components/ui/skeleton"
import { DisplayPendingRequest } from "../../../SharedComponent/DisplayPendingRequest"
import { AssetRequestType } from "@/Type/Types"
import { CommonHeading } from "@/SharedComponent/CommonHeading"
import { EventSecton } from "./EventSection/EventSection"
import Calendar from "./EventSection/Calendar"

export const EHome = () => {
   const {user} =useAuth()
      const email = user?.email as string
  const [requestedAssets, isPending] = useAllRequestedAsset(email)
    const pendingRequest = requestedAssets.filter((asset:AssetRequestType)=>asset.status.toLowerCase()=='pending')

  if (isPending) {
    return  <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
          </div>
  }
  const contentPending = <div className="flex flex-col items-center">
    <h1 className="text-2xl uppercase font-medium leading-tight">Pending Asset Requests</h1>
    <p className="text-gray-800">Find assets as your choice and neccesity. And use them carefully ,may be you need to return it to the company.</p>
  </div>
  const contentMonthly = <div className="flex flex-col items-center">
    <h1 className="text-2xl uppercase font-medium leading-tight">Monthly Asset Requests</h1>
    <p className="text-gray-800">Find assets as your choice and neccesity. And use them carefully ,may be you need to return it to the company.</p>
  </div>
  
 

  return (
    <div className="container mx-auto space-y-10 mt-10">
      <div className="flex px-1 gap-2 items-center justify-center ">
        <MyPendingRequest requestedAssets={ requestedAssets} />
        <MonthlyRequests requestedAssets={ requestedAssets}/>
      </div>
      <div className="space-y-10">
        <CommonHeading content={contentPending} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {
            pendingRequest.map((asset : AssetRequestType) => <DisplayPendingRequest key={asset._id} request={asset} />)
          }
          </div>
      </div>
      <div className="space-y-10">
        <CommonHeading content={contentMonthly} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {
            requestedAssets.map((asset : AssetRequestType) => <DisplayPendingRequest key={asset._id} request={asset} />)
          }
          </div>
      </div>
      <div className="grid lg:grid-cols-2">
        
      <EventSecton />
      <Calendar/>
      </div>
     
    </div>
  )
}
