import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hook/useAuth";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { useUsersData } from "@/hook/useUsersData";
import { useAxiosPublic } from "@/hook/useAxiosPublic";
import { User } from "firebase/auth";
import Loader from "@/SharedComponent/Loader";

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

  const [usersData] = useUsersData();
  const [loading, setLoading] = useState(false);

  const { signInAuth } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.pathname || "/";
  const fromHr = location.state?.pathName || "/admin/dashboard";
  const fromEmployee = location.state?.pathName || "/employee/eHome";
  const [isShow, setIsShow] = useState(true);
  const [error, setError] = useState("");
  console.log(usersData);
  const [dummySignIn, setDummySignIn] = useState({
    email: "",
    password: "",
    signInAs: "",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    const email = dummySignIn?.email
      ? dummySignIn?.email
      : data.email.toLowerCase();
    const password = dummySignIn.password
      ? dummySignIn?.password
      : data?.password;

    try {
      setError("");
      setLoading(true);
      const res = await axiosPublic.get("/users");
      const allUsers = res?.data?.result || [];

      // find matching email
      const foundUser = allUsers.find(
        (user: User) => user.email?.toLowerCase() === email.toLowerCase()
      );
      console.log(foundUser);
      if (foundUser) {
        setError("");
      } else {
        setError("Please create your account first");
        toast.error("Please create your account first");
      }
      signInAuth(email, password)
        .then(async (res) => {
          const response = await axiosSecure.get(
            `/users?email=${res.user?.email}`
          );
          console.log(response);
          // console.log(response);
          setLoading(false);
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

          setLoading(false);
          console.log(e);
          toast.error(e.message);
        });

      e?.target.reset();
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
      const errMsg = error instanceof Error ? error.message : String(error);
      toast.error(errMsg);
    }
  };
  // if (redirect) {
  //   window.location.reload();
  //   }
  // const google = async () => {
  //   googleAuth()
  //     .then(async (res) => {
  //       // const response = await axiosSecure.get(`/users?email=${res?.user?.email}`)
  //       toast.success(
  //         `${res.user.displayName}- You are successfully Join as normal user.If your want to be a proper user, please register as Employee or HR_manager`
  //       );
  //       return navigate("/employee/eHome");
  //       // if (response?.data?.role == 'Employee') {
  //       //   if (from == '/' || from == '/signIn' || from =='/asEmployee' || from == 'asHr') {
  //       //     return navigate('/employee/eHome')
  //       //   }
  //       //   else {
  //       //     return navigate(from,{replace:true})
  //       //   }
  //       // }
  //       // if (response?.data?.role == 'Admin' ) {
  //       //   if (from == '/' || from == '/signIn' || from =='/asEmployee' || from == 'asHr') {
  //       //     return navigate('/hr/hrHome')
  //       //   }
  //       //   return navigate(from,{replace:true})
  //       // }
  //       // else {
  //       //   navigate(from, {replace:true})
  //       // }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       toast.error(e.message);
  //     });
  // };
  return (
    <div className="relative">
      {loading && (
        <div className="absolute w-full !bg-gray-500 top-0   ">
          <Loader />
        </div>
      )}
      <section className={`bg-[#FBF9F5] text-black ${loading && '!opacity-50 '}`}>
        <div className="max-w-4xl xl:max-w-6xl mx-auto  h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="  flex justify-center  items-center   ">
            <img
              // src="/images/auth/sign-in.jpg"
              src="https://img.freepik.com/free-photo/member-log-membership-username-password-concept_53876-101284.jpg?semt=ais_hybrid&w=740&q=80"
              alt="login img"
              className=" h-[600px] hidden lg:block object-cover object-center brightness-75 rounded-md"
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
          <div className=" max-w-xl  w-full mx-auto  space-y-3 flex flex-col    lg:justify-center  h-full px-5 gap-3 z-50">
            <div className="flex  items-center justify-center">
              <img
                src="/logo-icon.png"
                className="lg:flex hidden w-16 h-full bg-white rounded-xl"
                alt=""
              />
              <h1 className="text-xl italic font-semibold lg:block  hidden">
                AssetPulse
              </h1>
            </div>
            <div>
              <h1 className="dark:text-black  text-2xl md:text-4xl font-semibold mb-0!">
                Log in
              </h1>
              <p className="font-medium !mt-0">
                Welcome back! Please enter your details.
              </p>
            </div>
            {/* <div className="w-full mx-auto flex items-center gap-5">
            <Button
              variant={"outline"}
              size={"xl"}
              onClick={google}
              className="max-w-xl w-full bg-white hover:bg-blue-100 hover:text-black text-black text-sm md:text-lg font-medium border border-black hover:border-[#2563EB]"
            >
              <FcGoogle className=" !w-8 !h-8 " /> <span> Google</span>{" "}
            </Button>
            <Button
              variant={"outline"}
              size={"xl"}
              onClick={google}
              className="max-w-xl w-full bg-white hover:bg-blue-100 hover:text-black  text-black text-sm md:text-lg font-medium border border-black hover:border-[#2563EB] "
            >
              <FaFacebook className=" text-blue-600 !w-8 !h-8 " />{" "}
              <span> Facebook</span>{" "}
            </Button>
          </div>
          <div className="flex justify-center">
            <span className="text-gray-700">or continue with</span>
          </div> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 dark:text-black "
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="signInAsHr"
                    className=" data-[state=checked]:text-white  data-[state=checked]:bg-secondary"
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
                  <Label htmlFor="signInAsHr" className="cursor-pointer">
                    Sign in as Hr
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="signInAsEmployee"
                    className=" data-[state=checked]:text-white  data-[state=checked]:bg-secondary"
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
                  <Label htmlFor="signInAsEmployee" className="cursor-pointer">
                    Sign in as Employee
                  </Label>
                </div>
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <Button
                size="lg"
                variant="outline"
                className="w-full hover:bg-[#2563EB] bg-white text-black hove:text-white border border-[#2563EB] font-semibold text-lg"
                type="submit"
              >
                Log In
              </Button>
              {error && (
                <div className="text-red-500 font-medium">
                  Please create your account first
                </div>
              )}
            </form>
            <div className="text-black">
              <h1>Don't have any account? Create your own ----</h1>
              <div className="flex gap-3">
                <Link
                  to={"/asEmployee"}
                  className="hover:underline hover:text-sky-600"
                >
                  1. As Employee
                </Link>
                <Link
                  to={"/asHr"}
                  className="hover:underline hover:text-sky-600"
                >
                  2. For your company
                </Link>
              </div>
            </div>
            {/* <button
            onClick={google}
            className="w-full bg-[#1F2937] text-white font-medium flex justify-center items-center  rounded-md py-1 "
          >
            <FcGoogle className="w-8 h-8" /> <span>Log In with Google</span>{" "}
          </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};
