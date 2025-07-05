import HrPagesHeading from "@/SharedComponent/HrPagesHeading"
import { DisplayAssets } from "./DispalyAssets"

export const HrAssetList = () => {
  return (
    <div className="h-screen">
      <HrPagesHeading page="Asset List Overview"/>
      <DisplayAssets/>
    </div>
  )
}
