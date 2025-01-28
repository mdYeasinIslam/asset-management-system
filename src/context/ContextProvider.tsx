import { useEffect, useState } from "react"
import { ChildrenType } from "../Type/Types"
import { onAuthStateChanged, User,createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth"
import  {AuthProvider, googleProvider } from "./AuthContext"
import auth from "@/firebase/firebase.init"
import { useAxiosPublic } from "@/hook/useAxiosPublic"

export const ContextProvider = ({ children }: ChildrenType) => {
    const [user, setUser] = useState<User | null | undefined>(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

    const signUpAuth = (email: string, password: string):Promise<UserCredential>=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signInAuth = (email: string, password: string):Promise<UserCredential>=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutAuth = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserAuth = (profile: object) => {
        setLoading(true)
        return updateProfile(auth.currentUser as User,profile)
    }
    const googleAuth = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userInfo = currentUser as User
            if (userInfo) {
                const email= {email:userInfo.email}
                axiosPublic.post('/jwt', email)
                    .then(res => {
                        localStorage.setItem('token', res.data)
                          setLoading(false)
                    }).catch(e => {
                         console.log(e)
                     })
            }
            else {
        localStorage.removeItem('token')
            }
            setUser(userInfo)
            setLoading(false)
        })
        return ()=> unSubscribe()
    }, [])
    
    const info = {
        user,
        loading,
        signUpAuth,
        signInAuth,
        signOutAuth,
        updateUserAuth,
        googleAuth
    }
  return (
      <AuthProvider.Provider value={info}>
          {children}
    </AuthProvider.Provider>
  )
}