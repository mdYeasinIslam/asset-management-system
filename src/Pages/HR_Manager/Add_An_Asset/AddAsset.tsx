"use client";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { useAxiosSecure } from "@/hook/useAxiosSecure";
import { useUsersData } from "@/hook/useUsersData";
import moment from "moment";
import SkeletonBar from "@/SharedComponent/Skeleton";
import { Input } from "@/components/ui/input";
import { CarouselImgForAddAsset } from "./CarouselImgForAddAsset";

type Inputs = {
  productName: string;
  quantity: number;
  productType: string;
  productStatus: string;
  condition?: string;
  serialNumber?: string;
  purchaseDate?: string;
  purchaseCost?: number;
  vendor?: string;
  assetImage?: string;
};

export const AddAsset = () => {
  const axiosSecure = useAxiosSecure();
  const [usersData, isPending] = useUsersData();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    try {
      const name = data.productName;
      const type = data.productType;
      const status = data.productStatus;
      const quantity = data.quantity;
      const assetImage = data.assetImage;
      const serialNumber = data?.serialNumber;
      const hr_name = usersData?.userInfo[0].HR_Name;
      const companyName = usersData?.userInfo[0]?.companyName;
      const hr_email = usersData?.userInfo[0]?.email;
      const companyLogo = usersData?.userInfo[0]?.company_logo;
      const currentDate = moment().format("DD-MM-YYYY");

      const product = {
        name,
        type,
        quantity,
        hr_name,
        hr_email,
        companyName,
        companyLogo,
        date: currentDate,
        status,
      };

      const res = await axiosSecure.post("/assets", product);

      if (res.data.message) {
        return toast.error(res.data.message);
      }
      if (res.data?.acknowledged) {
        toast.success("✅ Asset successfully saved to the database!");
        e?.target?.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isPending) return <SkeletonBar />;

  return (
    <section className="py-12 md:px-6 bg-[#F9FBFD] dark:bg-[#111827] dark:text-white min-h-screen">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Illustration */}
        {/* <figure className="flex justify-center">
          <img
            src="/images/addAsset/addAsset.jpg"
            alt="Add Asset"
            className="rounded-2xl shadow-lg w-4/5"
          />
        </figure> */}
<CarouselImgForAddAsset/>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-[#1F2937] rounded-2xl shadow-xl p-2 md:p-8 space-y-6 text-base"
        >
          <h1 className="text-2xl font-semibold text-center font-serif">
            Add New Company Asset
          </h1>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="font-medium">Product Name</label>
            <input
              {...register("productName")}
              placeholder="e.g. Dell Latitude 5520"
              required
              className="mt-2 p-3 border dark:text-black border-gray-300 rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6]"
            />
          </div>

          {/* Quantity */}
          <div className="flex flex-col">
            <label className="font-medium">Quantity</label>
            <input
              type="number"
              {...register("quantity")}
              placeholder="Enter quantity"
              required
              className="mt-2 p-3 border dark:text-black border-gray-300 rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6]"
            />
          </div>

          {/* Dropdowns */}
          <div className="grid md:grid-cols-2 gap-4">
            <Select onValueChange={(v) => setValue("productType", v)}>
              <SelectTrigger className="h-[50px] text-base bg-white">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent
                {...register("productType")}
                className="bg-white font-medium"
              >
                <SelectGroup>
                  <SelectItem
                    value="Electronics"
                    className="hover:bg-[#2563EB] hover:text-white cursor-pointer border-b "
                  >
                    Electronics
                  </SelectItem>
                  <SelectItem
                    value="Furniture"
                    className="hover:bg-[#2563EB] hover:text-white cursor-pointer border-b "
                  >
                    Furniture
                  </SelectItem>
                  <SelectItem
                    value="Stationery"
                    className="hover:bg-[#2563EB] hover:text-white cursor-pointer border-b "
                  >
                    Stationery
                  </SelectItem>
                  <SelectItem
                    value="Software"
                    className="hover:bg-[#2563EB] hover:text-white cursor-pointer border-b "
                  >
                    Software
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={(v) => setValue("productStatus", v)}>
              <SelectTrigger className="h-[50px] text-base bg-white">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent
                {...register("productStatus")}
                className="bg-white font-medium "
              >
                <SelectGroup>
                  <SelectItem
                    value="Returnable"
                    className="hover:bg-[#2563EB] hover:text-white cursor-pointer border-b "
                  >
                    Returnable
                  </SelectItem>
                  <SelectItem
                    value="Non-returnable"
                    className="hover:bg-[#2563EB] hover:text-white cursor-pointer "
                  >
                    Non-returnable
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Optional Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-medium">Serial Number</label>
              <input
                {...register("serialNumber")}
                placeholder="Serial Number (optional)"
                className="p-3 border dark:text-black border-gray-300 rounded-lg focus:ring-[#3b82f6]"
              />
            </div>{" "}
            <div className="flex flex-col">
              <label className="font-medium">Purchased from (vendor)</label>
              <input
                {...register("vendor")}
                placeholder="“TechShop BD”"
                className="p-3 border dark:text-black border-gray-300 rounded-lg focus:ring-[#3b82f6]"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="picture" className="capitalize font-semibold">
                Upload asset image:
              </label>
              <Input
                id="picture"
                {...register("assetImage")}
                type="file"
                className="file:text-black"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full md:text-lg font-semibold bg-[#3b82f6] hover:bg-[#2563eb] text-white"
          >
            Save Asset
          </Button>
        </form>
      </div>
    </section>
  );
};
