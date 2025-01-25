import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AssetType } from "@/Type/Types"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { RequestModal } from "./RequestModal"
type Prop = {
    assets:AssetType
}

export const DisplayAllAssets = ({assets}:Prop) => {
  return (
     <Card className="">
      <CardHeader>
              <CardTitle>{assets?.name}</CardTitle>
      </CardHeader>
      <CardContent>
              <p className="font-medium  font-sans">Type : {assets?.type}</p>
             <div className="flex gap-1 items-center"><span className="font-medium ">Availability :</span>{
                  assets.quantity > 0?<Badge>Available</Badge>: <Badge variant="destructive">Out-of-stock</Badge>
              }</div> 
      </CardContent>
          <CardFooter className="flex justify-between">
              <Dialog >
                  <DialogTrigger asChild>
                         <Button className='' size='sm' variant="outline" disabled={assets?.quantity ==0 && true}>Request for asset</Button>
                      {/* <Button>Deploy</Button> */}
                  </DialogTrigger> 
                  <RequestModal assetInfo={assets}/>
              </Dialog>
      </CardFooter>
    </Card>
  )
}
