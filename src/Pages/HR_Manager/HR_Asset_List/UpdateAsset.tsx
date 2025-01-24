import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AssetType } from "@/Type/Types"
import { SubmitHandler, useForm } from "react-hook-form"
import moment from "moment"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import toast from "react-hot-toast"

type Inputs = {
    exampleRequired: string
    email: string 
    productName: string 
    quantity:number
  productType: string;
    productStatus: string

}
type Prop = {
    assetInfo: AssetType,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    refetch:any
}
const UpdateAsset = ({ assetInfo, setOpen,refetch }: Prop) => {
    const axiosSecure = useAxiosSecure()
    console.log(assetInfo)
    const { register, handleSubmit, setValue, formState: { errors }, } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
        e?.preventDefault()
        try {
             const name = data.productName ?data.productName :assetInfo?.name 
      const type = data.productType ? data.productType:assetInfo.type 
      const status = data.productStatus? data.productStatus :assetInfo.status
        const quantity = data.quantity ?data.quantity : assetInfo.quantity
        const currentDate = moment().format('DD-MM-YYYY') 
        const updateInfo = {
          name,
          type,
          quantity,
          date: currentDate,
          status
        }
        const response = await axiosSecure.put( `/assets/${assetInfo._id}`, updateInfo)
        console.log(response)
        if (response.data) {
            toast.success('Asset is successfully updated. Please close the modal')
            refetch()
          
        }  
        } catch (error) {
            console.log(error)
        }
      
     }
  return (
    <div className=" ">
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
            
            <div className="md:flex gap-2">
                <Select onValueChange={(value) => setValue('productType', value)} >
                    <SelectTrigger className="h-[50px] text-lg">
                        <SelectValue placeholder={assetInfo?.type} />
                    </SelectTrigger>
                    <SelectContent {...register('productType')}  className="w-[300px]">
                        <SelectGroup>
                        <SelectLabel  className="text-lg font-semibold">Get package</SelectLabel>
                        <SelectItem value="Electronics" className="h-[50px] text-lg px-4 ">Electronics</SelectItem>
                        <SelectItem value="Furniture" className="h-[50px] text-lg px-4">Furniture</SelectItem>
                        <SelectItem value="Stationery" className="h-[50px] text-lg px-4">Stationery</SelectItem>
                        <SelectItem value="Software" className="h-[50px] text-lg px-4">Software</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select  onValueChange={(value) => setValue('productStatus', value)} >
                    <SelectTrigger className=" h-[50px] text-lg">
                        <SelectValue placeholder={assetInfo?.status} />
                    </SelectTrigger>
                    <SelectContent {...register('productStatus')} className="w-[300px]">
                        <SelectGroup>
                        <SelectLabel  className="text-lg font-semibold">Status</SelectLabel>
                        <SelectItem value="Returnable" className="h-[50px] text-lg px-4 ">Returnable</SelectItem>
                        <SelectItem value="Non-returnable" className="h-[50px] text-lg px-4">Non returnable</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                  </div>  
                  
                   {errors.exampleRequired && <span>This field is required</span>}
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    <DialogClose asChild>
                        <Button onClick={()=>setOpen(false)} type="button" className="bg-gray-500"> Close </Button>
                    </DialogClose>
                        
                </DialogFooter>
        </form>
      </DialogContent>
    </div>
  )
}
export default UpdateAsset