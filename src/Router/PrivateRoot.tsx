import { Navigate, useLocation } from "react-router-dom"

import { ChildrenType } from "../Type/Types"
import { useAuth } from "@/hook/useAuth"
import { Skeleton } from "@/components/ui/skeleton"

export const PrivateRoot = ({ children }: ChildrenType) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        // return <div className="flex justify-center pt-20">loading--------</div>
        return (
            <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
                <Skeleton className="h-10 w-2/3 rounded-xl  bg-gray-700" />
                <div className="space-y-2 w-full flex flex-col items-center">
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700" />
                </div>
          </div>
        )
    }
    if (user) { 
        return children
    }
    return <Navigate to={'/signIn'} state={{ pathname: location.pathname }} replace/>
}