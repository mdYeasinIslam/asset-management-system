import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hook/useAuth";
import toast from "react-hot-toast";
import { useAxiosPublic } from "@/hook/useAxiosPublic";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "@/SharedComponent/Loader";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

type Inputs = {
  exampleRequired: string;
  email: string;
  password: string;
  name: string;
  img_url: string;
  companyName: string;
  companyLogo: string;
  birth: string;
  package: string;
};
const img_hosting_key = "7489d1929f652c6b41444e884a6a6180";
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

export const AsHr = () => {
  const { signUpAuth, updateUserAuth } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
    const [isShow, setIsShow] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    try {
      setLoading(true);
      const name = data.name;
      const email = data.email?.toLowerCase();
      const password = data.password;
      const birth = data.birth;
      const companyName = data.companyName;
      const selectPackage = data.package;
      const companyLogo = { image: data.companyLogo[0] };
      const photoURL = { image: data.img_url[0] };

      const [res, res2] = await Promise.all([
        axios.post(img_hosting_api, companyLogo, {
          headers: {
            "content-type": "multipart/form-data",
          },
        }),
        axios.post(img_hosting_api, photoURL, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      ]);
      const companyLogoURL = res.data?.data.display_url;
      const profilePhotoURL = res2.data?.data.display_url;

      const profile = { displayName: name, photoURL: profilePhotoURL };
      const userInfo = {
        HR_Name: name,
        email,
        HR_photo: profilePhotoURL,
        date_of_birth: birth,
        companyName,
        company_logo: companyLogoURL,
        package: selectPackage,
        role: "Admin",
      };
      const signInOperation = await signUpAuth(email, password);
      if (signInOperation) {
        await updateUserAuth(profile);
        const response = await axiosPublic.post("/users", userInfo);

        if (response) {
          navigate("/hr/hrHome");
          setLoading(false);
          toast.success("Your are successfully join as a HR manager");
          e?.target.reset();
        }
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.error(error);
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
        className={` bg-[#FBF9F5]  dark:text-white ${loading && "opacity-50"}`}
      >
        <div className="max-w-7xl mx-auto h-screen  grid grid-cols-1 lg:grid-cols-2 items-center justify-center ">
          <figure className="  ">
            <img
              src="/images/auth/hr-signup.jpg"
              alt="Hr sign up image"
              className=" h-[700px] w-full  hidden lg:flex object-cover object-center rounded-md"
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
          </figure>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 px-4 max-w-xl mx-auto w-full"
          >
            <h1 className="font-semibold text-4xl text-center font-serif">
              Create account as HR Manager
            </h1>
            <div className="flex flex-col gap-3 ">
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
            {/* <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="picture1">Upload Your Photo:</label>
              <Input id="picture1" {...register("img_url")} type="file" />
            </div> */}

            {/* <div className="flex flex-col gap-1 ">
              <label htmlFor="date"> Date of birth :</label>
              <Input
                id="date"
                {...register("birth")}
                type="date"
                placeholder="Your date of birth"
                required
              />
            </div> */}

            <div className="flex flex-col gap-1 ">
              <label htmlFor="companyName" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Company Name :
              </label>
              <Input
                id="companyName"
                {...register("companyName")}
                type="text"
                placeholder="Your company name"
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="picture" className="capitalize font-semibold">
                <span className="text-red-800">*</span>
                Upload complany logo image:
              </label>
              <Input id="picture" {...register("companyLogo")} type="file" />
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
            <Select onValueChange={(value) => setValue("package", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Get package" />
              </SelectTrigger>
              <SelectContent {...register("package")}>
                <SelectGroup>
                  <SelectLabel>Get package</SelectLabel>
                  <SelectItem value="5_members for $5">
                    5 Members for $5
                  </SelectItem>
                  <SelectItem value="10_members for $5">
                    10 Members for $8
                  </SelectItem>
                  <SelectItem value="20_members for $5">
                    20 Members for $15
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button variant="dark" className="w-full" type="submit">
              Join as a Hr_manager
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
