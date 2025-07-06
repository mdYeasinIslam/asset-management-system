import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hook/useAuth";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

type Inputs = {
  exampleRequired: string;
  email: string;
  password: string;
};
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { signInAuth, googleAuth } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.pathname || "/";
  const fromHr = location.state?.pathNanme || "/hr/hrHome";
  const fromEmployee = location.state?.pathNanme || "/employee/eHome";
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    const email = data.email.toLowerCase();
    const password = data.password;
    signInAuth(email, password)
      .then(async (res) => {
        const response = await axiosSecure.get(
          `/users?email=${res.user?.email}`
        );
        console.log(response);
        toast.success(
          `${res.user.displayName}- You are successfully Join as ${response.data?.role}`
        );
        e?.target.reset();
        if (response?.data?.role == "Employee") {
          // if (from == '/' || from == '/signIn' || from == '/asEmployee' || from == 'asHr') {
          //   return navigate('/employee/eHome')
          // }
          return navigate(fromEmployee, { replace: true });
        } else {
          navigate(from, { replace: true });
        }
        if (response?.data?.role == "Admin") {
          // if (from == '/' || from == '/signIn' || from == '/asEmployee' || from == 'asHr') {
          //    return navigate('/hr/hrHome')
          //   }
          return navigate(fromHr, { replace: true });
          // return navigate('/')
        } else {
          navigate(from, { replace: true });
        }
        // }
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });

    e?.target.reset();
  };
  // if (redirect) {
  //   window.location.reload();
  //   }
  const google = async () => {
    googleAuth()
      .then(async (res) => {
        // const response = await axiosSecure.get(`/users?email=${res?.user?.email}`)
        toast.success(
          `${res.user.displayName}- You are successfully Join as normal user.If your want to be a proper user, please register as Employee or HR_manager`
        );
        return navigate("/employee/eHome");
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
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  return (
    <section className=" lg:h-[90vh]">
      <div className="container mx-auto h-full lg:flex flex-col lg:flex-row items-center md:gap-10 px-5">
        <figure className="flex-1 flex justify-center items-center  mt-10 lg:mt-0 ">
          <img
            src="/images/auth/loginImg.jpg"
            alt="login img"
            className="rounded-xl hidden lg:flex"
          />
          <img src="/defaultLogo2.png"
            className="flex lg:hidden w-20 h-20 bg-white rounded-xl"
            alt="" />
        </figure>
        <div className="w-full flex-1 space-y-3 md:flex flex-col justify-center  ">
          <h1 className="dark:text-white md:my-5 text-2xl md:text-4xl font-semibold text-center font-serif">
            Please Log In your account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-3 dark:text-white"
          >
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              required
            />
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              required
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button variant="dark" className="w-full" type="submit">
              Log In
            </Button>
          </form>
          <Button onClick={google} variant="dark" className="w-full ">
            <FcGoogle className=" !w-8 !h-8 " /> <span>Log In with Google</span>{" "}
          </Button>
          {/* <button
            onClick={google}
            className="w-full bg-[#1F2937] text-white font-medium flex justify-center items-center  rounded-md py-1 "
          >
            <FcGoogle className="w-8 h-8" /> <span>Log In with Google</span>{" "}
          </button> */}
        </div>
      </div>
    </section>
  );
};
