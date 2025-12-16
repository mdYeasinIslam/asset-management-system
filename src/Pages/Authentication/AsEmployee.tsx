import Paths from "@/base/constant/Paths";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hook/useAuth";
import { useAxiosPublic } from "@/hook/useAxiosPublic";
import { CarouselImg } from "@/SharedComponent/auth/CarouselImg";
import Loader from "@/SharedComponent/Loader";
import { EmployeeType } from "@/Type/Types";
import axios from "axios";
import { User } from "firebase/auth";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";


const img_hosting_key = "7489d1929f652c6b41444e884a6a6180";
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

export const AsEmployee = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm<EmployeeType>();
  const axiosPublic = useAxiosPublic();
  const { signUpAuth, updateUserAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<EmployeeType> = async (data, e) => {
    try {
      setLoading(true);

      const name = data.name;
      const email = data.email.toLowerCase();
      const password = data.password;
      const birth = data.birth;
      const photoURL = { image: data.photoURL[0] };
      const [res] = await Promise.all([
        axios.post(img_hosting_api, photoURL, {
          headers: {
            "content-type": "multipart/form-data",
          },
        }),
      ]);
      const employeePhotoUrl = res.data?.data.display_url;
      const profile = {
        displayName: name,
        photoURL: employeePhotoUrl,
      };
      const userInfo = {
        Employee_Name: name,
        email,
        password,
        // Employee_photo:photoURLData,
        Employee_photo: employeePhotoUrl,
        date_of_birth: birth,
        role: "Employee",
        canRequestForAsset: false,
        requestForAsset: "No",
      };

      const response = await axiosPublic.get("/users");
      const allUsers = response?.data?.result || [];

      // find matching email
      const foundUser = allUsers?.find(
        (user: User) => user.email?.toLowerCase() === email.toLowerCase()
      );
      if (!foundUser) {
        console.log(foundUser);
        const response = await axiosPublic.post("/users", userInfo);
        if (response) {
          toast.success("Your are successfully join as a Employee");
          navigate(Paths.employee.eHome);
          setLoading(false);

          e?.target.reset();
        }
      } else {
        console.log(foundUser);
        setLoading(false);
        toast.error("you already have an account");
      }

      const signInOperation = await signUpAuth(email, password);
      console.log(signInOperation);
      if (signInOperation) {
        await updateUserAuth(profile);
        const response = await axiosPublic.post("/users", userInfo);
        if (response) {
          toast.success("Your are successfully join as a Employee");
          navigate(Paths.employee.eHome);
          setLoading(false);

          e?.target.reset();
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute left-1/2 ">
          <Loader />
        </div>
      )}
      <section
        className={`lg:h-screen bg-[#FBF9F5] text-black  py-10 lg:py-0 ${
          loading && "opacity-50"
        }`}
      >
        <div className="max-w-4xl xl:max-w-7xl mx-auto h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5">
          <figure>
            {/* <img
              src="/images/auth/employee-signup.jpg"
              alt="side image"
              className="w-full  hidden lg:flex h-[500px] xl:h-[600px] object-cover rounded-md"
            /> */}
            <CarouselImg />
            <div className="flex flex-col items-center">
              <img
                src="/logo-icon.png"
                className="flex lg:hidden w-20 h-full bg-white rounded-xl"
                alt="logo"
              />
              <h1 className="text-xl italic font-semibold block lg:hidden">
                AssetPulse
              </h1>
            </div>
          </figure>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 max-w-xl mx-auto w-full px-5 md:px-0"
          >
            <h1 className="font-semibold text-4xl  ">
              Create account (For Employee)
            </h1>
            <p className="font-medium text-gray-700  pb-2">
              Create an account with just few clicks and avail exciting
              features!
            </p>
            <div className="flex flex-col  ">
              <label htmlFor="name" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Your Name :
              </label>
              <Input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="grid w-full lg:max-w-sm gap-1.5 !text-black">
                <label htmlFor="picture1">Upload Your Photo:</label>
                <Input
                  id="picture1"
                  {...register("photoURL")}
                  type="file"
                  className="file:text-black"
                />
              </div>

              <div className="w-full flex flex-col gap-1 ">
                <label htmlFor="date" className="capitalize font-semibold">
                  <span className="text-red-800">*</span>
                  Date of birth :
                </label>
                <Input
                  id="data"
                  {...register("birth")}
                  type="date"
                  placeholder="Your date of birth"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Email
              </label>
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="password" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Password
              </label>

              <div className="relative">
                <Input
                  id="password"
                  {...register("password")}
                  type={isShow ? "password" : "text"}
                  placeholder="Password"
                  required
                />
                <div
                  onClick={() => setIsShow(!isShow)}
                  className="absolute right-5 top-[25%] cursor-pointer  "
                >
                  {!isShow ? (
                    <IoMdEye className="w-6 h-6" />
                  ) : (
                    <IoEyeOff className="w-6 h-6" />
                  )}
                </div>
              </div>
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button
              variant="outline"
              size={"lg"}
              className="w-full hover:bg-[#2563EB] bg-white hover:text-white text-black hove:text-white border border-[#2563EB] font-semibold text-lg"
              type="submit"
            >
              Create profile
            </Button>
            <div className="text-black flex gap-1">
              <h1>Already have an account. </h1>
              <Link
                to={Paths.auth.signIn}
                className="hover:underline hover:text-sky-600 underline"
              >
                Please log in..
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
