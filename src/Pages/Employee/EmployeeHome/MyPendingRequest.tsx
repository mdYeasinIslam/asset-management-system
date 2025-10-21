import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { AssetRequestType } from "@/Type/Types"

export const MyPendingRequest = ({ requestedAssets }: { requestedAssets: AssetRequestType[] }) => {
    
    const pendingRequest = requestedAssets.filter((asset)=>asset.status.toLowerCase()=='pending')
  return (
    <Card className= "w-full bg-gray-100 dark:bg-slate-700 p-1 text-center md:p-2 rounded-xl duration-500 transition-transform hover:scale-95  shadow-md hover:shadow-lg  ">
        <CardHeader>
            <CardTitle className="text-2xl w-full font-semibold text-gray-800 dark:text-white ">
              Pending Requests :
              </CardTitle>
        </CardHeader>
        <CardContent>
             <p className="text-4xl font-bold text-blue-600 text-center">
                {pendingRequest?.length}
              </p>
              <p className="text-gray-600 text-center dark:text-white">You currently have {pendingRequest?.length} pending asset requests.</p>
        </CardContent>
    </Card>
  )
}
