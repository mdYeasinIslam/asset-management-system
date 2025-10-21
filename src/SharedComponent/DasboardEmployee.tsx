"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hook/useAuth";
import { useIsAdmin } from "@/hook/useIsAdmin";
import { useUsersData } from "@/hook/useUsersData";
import { AlignJustify, Moon, Sun, X, LogOut } from "lucide-react";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "./Loader";

export const DashboardSidebar = () => {
  const { user, signOutAuth, dark, setDark } = useAuth();
  const [open, setOpen] = useState(false);
  const [usersData, isPending] = useUsersData();
  const [isAdmin, , isLoading] = useIsAdmin();
  const navigate = useNavigate();

  const role = usersData?.role;
  const userPhoto = user?.photoURL as string | undefined;

  // Sign Out Handler
  const signOut = async () => {
    try {
      await signOutAuth();
      navigate("/");
      toast.success("You have successfully logged out");
    } catch (e: any) {
      console.error(e);
      toast.error(e.message);
    }
  };

  // Navigation Paths
  const paths = {
    guest: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
      { path: "/asEmployee", label: "Join as Employee" },
      { path: "/asHr", label: "Join as HR Manager" },
    ],
    employee: [
      { path: "/employee/eHome", label: "Overview" },
      { path: "/employee/myAssets", label: "My Assets" },
      { path: "/employee/myTeam", label: "My Team" },
      { path: "/employee/requestForAsset", label: "Request for Asset" },
    ],
    admin: [
      { path: "/hr/hrHome", label: "Overview" },
      { path: "/hr/assetList", label: "Asset List" },
      { path: "/hr/addAsset", label: "Add Asset" },
      { path: "/hr/allRequest", label: "All Requests" },
      { path: "/hr/employeeList", label: "Employee List" },
      { path: "/hr/addEmployee", label: "Add Employee" },
    ],
  };

  // Determine Navigation Menu
  const navItems = useMemo(() => {
    if (!user) return paths.guest;
    return isAdmin ? paths.admin : paths.employee;
  }, [user, isAdmin]);

  // if (isPending || isLoading) {
  //   return (
  //     <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center gap-2">
  //       {[...Array(4)].map((_, i) => (
  //         // <Skeleton key={i} className="h-4 w-2/3 bg-gray-700" />
  //         <Loader/>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className={`p-2 rounded-lg ${
            dark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } shadow-lg border`}
        >
          {open ? (
            <X className="w-5 h-5" />
          ) : (
            <AlignJustify className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 ${
          dark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } border-r border-gray-200 dark:border-gray-700 flex flex-col transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link
            className="flex items-center gap-3"
            to={
              role ? (role === "Admin" ? "/hr/hrHome" : "/employee/eHome") : "/"
            }
            onClick={() => setOpen(false)}
          >
            <img
              className="w-10 rounded-xl"
              src="/defaultLogo2.png"
              alt="Logo"
            />
            <p className="font-semibold text-xl">AssetPulse</p>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? dark
                          ? "bg-gray-700 text-white"
                          : "bg-gray-100 text-gray-900"
                        : dark
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section - User & Settings */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Dark Mode</span>
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* User Section */}
          {user?.email ? (
            <div className="space-y-3">
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={userPhoto || "/placeholder.svg"}
                    alt={user?.email}
                  />
                  <AvatarFallback className="text-xs">
                    {user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user?.email}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {role || "User"}
                  </p>
                </div>
              </Link>
              <Button
                onClick={signOut}
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 bg-transparent"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </Button>
            </div>
          ) : (
            <Link to="/signIn" onClick={() => setOpen(false)}>
              <Button className="w-full">Log In</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};
