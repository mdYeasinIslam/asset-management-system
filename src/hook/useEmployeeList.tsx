import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuth } from "./useAuth"
 
export const useEmployeeList = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
       const { data: employeeData=[],isPending ,refetch} = useQuery({
        queryKey: ['assets', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('token'),
           queryFn: async () => {
             const res = await axiosSecure.get(`/hr/addEmployee`)
            return res.data  
        },
    })  
    return [employeeData,isPending,refetch]
}
