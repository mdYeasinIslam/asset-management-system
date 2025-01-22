import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuth } from "./useAuth"

export const useUsersData = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    
       const { data: usersData=[],isPending } = useQuery({
        queryKey: ['usersData', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`)
            return res.data
        },
    })  
    return [usersData,isPending]
}
