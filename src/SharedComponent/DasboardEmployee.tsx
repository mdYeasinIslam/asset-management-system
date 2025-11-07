"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hook/useAuth";
import { useIsAdmin } from "@/hook/useIsAdmin";
import { useUsersData } from "@/hook/useUsersData";
import { AlignJustify, X, LogOut } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SkeletonBar from "./Skeleton";

export const DashboardSidebar = () => {
  const { user, signOutAuth, dark, setDark } = useAuth();
  const [open, setOpen] = useState(false);
  const [usersData, isPending] = useUsersData();
  const [isAdmin, , isLoading] = useIsAdmin();
  const navigate = useNavigate();
  const role = usersData?.role;
  const userPhoto = user?.photoURL as string | undefined;

  // set theme light mode as default
  useEffect(() => setDark(false), []);
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
    guest: [{ path: "/", label: "Home" }],
    employee: [
      { path: "/employee/eHome", label: "Overview" },
      { path: "/employee/myAssets", label: "My Assets" },
      { path: "/employee/myTeam", label: "My Team" },
      { path: "/employee/requestForAsset", label: "Request for Asset" },
    ],
    admin: [
      { path: "/admin/dashboard", label: "Overview" },
      { path: "/admin/addAsset", label: "Add Asset" },
      { path: "/admin/assetList", label: "Asset List" },
      { path: "/admin/allRequest", label: "All Requests" },
      { path: "/admin/employeeList", label: "Employee List" },
      { path: "/admin/addEmployee", label: "Add Employee" },
    ],
  };

  // Determine Navigation Menu
  const navItems = useMemo(() => {
    if (!user) return paths.guest;

    return isAdmin ? paths.admin : paths.employee;
  }, [user, isAdmin]);

  if (isPending || isLoading) {
    return <SkeletonBar />
  }
  return (
    <aside className="relative lg:fixed lg:h-screen lg:w-[23%] xl:w-[15%] ">
      {/* Mobile Menu Toggle */}
      <div className="  absolute top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-1 rounded-sm ${
            dark ? "bg-gray-800 text-white" : "hover:bg-sky-100  text-black"
          } shadow-lg border`}
        >
          {open ? (
            <X className="w-5 h-5 text-white md:text-black md hover:text-black" />
          ) : (
            <AlignJustify className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static h-full   ${
          dark ? "bg-slate-800 text-white" : "bg-white text-gray-800"
        } border-r border-gray-200 dark:border-gray-700 flex flex-col transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-200 dark:border-gray-700">
          <Link
            className="flex flex-col items-center gap-3"
            to={
              role
                ? role === "Admin"
                  ? "/admin/dashboard"
                  : "/employee/eHome"
                : "/"
            }
            onClick={() => setOpen(false)}
          >
            <img
              className="w-7 h-7 rounded-xl"
              src="/defaultLogo2.png"
              alt="Logo"
            />
            <p className="font-semibold text-lg">AssetPulse</p>
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
                    `block px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200  ${
                      isActive
                        ? "bg-[#2563EB] text-white"
                        : "hover:bg-slate-300 "
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
          {/* <div className="flex items-center justify-between">
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
          </div> */}

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
                size="sm"
                className="w-full hover:bg-[#2563EB] text-[#2563EB]   border border-[#2563EB]  hover:text-white justify-start gap-2 bg-transparent rounded-sm"
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
    </aside>
  );
};
