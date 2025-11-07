import { AssetType } from "@/Type/Types";
import { LimitedItemDisplay } from "./LimitedItemDisplay";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";
import { AiOutlineStock } from "react-icons/ai";

const LimitedStockItem = ({ assetData }: { assetData: AssetType[] }) => {
  const limitedItems = assetData
    ?.filter((asset) => asset.quantity <5)
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
    <section>
      <div className="space-y-5 w-full bg-white p-6 ">
        {/* <CommonHeading content={contentPending} /> */}
        <SectionHeader
          title="Limited Stock Asset Items"
          icon={<AiOutlineStock className="w-7 h-7 text-blue-700" />}
        />
        <div
          className={`grid grid-cols-1 ${
            limitedItems?.length >4 ? " md:grid-cols-3 2xl:grid-cols-4" : "md:grid-cols-3"
          }  gap-5 `}
        >
          {limitedItems.length > 0 &&
            limitedItems
              .slice(0, 6)
              ?.map((asset) => (
                <LimitedItemDisplay key={asset._id} asset={asset} />
              ))}
        </div>
      </div>
    </section>
  );
};
export default LimitedStockItem;
