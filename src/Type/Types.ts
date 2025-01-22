import { User, UserCredential } from "firebase/auth"
export type ContextType = {
      user: User | null
      loading:boolean
      signUpAuth: (email: string, password: string) => Promise<UserCredential>
      signInAuth: (email: string, password: string) => Promise<UserCredential>
      signOutAuth: () => Promise<void>
      updateUserAuth: (profile: object) => Promise<void>
      googleAuth: () => Promise<UserCredential>

}
export type ChildrenType = {
      children : JSX.Element
}

export type UserTypeForDashboard = {
      _id: string,
      name: string
      role:string
      email:string
}