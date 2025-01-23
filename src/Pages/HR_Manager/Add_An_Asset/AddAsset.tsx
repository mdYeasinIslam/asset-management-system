
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { useAxiosPublic } from "@/hook/useAxiosPublic"
import { useNavigate } from "react-router-dom"
import { useAxiosSecure } from "@/hook/useAxiosSecure"

type Inputs = {
    exampleRequired: string
    email: string 
    productName: string 
    quantity:number
    productType: string;

}

export const AddAsset = () => {
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm<Inputs>()
  const navigate =useNavigate()
    const onSubmit: SubmitHandler<Inputs> =async(data,e) => {
      
        const name = data.productName
      const type = data.productType  
      const quantity= data.quantity
        
     const product = {name,type,quantity}
        console.log(product)
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
              

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full md:text-xl font-medium" type="submit">Add Asset</Button>
            </form>
          </div>
        
    </section>
  )
}
