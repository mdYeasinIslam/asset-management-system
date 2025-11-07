import { AssetType } from "@/Type/Types";
import { LimitedItemDisplay } from "./LimitedItemDisplay";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BsCartXFill } from "react-icons/bs";

const OutOfStock = ({ assetData }: { assetData: AssetType[] }) => {
  const outOfStock = assetData
    ?.filter((asset) => asset.quantity <1)
    .sort((a, b) => a.quantity - b.quantity);
  // const contentPending = (
  //   <div className="flex flex-col items-center">
  //     <h1 className="text-2xl uppercase font-medium leading-tight">
  //       Limited Stock Asset Items
  //     </h1>
  //     <p className="text-gray-800">
  //       Find assets as your choice and neccessity. And use them carefully ,may
  //       be you need to return it to the company.
  //     </p>
  //   </div>
  // );
  return (
    <div className="space-y-5 w-full bg-white p-6">
      {/* <CommonHeading content={contentPending} /> */}
      <SectionHeader
        title="Out of Stock Items"
        icon={<BsCartXFill className="w-7 h-7 text-red-600" />}
      />
      <div
        className={`grid grid-cols-1 md:grid-cols-2  gap-5  ${
          outOfStock?.length == 2 && "lg:grid-cols-2"
        } ${outOfStock?.length >= 3 && "lg:grid-cols-3"}  `}
      >
        {outOfStock &&
          outOfStock?.map((asset) => (
            <LimitedItemDisplay key={asset._id} asset={asset} />
          ))}
      </div>
      <div className="w-full flex justify-center">
        <Link to={"/admin/assetList"}>
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-[#2563EB] border-2 border-[#2563EB]"
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default OutOfStock;