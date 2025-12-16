import { EmployeeLayout } from "@/Layout/EmployeeLayout"
import { HrLayout } from "@/Layout/HrLayout"
import { MainLayout } from "@/Layout/MainLayout"
import { AsEmployee } from "@/Pages/Authentication/AsEmployee"
import { AsHr } from "@/Pages/Authentication/AsHr"
import { SignIn } from "@/Pages/Authentication/SignIn"
import { EHome } from "@/Pages/Employee/EmployeeHome/EHome"
import { MyAssets } from "@/Pages/Employee/My_Assets/MyAssets"
import { RequestAssets } from "@/Pages/Employee/Request_for_assets/RequestAssets"
import { Home } from "@/Pages/Home/Home"
import { AddAsset } from "@/Pages/HR_Manager/Add_An_Asset/AddAsset"
import { AddEmployee } from "@/Pages/HR_Manager/Add_employee/AddEmployee"
import { AllRequest } from "@/Pages/HR_Manager/All_Request/AllRequest"
import { HrAssetList } from "@/Pages/HR_Manager/HR_Asset_List/HrAssetList"
import { HrHome } from "@/Pages/HR_Manager/HrHome"

import AboutPage from "@/Pages/AboutPage/AboutPage"
import Contact from "@/Pages/ContactPage/Contact"
import { PackageChange } from "@/Pages/HR_Manager/Add_employee/packageSection/PackageChange"
import { EmployeeList } from "@/Pages/HR_Manager/My_Employee_List/EmployeeList"
import { Payment } from "@/Pages/HR_Manager/PaymentMethod/Payment"
import ErrorPage from "@/SharedComponent/ErrorPage"
import ProfilePage from "@/SharedComponent/Profile"
import { createBrowserRouter } from "react-router-dom"
import { PrivateRoot } from "./PrivateRoot"
import Paths from "@/base/constant/Paths"

   export const routes = createBrowserRouter([
     {
       path: Paths.root,
       element: <MainLayout />,
       errorElement: <ErrorPage />,
       children: [
         {
           path: Paths.root,
           element: <Home />,
         },

         {
           path: Paths.public.about,
           element: <AboutPage />,
         },
         {
           path: Paths.public.contact,
           element: <Contact />,
         },

         {
           path: Paths.auth.asEmployee,
           element: <AsEmployee />,
         },
         {
           path: Paths.auth.asHr,
           element: <AsHr />,
         },

         {
           path: Paths.auth.signIn,
           element: <SignIn />,
         },
         //  {
         //    path: "/profile",
         //    element: (
         //      <PrivateRoot>
         //        <ProfilePage />
         //      </PrivateRoot>
         //    ),
         //  },
       ],
     },
     {
       path: Paths.employee.overView,
       element: (
         <PrivateRoot>
           <EmployeeLayout />
         </PrivateRoot>
       ),
       errorElement: <ErrorPage />,
       children: [
         {
           path: Paths.employee.overView,
           element: <EHome />,
         },

         {
           path: `${Paths.employee.overView}/eHome`,
           element: <EHome />,
         },
         {
           path: Paths.employee.myAssets,
           element: <MyAssets />,
         },

         //  {
         //    path: "/employee/myTeam",
         //    element: <MyTeam />,
         //  },
         {
           path: Paths.employee.requestForAsset,
           element: <RequestAssets />,
         },
       ],
     },
     {
       path: Paths.admin.overView,
       element: (
         <PrivateRoot>
           <HrLayout />
         </PrivateRoot>
       ),
       errorElement: <ErrorPage />,
       children: [
         {
           path: Paths.admin.overView,
           element: <HrHome />,
         },
         {
           path: `${Paths.admin.overView}/dashboard`,
           element: <HrHome />,
         },

         {
           path: Paths.admin.assetList,
           element: <HrAssetList />,
         },
         {
           path: Paths.admin.addAsset,
           element: <AddAsset />,
         },

         {
           path: Paths.admin.employeeList,
           element: <EmployeeList />,
         },

         {
           path: Paths.admin.allRequest,
           element: <AllRequest />,
         },
         {
           path: Paths.admin.addEmployee,
           element: <AddEmployee />,
         },
         {
           path: Paths.admin.packageChange,
           element: <PackageChange />,
         },
         {
           path: Paths.admin.payment,
           element: <Payment />,
         },
       ],
     },
     {
       path: Paths.profile,
       element: (
         <PrivateRoot>
           <ProfilePage />
         </PrivateRoot>
       ),
     },
   ]);
  
