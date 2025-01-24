
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import toast from "react-hot-toast"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useUsersData } from "@/hook/useUsersData"

type Inputs = {
    exampleRequired: string
    email: string 
    productName: string 
    quantity:number
  productType: string;
    productStatus:string

}
import moment from 'moment'
export const AddAsset = () => {
  const axiosSecure = useAxiosSecure()
  const [usersData] = useUsersData()
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm<Inputs>()

   
    const onSubmit: SubmitHandler<Inputs> =async(data,e) => {
      try {
        const name = data.productName
      const type = data.productType  
      const status = data.productStatus  
        const quantity = data.quantity
        const hr_name = usersData?.userInfo[0].HR_Name
        const companyName = usersData?.userInfo[0]?.companyName
        const hr_email = usersData?.userInfo[0]?.email
        const companyLogo = usersData?.userInfo[0]?.company_logo
       const currentDate =moment().format('DD-MM-YYYY')
        const product = { name, type, quantity, hr_name, hr_email, companyName, companyLogo,date:currentDate,status }
        
      const res = await axiosSecure.post('/assets', product)
        
        if (res.data?.acknowledged) {
          toast.success('Your asset is successfully saved on database')
        e?.target?.reset()
        }
      } catch (error) {
        console.log(error)
      }
      
      
    }

  return (
      <section className="my-10 px-5">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5"> 
              <figure className="flex justify-center items-center">
                  <img src="/images/addAsset/addAsset.jpg" alt="" className="rounded-xl w-3/4"/>
              </figure>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-xl">
                   <h1 className="font-medium text-2xl text-center font-serif">Join or create account as a HR Manager</h1>
                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="name">Product Name :</label>
                      <input
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3c65f5] focus:border-[#3c65f5]"
                        id="name" {...register('productName')}
                        type="text"
                        placeholder="Product name"
                        required />
                  </div>
                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="date"> Product Quantity :</label>
                      <input
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3c65f5] focus:border-[#3c65f5]"
                        id="data"
                        {...register('quantity')}
                        type="number"
                        placeholder="Quantity"
                        required />
                 </div>
                 <div className="md:flex gap-2">
                      <Select onValueChange={(value) => setValue('productType', value)} >
                            <SelectTrigger className="w-[280px] h-[50px] text-lg">
                                <SelectValue placeholder="Select a type" />
                            </SelectTrigger>
                            <SelectContent {...register('productType')} className="w-[300px]">
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
                            <SelectTrigger className="w-[280px] h-[50px] text-lg">
                                <SelectValue placeholder="Select status" />
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
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full md:text-xl font-medium" type="submit">Add Asset</Button>
            </form>
          </div>
        
    </section>
  )
}
