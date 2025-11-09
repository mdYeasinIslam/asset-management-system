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

   export const routes = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout />,
       errorElement: <ErrorPage />,
       children: [
         {
           path: "/",
           element: <Home />,
         },

         {
           path: "/about",
           element: <AboutPage />,
         },
         {
           path: "/contact",
           element: <Contact />,
         },

         {
           path: "/asEmployee",
           element: <AsEmployee />,
         },
         {
           path: "/asHr",
           element: <AsHr />,
         },

         {
           path: "/signIn",
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
       path: "/employee",
       element: (
         <PrivateRoot>
           <EmployeeLayout />
         </PrivateRoot>
       ),
       errorElement: <ErrorPage />,
       children: [
         {
           path: "/employee",
           element: <EHome />,
         },

         {
           path: "/employee/eHome",
           element: <EHome />,
         },
         {
           path: "/employee/myAssets",
           element: <MyAssets />,
         },

        //  {
        //    path: "/employee/myTeam",
        //    element: <MyTeam />,
        //  },
         {
           path: "/employee/requestForAsset",
           element: <RequestAssets />,
         },
       ],
     },
     {
       path: "/admin",
       element: (
         <PrivateRoot>
           <HrLayout />
         </PrivateRoot>
       ),
       errorElement: <ErrorPage />,
       children: [
         {
           path: "/admin",
           element: <HrHome />,
         },
         {
           path: "/admin/dashboard",
           element: <HrHome />,
         },

         {
           path: "/admin/assetList",
           element: <HrAssetList />,
         },
         {
           path: "/admin/addAsset",
           element: <AddAsset />,
         },

         {
           path: "/admin/employeeList",
           element: <EmployeeList />,
         },

         {
           path: "/admin/allRequest",
           element: <AllRequest />,
         },
         {
           path: "/admin/addEmployee",
           element: <AddEmployee />,
         },
         {
           path: "/admin/addEmployee/packageChange/:id",
           element: <PackageChange />,
         },
         {
           path: "/admin/payment",
           element: <Payment />,
         },
       ],
     },
     {
       path: "/profile",
       element: (
         <PrivateRoot>
           <ProfilePage />
         </PrivateRoot>
       ),
     },
   ]);
  
