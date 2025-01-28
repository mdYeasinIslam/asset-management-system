import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import { useAxiosSecure } from "./useAxiosSecure"

export const useUsersData = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
        
       const { data: usersData=[],isLoading:isPending,refetch} = useQuery({
        queryKey: ['usersData', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('token'),
        queryFn: async () => {
            
            const res = await axiosSecure.get(`/users?email=${user?.email}`)
            return res.data
               
        },
    })  
    return [usersData,isPending,refetch]
}
