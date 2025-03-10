import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { AssetRequestType } from "@/Type/Types"

export const MonthlyRequests = ({ requestedAssets }: { requestedAssets: AssetRequestType[] }) => {

    
  return (
    <Card className="bg-gray-100 dark:bg-slate-900  text-center p-1 md:p-2 rounded-xl duration-500 transition-transform hover:scale-95  shadow-md hover:shadow-lg  ">
        <CardHeader>
            <CardTitle className="text-2xl w-full font-semibold text-gray-800 dark:text-white ">
               Monthly Requests</CardTitle>
        </CardHeader>
        <CardContent>
           <p className="text-4xl font-bold text-blue-600  ">
               {requestedAssets?.length}
              </p>
              <p className="text-gray-600 dark:text-white">You have {requestedAssets?.length} asset requests for this month.</p>
        </CardContent>
    
    </Card>
  )
}
