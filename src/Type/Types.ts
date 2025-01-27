import { User, UserCredential } from "firebase/auth"
export type ContextType = {
      user: User | null | undefined
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

export type AssetType = {
      _id:string
       name:string,
          type:string,
          quantity :number,
          hr_name:string,
          hr_email:string,
          companyName:string,
          companyLogo:string,
          date:string,
          status:string
}
export type AssetRequestType = {
_id:string
      assetId: string;
  assetName: string;
  assetStatus: string;
  assetType: string;
  companyName: string;
  company_logo: string;
  notes: string;
  requestDate: string;
  requesterBirth: string;
  requesterEmail: string;
  requesterName: string;
  requesterRole: string;
  status: string;
  updateDate: string;
}