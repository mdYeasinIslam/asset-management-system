import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hook/useAuth";
import { useIsAdmin } from "@/hook/useIsAdmin";
import { useUsersData } from "@/hook/useUsersData";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Paths from "@/base/constant/Paths";

export const SecondNavbar = () => {
  const checkSignPath = useLocation();
  const hideNavbar =
    checkSignPath.pathname === Paths.auth.signIn ||
    checkSignPath.pathname === Paths.auth.asEmployee ||
    checkSignPath.pathname === Paths.auth.asHr;
  if (hideNavbar) return;
  const { user, signOutAuth, dark, setDark } = useAuth();
  const [open, setOpen] = useState(false);
  const [usersData, isPending] = useUsersData();
  const [isAdmin, , isLoading] = useIsAdmin();
  const navigate = useNavigate();
    const pathName = location.pathname;

  const role = usersData?.role;
  const userPhoto = user?.photoURL as string | undefined;

  // Sign Out Handler
  const signOut = async () => {
    try {
      await signOutAuth();
      navigate(Paths.root);
      toast.success("You have successfully logged out");
    } catch (e: any) {
      console.error(e);
      toast.error(e.message);
    }
  };

  // Navigation Paths
  const paths = {
    guest: [
      { path: Paths.root, label: "Home" },
      { path: Paths.public.about, label: "About" },
      { path: Paths.public.contact, label: "Contact" },
      // { path: Paths.auth.asEmployee, label: "As Employee" },
      // { path: Paths.auth.asHr, label: "For Company" },
    ],
    employee: [
      { path: Paths.employee.overView, label: "Overview" },
      { path: Paths.employee.myAssets, label: "My Assets" },
      // { path: "/employee/myTeam", label: "My Team" },
      { path: Paths.employee.requestForAsset, label: "Request for Asset" },
    ],
    admin: [
      { path: Paths.admin.overView, label: "Overview" },
      { path: Paths.admin.assetList, label: "Asset List" },
      { path: Paths.admin.addAsset, label: "Add Asset" },
      { path: Paths.admin.allRequest, label: "All Requests" },
      { path: Paths.admin.employeeList, label: "Employee List" },
      { path: Paths.admin.addEmployee, label: "Add Employee" },
    ],
  };

  // Determine Navigation Menu
  const navItems = useMemo(() => {
    if (!user) return paths.guest;    
    return isAdmin ? paths.admin : paths.employee;
  }, [user, isAdmin]);
  
  if (isPending || isLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2 mt-10">
        <Loader />
      </div>
    );
  }
  console.log(user)
  if (user?.email && checkSignPath.pathname !== `/${role?.toLowerCase()}`) {
    navigate(`/${role?.toLowerCase()}`);
    return <></>;
  }
  return (
    <section className=" ">
      <div className="fixed z-10 w-full ">
        <div
          className={`flex justify-between items-center bg-[#F7FEE7] py-3  px-1 md:px-2 lg:px-4 ${
            pathName === Paths.root
              ? "bg-gradient-to-b [&_.active]:text-white text-white from-slate-900 to-slate-800"
              : "dark:bg-gradient-to-b from-slate-900 to-slate-800"
          }   text-black font-semibold [&_.active]:text-black dark:text-white `}
        >
          {/* Logo & Menu Toggle */}
          <div className=" flex items-center gap-2">
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <X /> : <AlignJustify />}
            </button>
            <Link
              className="flex items-center gap-1"
              to={
                role
                  ? role === "Admin"
                    ? Paths.admin.dashboard
                    : Paths.employee.eHome
                  :Paths.root
              }
            >
              <img
                className="w-14 h-full rounded-xl"
                src="/site-logo.png"
                alt="Logo"
              />
              <p className=" text-xl italic font-semibold">AssetPulse</p>
            </Link>
          </div>

          {/* Mobile Menu */}
          <nav
            className={`absolute lg:hidden w-[70vw] h-[80vh] flex flex-col bg-white dark:bg-[#1F2937]   pt-3  duration-1000 ${
              open ? "left-0 top-12" : "-left-[800px] top-12"
            }`}
            onClick={() => setOpen(false)}
          >
            {navItems?.map(({ path, label }) => (
              <NavLink key={path} className="px-4 py-2" to={path}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-[12px] xl:text-[15px] ">
            <ul className="w-full text-center flex lg:gap-2 xl:gap-4 items-center font-medium uppercase">
              {navItems.map(({ path, label }) => (
                <NavLink
                  key={path}
                  className="px-2 py-1 rounded hover:bg-[#2a3341] hover:text-white hover:duration-500"
                  to={path}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </nav>
          {/* Dark Mode & User Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-400 hover:bg-slate-400 transition-all"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-black" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
              )}
            </button>

            {user?.email ? (
              <>
                <Link to={Paths.profile}>
                  <Avatar>
                    <AvatarImage src={userPhoto} alt={user?.email} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <Button onClick={signOut} variant="dark">
                  Log out
                </Button>
              </>
            ) : (
                <>
              <Link to={Paths.auth.signIn}>
                <Button variant="dark">Log In</Button>
                  </Link>
                  <Link to={'/signUp'}>
                <Button variant="dark">Sign Up</Button>
                </Link>
                </>
                
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
