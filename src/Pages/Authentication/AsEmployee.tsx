import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hook/useAuth";
import { useAxiosPublic } from "@/hook/useAxiosPublic";
import Loader from "@/SharedComponent/Loader";
import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Inputs = {
  exampleRequired: string;
  email: string;
  password: string;
  name: string;
  birth: string;
  photoURL: string;
};
const img_hosting_key = "7489d1929f652c6b41444e884a6a6180";
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

export const AsEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const axiosPublic = useAxiosPublic();
  const { signUpAuth, updateUserAuth } = useAuth();
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    try {
      setLoading(true)
      const name = data.name;
      const email = data.email.toLowerCase();
      const password = data.password;
      const birth = data.birth;
      // const photoURL = { image: data.photoURL[0] };

      const photoURL = new FormData();
      photoURL.append("image", data.photoURL[0]);
      // console.log(photoURLData)
      const res = await axios.post(img_hosting_api, photoURL, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res);
      const profile = {
        displayName: name,
        photoURL: res.data.data?.display_url,
        // photoURL: photoURLData
      };
      const userInfo = {
        Employee_Name: name,
        email,
        // Employee_photo:photoURLData,
        Employee_photo: res.data?.data?.display_url,
        date_of_birth: birth,
        role: "Employee",
      };
      const signInOperation = await signUpAuth(email, password);
      console.log(signInOperation);
      if (signInOperation) {
        await updateUserAuth(profile);
        const response = await axiosPublic.post("/users", userInfo);
        if (response) {
          toast.success("Your are successfully join as a Employee");
          navigate("/employee/eHome");
          setLoading(false)

          e?.target.reset();
        }
      }
    } catch (error) {
      setLoading(false)
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
        className={`lg:h-screen bg-[#FBF9F5] dark:text-white ${
          loading && "opacity-50"
        }`}
      >
        <div className="max-w-4xl xl:max-w-7xl mx-auto h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5">
          <figure>
            <img
              src="/images/auth/employee-signup.jpg"
              alt="side image"
              className="w-full  hidden lg:flex h-[500px] xl:h-[600px] object-cover rounded-md"
            />
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
            <h1 className="font-medium text-2xl text-center font-serif">
               Create account as an Employee
            </h1>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">Your Name :</label>
              <Input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="picture1">Upload Your Photo:</label>
              <Input id="picture1" {...register("photoURL")} type="file" />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="date"> Date of birth :</label>
              <Input
                id="data"
                {...register("birth")}
                type="date"
                placeholder="Your date of birth"
                required
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email"> Email address :</label>
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="password">Email Password:</label>
              <Input
                id="password"
                {...register("password")}
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button variant="dark" className="w-full" type="submit">
              Join as a Employee
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
