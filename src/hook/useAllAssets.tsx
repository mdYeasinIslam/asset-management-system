import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuth } from "./useAuth"
// import { AssetType } from "@/Type/Types"
 
export const useAllAssets = (value?: string) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: assetsData = [], isPending, refetch, isLoading } = useQuery({
        queryKey: ['assets', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('token'),
        queryFn: async () => {
            if (value) {
                const res = await axiosSecure.get(`/assets?public=${value}`)
                return res.data
            }
            else {
                const res = await axiosSecure.get(`/assets`)
                return res.data
            }
          
        },
    })
    return [assetsData, isPending, refetch, isLoading];
}
