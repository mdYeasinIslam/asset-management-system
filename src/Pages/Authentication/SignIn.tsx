import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hook/useAuth"
import { useAxiosSecure } from "@/hook/useAxiosSecure"
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import {useLocation, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

type Inputs = {
    exampleRequired: string
    email: string 
    password: string 

}
export const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()
  const { signInAuth,googleAuth } = useAuth()
  const axiosSecure = useAxiosSecure()

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.pathname || '/'


    const onSubmit: SubmitHandler<Inputs> = (data,e) => {
      
      const email = data.email.toLowerCase();
        const password = data.password;
      signInAuth(email, password)
        .then(async (res) => {
          // if (localStorage.getItem('token')) {
            const response = await axiosSecure.get(`/users?email=${res.user?.email}`)
            toast.success(`${res.user.displayName}- You are successfully Join as ${response.data?.role}`)
              e?.target.reset()
            if (response?.data?.role == 'Employee') {
              if (from == '/' || from == '/signIn' || from =='/asEmployee' || from == 'asHr') {
                return navigate('/employee/eHome')
              }
              else {
                return navigate(from,{replace:true})
              }
            }
            if (response?.data?.role == 'Admin' ) {
              if (from == '/' || from == '/signIn' || from =='/asEmployee' || from == 'asHr') {
                return navigate('/hr/hrHome')
              }
              return navigate(from,{replace:true})
            }
            else {
              navigate(from, {replace:true})
            }
          // }

        }).catch(e=> {
          console.log(e)
          toast.error(e.message)
        })
      
        e?.target.reset()
    }
  const google = async () => {
     googleAuth()
        .then(async(res) => {
          // const response = await axiosSecure.get(`/users?email=${res?.user?.email}`)
          toast.success(`${res.user.displayName}- You are successfully Join as normal user.If your want to be a proper user, please register as Employee or HR_manager`)
          return navigate('/employee/eHome')
          // if (response?.data?.role == 'Employee') {
          //   if (from == '/' || from == '/signIn' || from =='/asEmployee' || from == 'asHr') {
          //     return navigate('/employee/eHome')
          //   }
          //   else {
          //     return navigate(from,{replace:true})
          //   }
          // }
          // if (response?.data?.role == 'Admin' ) {
          //   if (from == '/' || from == '/signIn' || from =='/asEmployee' || from == 'asHr') {
          //     return navigate('/hr/hrHome')
          //   }
          //   return navigate(from,{replace:true})
          // }
          // else {
          //   navigate(from, {replace:true})
          // }

        }).catch(e=> {
          console.log(e)
          toast.error(e.message)
        })      
    }
  return (
      <section className="mt-10 px-5">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5"> 
              <figure className="w-2/3 mx-auto">
                  <img src="/images/auth/login.jpg" alt="" className="w-full rounded-xl"/>
        </figure>
        <div className="space-y-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <h1 className="font-medium text-2xl text-center font-serif">Please Log In your account</h1>
                  <Input {...register('email')} type="email" placeholder="Email" required />
                  <Input {...register('password')} type="password" placeholder="Password" required />
                  

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full" type="submit">Log In</Button>
          </form>
          
                 <button onClick={google} className="w-full bg-primary text-white font-medium flex justify-center items-center  rounded-md py-1 "><FcGoogle className="w-8 h-8"/> <span>Log In with Google</span> </button>
        </div>
              
          </div>
        
    </section>
  )
}
