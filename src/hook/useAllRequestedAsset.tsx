import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"

export const useAllRequestedAsset = () => {
    const axiosSecure = useAxiosSecure()

    const { data:requestedAssets } = useQuery({
        queryKey: ['requestedAssets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/employee/assetRequest')
            return res.data;
        }
    })
  return [requestedAssets]
}
