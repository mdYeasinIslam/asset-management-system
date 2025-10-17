import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hook/useAuth";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

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
  const [isShow, setIsShow] = useState(true);
  const [dummySignIn, setDummySignIn] = useState({
    email: "",
    password: "",
    signInAs: "",
  });

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
    <section className="h-[90vh] lg:h-screen bg-[#FBF9F5]">
      <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-start ">
        <div className="h-full flex-1 flex justify-center  items-center   ">
          <img
            src="/images/auth/sign-in.jpg"
            alt="login img"
            className=" h-[80vh] lg:h-full hidden lg:flex object-cover object-center brightness-75"
          />
          <div className="flex flex-col items-center">
            <img
              src="/logo-icon.png"
              className="flex lg:hidden w-20 h-full bg-white rounded-xl"
              alt=""
            />
            <h1 className="text-xl italic font-semibold block  lg:hidden">
              AssetPulse
            </h1>
          </div>
        </div>
        <div className=" max-w-xl lg:max-w-full w-full mx-auto  space-y-3 md:flex flex-col px-3   lg:justify-center  h-full">
          <div className="flex flex-col items-center">
            <img
              src="/logo-icon.png"
              className="lg:flex hidden w-20 h-full bg-white rounded-xl"
              alt=""
            />
            <h1 className="text-xl italic font-semibold lg:block  hidden">
              AssetPulse
            </h1>
          </div>
          <h1 className="dark:text-white  text-2xl md:text-4xl font-semibold text-center font-serif">
            Please Sign In your account
          </h1>
          <div className="max-w-xl w-full mx-auto flex items-center gap-2">
            <Button
              variant={"outline"}
              size={"xl"}
              onClick={google}
              className="w-full bg-white text-black text-sm md:text-lg font-medium border border-[#EAEBEB] "
            >
              <FcGoogle className=" !w-8 !h-8 " /> <span> Google</span>{" "}
            </Button>
            <Button
              variant={"outline"}
              size={"xl"}
              onClick={google}
              className="w-full bg-white text-black text-sm md:text-lg font-medium border border-[#EAEBEB] "
            >
              <FaFacebook className=" text-blue-600 !w-8 !h-8 " />{" "}
              <span> Facebook</span>{" "}
            </Button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 dark:text-white max-w-xl w-full mx-auto"
          >
            <div>
              <label htmlFor="email" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Email
              </label>
              <Input
                {...register("email")}
                type="email"
                defaultValue={dummySignIn?.email ? dummySignIn?.email : ""}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Password
              </label>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={isShow ? "password" : "text"}
                  defaultValue={
                    dummySignIn?.password ? dummySignIn?.password : ""
                  }
                  placeholder="Password"
                  required
                />
                <div
                  onClick={() => setIsShow(!isShow)}
                  className="absolute right-5 top-[25%] cursor-pointer  "
                >
                  {isShow ? (
                    <IoMdEye className="w-6 h-6" />
                  ) : (
                    <IoEyeOff className="w-6 h-6" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="signInAsHr"
                  checked={dummySignIn.signInAs === "hr"}
                  onClick={() =>
                    setDummySignIn((prev) =>
                      prev.signInAs === "hr"
                        ? { email: "", password: "", signInAs: "" }
                        : {
                            email: "yeasin@gmail.com",
                            password: "aassdd",
                            signInAs: "hr",
                          }
                    )
                  }
                />
                <Label htmlFor="signInAsHr">Sign in as Hr</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="signInAsEmployee"
                  checked={dummySignIn.signInAs === "employee"}
                  onClick={() =>
                    setDummySignIn((prev) =>
                      prev.signInAs === "employee"
                        ? { email: "", password: "", signInAs: "" }
                        : {
                            email: "hasan@gmail.com",
                            password: "aassdd",
                            signInAs: "employee",
                          }
                    )
                  }
                />
                <Label htmlFor="signInAsEmployee">Sign in as Employee</Label>
              </div>
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button
              size={"xl"}
              variant="outline"
              className="w-full bg-black text-white font-semibold text-lg"
              type="submit"
            >
              Log In
            </Button>
          </form>

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
