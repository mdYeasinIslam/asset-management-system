import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"

export const useAllRequestedAsset = (email?: string) => {
    const axiosSecure = useAxiosSecure()
    const { data:requestedAssets=[],isPending,refetch } = useQuery({
        queryKey: ['requestedAssets'],
        queryFn: async () => {
            try {
              if (email) {
                const res = await axiosSecure.get(`/employee/assetRequest?email=${email}`)
                return res.data;
              } else {
                const res = await axiosSecure.get(`/employee/assetRequest`)
                return res.data;   
            }
              
            } catch (error) {
              console.log(error)  
            }
           
        }
    })
  return [requestedAssets,isPending,refetch]
}
