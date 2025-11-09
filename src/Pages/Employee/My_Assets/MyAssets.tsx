import { useAllRequestedAsset } from "@/hook/useAllRequestedAsset"
import { useAuth } from "@/hook/useAuth"
import { DisplayEmployeeAssets } from "./DisplayEmployeeAssets"
import HrPagesHeading from "@/SharedComponent/HrPagesHeading"
import SkeletonBar from "@/SharedComponent/Skeleton"

export const MyAssets = () => {
  const { user } = useAuth()
  const email=user?.email as string
  const [, isPending] = useAllRequestedAsset(email)
  if (isPending) {
    return <SkeletonBar/>
  }
  return (
    <div className="h-screen">
      <HrPagesHeading title="My Assets" />
      <DisplayEmployeeAssets />
    </div>
  )
}