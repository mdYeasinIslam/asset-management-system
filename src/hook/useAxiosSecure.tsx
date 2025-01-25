import axios from "axios"
import { Navigate } from "react-router-dom"
import { useAuth } from "./useAuth"

 const axiosSecure = axios.create({
   baseURL: 'http://localhost:5000'
})

export const useAxiosSecure = () => {
  const { signOutAuth } = useAuth()
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.authorization =`Bearer ${token}`
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  axiosSecure.interceptors.response.use((response) => {
    return response
  }, async (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      console.log(error)
      await signOutAuth()
      return <Navigate to={'/signIn'}/>
    }
    return Promise.reject(error)
  })
  return axiosSecure
}