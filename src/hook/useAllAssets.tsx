import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuth } from "./useAuth"
 
export const useAllAssets = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
        
       const { data: assetsData=[],isPending ,refetch} = useQuery({
        queryKey: ['assets', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets`)
            return res.data
        },
    })  
    return [assetsData,isPending,refetch]
}
