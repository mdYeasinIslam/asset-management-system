import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    exampleRequired: string
    email: string 
    password: string 
    name: string 
    birth: string

}
export const AsEmployee = () => {
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data,e) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const birth = data.birth
        const profile = {name,birth,email,password}
        console.log(profile)
        e?.target.reset()
    }

  return (
      <section className="mt-10">
          <div className="container mx-auto grid grid-cols-2 items-center justify-center gap-5"> 
              <figure>
                  <img src="/images/auth/authentication1.png" alt="" className="rounded-xl"/>
              </figure>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <h1 className="font-medium text-2xl text-center font-serif">Join or create account as an Employee</h1>
                  <Input {...register('name')} type="text" placeholder="Your full name" required />
                  <Input {...register('birth')} type="date" placeholder="Your date of birth" required />
                  <Input {...register('email')} type="email" placeholder="Email" required />
                  <Input {...register('password')} type="password" placeholder="Password" required />
                  

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button className="w-full" type="submit">Join as a Employee</Button>
            </form>
          </div>
        
    </section>
  )
}
