import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hook/useAuth"
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"

type Inputs = {
    exampleRequired: string
    email: string 
    password: string 

}
export const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()
  const { signInAuth } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.pathname || '/'


    const onSubmit: SubmitHandler<Inputs> = (data,e) => {
      
        const email = data.email;
        const password = data.password;
      signInAuth(email, password)
        .then(res => {
          navigate(from, { replace:true})
          toast.success(`${res.user.displayName}- You are successfully Join`)
          e?.target.reset()

        }).catch(e=> {
          console.log(e)
          toast.error(e.message)
        })
      
        e?.target.reset()
    }

  return (
      <section className="mt-10 px-5">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5"> 
              <figure>
                  <img src="/images/auth/login.jpg" alt="" className="rounded-xl"/>
              </figure>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <h1 className="font-medium text-2xl text-center font-serif">Please Log In your account</h1>
                  <Input {...register('email')} type="email" placeholder="Email" required />
                  <Input {...register('password')} type="password" placeholder="Password" required />
                  

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full" type="submit">Log In</Button>
            </form>
          </div>
        
    </section>
  )
}
