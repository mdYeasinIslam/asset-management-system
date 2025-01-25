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
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useUsersData } from "@/hook/useUsersData"
import { AssetType } from "@/Type/Types"
import moment from "moment"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
type Inputs = {
    exampleRequired: string
    notes:string

}
type Prop = {
    assetInfo:AssetType
} 
export const RequestModal = ({ assetInfo }: Prop) => {
    const [usersData] = useUsersData()
    const axiosSecure=useAxiosSecure()
     const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const notes = data.notes;
        const currentDate = moment().format('DD-MM-YYYY');
        const Info = usersData?.userInfo;
        const requestInfo = {
            requesterName:Info[0]?.Employee_Name,
            requesterEmail:Info[0]?.email,
            requesterRole:Info[0]?.role,
            requesterBirth:Info[0]?.date_of_birth,
            requestDate: currentDate,
            assetId: assetInfo._id,
            assetName: assetInfo.name,
            assetType:assetInfo?.type,
            notes,
            status:'pending'
        }
        console.log(requestInfo)
        const response = await axiosSecure.post('/employee/assetRequest',requestInfo)
        console.log(response)
        if (response.data?.acknowledged) {
           toast.success('your request for this asset is send to the HR') 
        }
        }
  return (
      <div>
        <DialogContent className="w-full p-5">
            <DialogHeader>
            <DialogTitle>Edit Asset Information</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-4 ">
            <div className="flex flex-col  gap-2">
                <Label htmlFor="notes" className="text-left">
                Additional Note :
                </Label>
                <Input id="notes"  {...register('notes')} type="text" className="border-2" />
            </div>
            {/* <div className="flex flex-col  gap-2">
                <Label htmlFor="username" className="text-left">
                Quantity :
                </Label>
                <Input id="username" defaultValue={assetInfo?.quantity} {...register('quantity')} type="number" className="border-2" />
                        
            </div> */}
                
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
