import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hook/useAuth"
import { useAxiosPublic } from "@/hook/useAxiosPublic"
import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

type Inputs = {
    exampleRequired: string
    email: string 
    password: string 
    name: string 
  birth: string
    photoURL : string

}
const img_hosting_key = import.meta.env.VITE_imgbb_apiKey
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

export const AsEmployee = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()
  const axiosPublic = useAxiosPublic()
  const { signUpAuth, updateUserAuth } = useAuth()
  const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = async(data,e) => {
      
      try {
        const name = data.name;
        const email = data.email.toLowerCase();
        const password = data.password;
        const birth = data.birth
        const photoURL = {image: data.photoURL[0] };
        
        const res= await axios.post(img_hosting_api,photoURL, {
          headers: {
            'content-type':'multipart/form-data'
            }
        })
        const profile = {
            displayName: name,
            photoURL: res.data.data?.display_url
        }
        const userInfo = {
          Employee_Name: name,
            email,
            Employee_photo:res.data?.data?.display_url,
            date_of_birth: birth,
            role:'Employee'
          }
        const signInOperation = await signUpAuth(email, password)
        console.log(signInOperation)
        if (signInOperation) {
          await  updateUserAuth(profile)  
          const response = await axiosPublic.post('/users', userInfo);
          if (response) {
            navigate('/employee/eHome')
            toast.success('Your are successfully join as a Employee')
            e?.target.reset()
          }
        }
      } catch (error) {
        console.log(error)
      }
     
    }

  return (
      <section className="my-10 px-5">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5"> 
              <figure>
                  <img src="/images/auth/authentication1.png" alt="" className="rounded-xl"/>
              </figure>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <h1 className="font-medium text-2xl text-center font-serif">Join or create account as an Employee</h1>
                <div className="flex flex-col gap-1 ">
                        <label htmlFor="name">Your Name :</label>
                    <Input id="name" {...register('name')} type="text" placeholder="Your full name" required />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                        <label htmlFor="picture1">Upload Your Photo:</label>
                        <Input id="picture1" {...register('photoURL')} type="file" required />
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
                  

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full" type="submit">Join as a Employee</Button>
            </form>
          </div>
        
    </section>
  )
}
