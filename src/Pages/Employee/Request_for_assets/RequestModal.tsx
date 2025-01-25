import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AssetType } from "@/Type/Types"
import { SubmitHandler, useForm } from "react-hook-form"
type Inputs = {
    exampleRequired: string
    email: string 
    productName: string 
    quantity:number
  productType: string;
    productStatus: string

}
type Prop = {
    assetInfo:AssetType
}
export const RequestModal = ({assetInfo}:Prop) => {
     const { register, handleSubmit, setValue, formState: { errors }, } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
            
        }
  return (
      <div>
        <DialogContent className="w-full p-5">
            <DialogHeader>
            <DialogTitle>Edit Asset Information</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-4 ">
            <div className="flex flex-col  gap-2">
                <Label htmlFor="name" className="text-left">
                Name :
                </Label>
                <Input id="name" defaultValue={assetInfo.name} {...register('productName')} type="text" className="border-2" />
            </div>
            <div className="flex flex-col  gap-2">
                <Label htmlFor="username" className="text-left">
                Quantity :
                </Label>
                <Input id="username" defaultValue={assetInfo?.quantity} {...register('quantity')} type="number" className="border-2" />
                        
            </div>
                
                    {errors.exampleRequired && <span>This field is required</span>}
                    <DialogFooter>
                        <Button type="submit">Request for asset</Button>
                        <DialogClose asChild>
                            <Button  type="button" className="bg-gray-500"> Close </Button>
                        </DialogClose>
                        
                    </DialogFooter>
        </form>
      </DialogContent>
    </div>
  )
}
