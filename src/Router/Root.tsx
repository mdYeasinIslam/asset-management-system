import { MainLayout } from "@/Layout/MainLayout"
import { AsEmployee } from "@/Pages/Authentication/AsEmployee"
import { AsHr } from "@/Pages/Authentication/AsHr"
import { SignIn } from "@/Pages/Authentication/SignIn"
import { SignUp } from "@/Pages/Authentication/SignUp"
import { Home } from "@/Pages/Home/Home"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

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
                {
                    path: "/signUp",
                    element:<SignUp/>
                },
            ]
        }
    ])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}
