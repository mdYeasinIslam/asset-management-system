import { useContext } from "react"
import { ContextType } from "../Type/Types"
import {AuthProvider} from "../context/AuthContext"


export const useAuth = () => {

    const context = useContext(AuthProvider) as ContextType
    return context
}