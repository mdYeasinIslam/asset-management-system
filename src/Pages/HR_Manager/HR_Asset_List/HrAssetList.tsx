import HrPagesHeading from "@/SharedComponent/HrPagesHeading";
import { DisplayAssets } from "./DispalyAssets";
import { HiOutlineSparkles } from "react-icons/hi";

export const HrAssetList = () => {
  return (
    <aside className=" bg-[#F4F8FD] py-10 pr-0 lg:pr-5 space-y-5">
      <HrPagesHeading
        title="Assets list"
        icon={<HiOutlineSparkles className=" w-6 h-6" />}
      />
      <div className=" bg-white px-5 pb-5">
        <DisplayAssets />
      </div>
    </aside>
  );
};
