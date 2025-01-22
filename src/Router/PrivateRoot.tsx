import { Navigate, useLocation } from "react-router-dom"

import { ChildrenType } from "../Type/Types"
import { useAuth } from "@/hook/useAuth"

export const PrivateRoot = ({ children }: ChildrenType) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center pt-20">loading--------</div>
    }
    if (user) { 
        return children
    }
    return <Navigate to={'/signIn'} state={{ pathname: location.pathname }} replace/>
}