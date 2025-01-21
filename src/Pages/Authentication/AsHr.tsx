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
import { Label } from "@radix-ui/react-select"
type Inputs = {
    exampleRequired: string
    email: string 
    password: string 
    name: string 
    companyName: string 
    companyLogo: string
    birth: string
    package: string;

}
export const AsHr = () => {
     const {
    register,
         handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data,e) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const birth = data.birth
        const companyName = data.companyName;
        const companyLogo = data.companyLogo
        const selectPackage = data.package    
        const profile = {name,birth,email,password}
        console.log(data)
        // e?.target.reset()
    }

  return (
      <section className="mt-10">
          <div className="container mx-auto grid grid-cols-2 items-center justify-center gap-5"> 
              <figure>
                  <img src="/images/auth/authentication1.png" alt="" className="rounded-xl"/>
              </figure>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <h1 className="font-medium text-2xl text-center font-serif">Join or create account as an Employee</h1>
                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="name">Your Name :</label>
                    <Input id="name" {...register('name')} type="text" placeholder="Your full name" required />
                 </div>
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="companyName"> Company Name :</label>
                    <Input id="companyName"  {...register('companyName')} type="text" placeholder="Your company name" required />
                 </div>
                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="logo">Upload complany logo image:</label>
                    <Input id="logo" {...register('companyLogo')} type="text" placeholder="Company Logo"  />
                 </div>
                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="date"> Date of birth :</label>
                      <Input id="data" {...register('birth')} type="date" placeholder="Your date of birth" required />
                 </div>
                  <div className="flex flex-col gap-1 ">
                       <label htmlFor="email"> Email address :</label>
                       <Input id="email" {...register('email')} type="email" placeholder="Email" required />
                 </div>
                  <div className="flex flex-col gap-1 ">
                      <label htmlFor="password">Email Password:</label>
                     <Input id="password" {...register('password')} type="password" placeholder="Password" required />  
                </div>
                 <Select onValueChange={(value)=>setValue('package',value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent {...register('package')}>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                 </Select>
                  

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full" type="submit">Join as a Employee</Button>
            </form>
          </div>
        
    </section>
  )
}
