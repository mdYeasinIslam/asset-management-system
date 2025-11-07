import HrPagesHeading from "@/SharedComponent/HrPagesHeading"
import { DisplayAssets } from "./DispalyAssets"

export const HrAssetList = () => {
  return (
    <div className="h-screen bg-[#F4F8FD]">
      <HrPagesHeading page="Asset List Overview" />
      <DisplayAssets />
    </div>
  );
}
