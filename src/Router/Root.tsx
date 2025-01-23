import { EmployeeLayout } from "@/Layout/EmployeeLayout"
import { HrLayout } from "@/Layout/HrLayout"
import { MainLayout } from "@/Layout/MainLayout"
import { AsEmployee } from "@/Pages/Authentication/AsEmployee"
import { AsHr } from "@/Pages/Authentication/AsHr"
import { SignIn } from "@/Pages/Authentication/SignIn"
import { EHome } from "@/Pages/Employee/EmployeeHome/EHome"
import { MyAssets } from "@/Pages/Employee/My_Assets/MyAssets"
import { MyTeam } from "@/Pages/Employee/My_team/MyTeam"
import { RequestAssets } from "@/Pages/Employee/Request_for_assets/RequestAssets"
import { Home } from "@/Pages/Home/Home"
import { AddAsset } from "@/Pages/HR_Manager/Add_An_Asset/AddAsset"
import { AddEmployee } from "@/Pages/HR_Manager/Add_employee/AddEmployee"
import { AllRequest } from "@/Pages/HR_Manager/All_Request/AllRequest"
import { HrAssetList } from "@/Pages/HR_Manager/HR_Asset_List/HrAssetList"
import { HrHome } from "@/Pages/HR_Manager/HrHome"
import { EmployeeList } from "@/Pages/HR_Manager/My_Employee_List/EmployeeList"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PrivateRoot } from "./PrivateRoot"

export const Root = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: '/asEmployee',
                    element:<AsEmployee/>
                },
                {
                    path: '/asHr',
                    element:<AsHr/>
                },

                {
                    path: "/signIn",
                    element:<SignIn/>
                },
            ]
        },
        {
            path: '/employee',
            element: <PrivateRoot><EmployeeLayout /></PrivateRoot>,
            children: [
                {
                    path: '/employee',
                    element:<EHome/>
                },
                
                {
                    path: '/employee/eHome',
                    element:<EHome/>
                },
                {
                    path:'/employee/myAssets',
                    element:<MyAssets/>
                },
                
                {
                    path:'/employee/myTeam',
                    element:<MyTeam/>
                },
                {
                    path:'/employee/requestForAsset',
                    element:<RequestAssets/>
                },

            ]
        },
        {
            path: "/hr",
            element: <PrivateRoot><HrLayout /></PrivateRoot>,
            children: [
                {
                    path: '/hr',
                    element:<HrHome/>
                },
                {
                    path: '/hr/hrHome',
                    element:<HrHome/>
                },
                
                {
                    path: '/hr/assetList',
                    element:<HrAssetList/>
                },
                {
                    path: '/hr/addAsset',
                    element:<AddAsset/>
                },
                
                {
                    path: '/hr/employeeList',
                    element:<EmployeeList/>
                },

                {
                    path: '/hr/allRequest',
                    element:<AllRequest/>
                },
                {
                    path: '/hr/addEmployee',
                    element:<AddEmployee/>
                },

            ]
        }
    ])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}
