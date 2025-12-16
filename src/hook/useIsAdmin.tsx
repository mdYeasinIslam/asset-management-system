import {  useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "./useAxiosSecure"
import { useAuth } from "./useAuth"

export const useIsAdmin = () => {
  const axiosSecure =useAxiosSecure()
  const { user } = useAuth() 

  const {
    data: isAdmin = false,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["isAdmin", user?.email,localStorage.getItem("token")],
    enabled: !!user?.email && !!localStorage.getItem("token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin,isPending,isLoading]
}