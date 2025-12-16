import { AssetRequestType } from "@/Type/Types";
import { useEffect, useState } from "react";
import { TopRequestDisplay } from "./TopRequestDisplay";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";
import { CgArrowTopRightR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Paths from "@/base/constant/Paths";

export const TopRequests = ({
  requestedAssets,
}: {
  requestedAssets: AssetRequestType[];
}) => {
  const [duplicates, setDuplicates] = useState<AssetRequestType[]>([]);

  useEffect(() => {
    // Find duplicate assetIds
    const grouped = requestedAssets?.reduce((acc: any, item) => {
      acc[item.assetId] = (acc[item.assetId] || 0) + 1;
      return acc;
    }, {});

    // Filter items with duplicate assetIds
    const duplicateItems = requestedAssets?.filter(
      (item) => grouped[item.assetId] > 1
    );
    // Remove duplicates, keep only one item per assetId
    const uniqueDuplicateItems: any = Object.values(
      duplicateItems?.reduce((acc: any, item) => {
        if (!acc[item.assetId]) {
          acc[item.assetId] = item;
        }
        return acc;
      }, {})
    );

    setDuplicates(uniqueDuplicateItems);
  }, []);
  // const contentPending = (
  //   <div className="flex flex-col items-center">
  //     <h1 className="text-3xl uppercase font-semibold leading-tight">
  //       Top Most Request
  //     </h1>
  //   </div>
  // );
  return (
    <section className="rounded-md bg-white  p-6">
      <div className="space-y-5 ">
        {/* <CommonHeading content={contentPending} /> */}
        <SectionHeader
          title="Top Requested Assets"
          icon={<CgArrowTopRightR className="w-7 h-7 text-blue-700" />}
        />
        <div
          className={`grid grid-cols-1  md:grid-cols-2  gap-2 ${
            duplicates?.length == 2 && "lg:grid-cols-2"
          } ${duplicates?.length == 3 && "lg:grid-cols-3"} ${
            duplicates?.length >= 4 && "lg:grid-cols-4"
          }`}
        >
          {duplicates.map((asset) => (
            <TopRequestDisplay key={asset?._id} asset={asset} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link to={Paths.admin.allRequest}>
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
    </section>
  );
};
