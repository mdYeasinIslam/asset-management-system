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
import { useAuth } from "@/hook/useAuth"
import toast from "react-hot-toast"
import { useAxiosPublic } from "@/hook/useAxiosPublic"
import axios from "axios"
import { useNavigate } from "react-router-dom"

type Inputs = {
    exampleRequired: string
    email: string 
    password: string 
  name: string 
    img_url:string
    companyName: string 
    companyLogo: string
    birth: string
    package: string;

}
const img_hosting_key = import.meta.env.VITE_imgbb_apiKey
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

export const AsHr = () => {
  const { signUpAuth, updateUserAuth } = useAuth()
  const axiosPublic = useAxiosPublic()
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm<Inputs>()
  const navigate =useNavigate()
    const onSubmit: SubmitHandler<Inputs> =async(data,e) => {
      
      try {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const birth = data.birth
        const companyName = data.companyName;
        const selectPackage = data.package  
        const companyLogo = {image:data.companyLogo[0]}
        const photoURL = { image: data.img_url[0] };
        
      const [res, res2] = await Promise.all([
        axios.post(img_hosting_api,companyLogo, {
        headers: {
          'content-type':'multipart/form-data'
          }
        }),
        axios.post(img_hosting_api, photoURL, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      })
      ])
      const companyLogoURL = res.data?.data.display_url;
      const profilePhotoURL = res2.data?.data.display_url;
      console.log(res,profilePhotoURL)
        const profile = { displayName: name, photoURL:profilePhotoURL }
        const userInfo = {
          HR_Name: name,
           email,
          HR_photo:profilePhotoURL,
          date_of_birth: birth,
          companyName, 
          complany_logo: companyLogoURL,
          package: selectPackage,
          role:'Admin'
        }
        const signInOperation= await signUpAuth(email, password)
        if (signInOperation) {
          await  updateUserAuth(profile)
          const response = await axiosPublic.post('/users', userInfo);
          console.log(response)
          if (response) {
            navigate('/')
            toast.success('Your are successfully join as a HR manager')
            e?.target.reset()
          }
        }
       
      } catch (error) {
        console.log(error)
      }
      
        
    }

  return (
      <section className="mt-10 px-5">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5"> 
              <figure>
                  <img src="/images/auth/authentication1.png" alt="" className="rounded-xl"/>
              </figure>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <h1 className="font-medium text-2xl text-center font-serif">Join or create account as a HR Manager</h1>
                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="name">Your Name :</label>
                    <Input id="name" {...register('name')} type="text" placeholder="Your full name" required />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                        <label htmlFor="picture1">Upload Your Photo:</label>
                        <Input id="picture1" {...register('img_url')} type="file" required />
                   </div>

                  <div className="flex flex-col gap-1 ">
                        <label htmlFor="date"> Date of birth :</label>
                      <Input id="data" {...register('birth')} type="date" placeholder="Your date of birth" required />
                   </div>
          
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="companyName"> Company Name :</label>
                    <Input id="companyName"  {...register('companyName')} type="text" placeholder="Your company name" required />
                 </div>
                 
                   <div className="grid w-full max-w-sm items-center gap-1.5">
                        <label htmlFor="picture">Upload complany logo image:</label>
                        <Input id="picture" {...register('companyLogo')} type="file" required />
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
                            <SelectValue placeholder="Get package" />
                        </SelectTrigger>
                        <SelectContent {...register('package')}>
                            <SelectGroup>
                            <SelectLabel>Get package</SelectLabel>
                            <SelectItem value="5_members">5 Members for $5</SelectItem>
                            <SelectItem value="10_members">10 Members for $8</SelectItem>
                            <SelectItem value="20_members">20 Members for $15</SelectItem>
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
