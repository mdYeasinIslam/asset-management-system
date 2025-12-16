import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hook/useAuth";
import { useIsAdmin } from "@/hook/useIsAdmin";
import { useUsersData } from "@/hook/useUsersData";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Paths from "@/base/constant/Paths";

export const Navbar = () => {
  const { user, signOutAuth, dark, setDark } = useAuth();
  const [open, setOpen] = useState(true);
  const [usersData, isPending] = useUsersData();
  const [isAdmin, , isLoading] = useIsAdmin();
  const role = usersData?.role;
  const userPhoto = user?.photoURL as string | undefined;
  console.log(isAdmin, isPending, role);
  const navigate = useNavigate();
  const signOut = () => {
    signOutAuth()
      .then(() => {
        navigate(Paths.root);
        toast.success("Your are successfully logged out");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  if (isPending || isLoading) {
    return <Loader/>
  }
  return (
    <div className={`fixed z-10 w-full`}>
      <div
        className={`container mx-auto  md:flex md:justify-between md:items-center py-3  md:px-4  ${
          dark ? "bg-[#1F2937] text-white " : "navbar-light bg-opacity-30"
        }`}
      >
        <div className="flex justify-between items-center gap-2 relative">
          {/* menu and nav icon for small device  */}
          <div className="flex items-center gap-2 pl-1">
            <div
              onClick={() => setOpen(!open)}
              className=" flex md:hidden w-full"
            >
              {open ? <AlignJustify /> : <X />}
            </div>
            <div className="w-full">
              <Link
                to={`${
                  role !== undefined
                    ? `${
                        role == "Admin"
                          ? Paths.admin.dashboard
                          : Paths.employee.eHome
                      }`
                    : Paths.root
                }`}
                className="flex items-center gap-2"
              >
                <img className="w-10 rounded-xl" src="/logo-icon.png" alt="" />
                <p className="font-medium text-xl w-full">AssetPulse</p>
              </Link>
            </div>
          </div>
          <nav className=" w-full " onClick={() => setOpen(true)}>
            <ul
              className={`absolute md:hidden w-[50vw] h-[80vh] flex flex-col  duration-1000 ease-linear bg-white  font-medium uppercase text-[0.9rem]   pt-3 ${
                open ? "-left-[400px] top-12" : "left-0 top-12"
              }`}
            >
              {!user ? (
                <>
                  <NavLink className="px-2 py-1 rounded" to={Paths.root}>
                    {" "}
                    <li>Home</li>
                  </NavLink>
                  <NavLink
                    className="px-2 py-1 rounded"
                    to={Paths.public.about}
                  >
                    {" "}
                    <li>About</li>
                  </NavLink>
                  <NavLink
                    className="px-2 py-1 rounded"
                    to={Paths.public.contact}
                  >
                    {" "}
                    <li>Contact</li>
                  </NavLink>
                  <NavLink
                    className="px-2 py-1 rounded"
                    to={Paths.auth.asEmployee}
                  >
                    {" "}
                    <li>Join as Employee</li>
                  </NavLink>
                  <NavLink className="px-2 py-1 rounded" to={Paths.auth.asHr}>
                    {" "}
                    <li>Join as HR_Manager</li>
                  </NavLink>
                </>
              ) : (
                <>
                  {!isAdmin ? (
                    <>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.employee.eHome}
                      >
                        {" "}
                        <li>Employee Home</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.employee.myAssets}
                      >
                        {" "}
                        <li>My Assets</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={"/employee/myTeam"}
                      >
                        {" "}
                        <li>My Team</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.employee.requestForAsset}
                      >
                        {" "}
                        <li>Request for an Asset</li>
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={"/admin/hrHome"}
                      >
                        {" "}
                        <li>HR Home</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.admin.assetList}
                      >
                        {" "}
                        <li>Asset List</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.admin.addAsset}
                      >
                        {" "}
                        <li>Add Asset</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.admin.allRequest}
                      >
                        {" "}
                        <li>All Request</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.admin.employeeList}
                      >
                        {" "}
                        <li>My Employee List</li>
                      </NavLink>
                      <NavLink
                        className="px-2 py-1 rounded"
                        to={Paths.admin.addEmployee}
                      >
                        {" "}
                        <li>Add Employee </li>
                      </NavLink>
                    </>
                  )}
                </>
              )}
            </ul>
            <ul className="flex md:hidden md:gap-4 justify-end  items-center font-medium uppercase text-[0.9rem] pr-2">
              {user?.email ? (
                <>
                  <button
                    onClick={() => setDark(!dark)}
                    title="dark"
                    className="p- rounded-full bg-gray-200 dark:bg-gray-400 hover:bg-slate-400 transition-all"
                  >
                    {dark ? (
                      <Sun className="w-5 h-5 text-black" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                    )}
                  </button>
                  <Link className="px-2 py-1 rounded-sm" to={Paths.profile}>
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
                <div className=" flex items-center gap-4">
                  <button
                    onClick={() => setDark(!dark)}
                    className="p- rounded-full bg-gray-200 dark:bg-gray-400 hover:bg-slate-400 transition-all"
                  >
                    {dark ? (
                      <Sun className="w-5 h-5 text-black" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                    )}
                  </button>
                  <Link className="rounded-full" to={Paths.auth.signIn}>
                    <Button className=" " variant="dark">
                      Log In
                    </Button>
                  </Link>
                </div>
              )}
            </ul>
          </nav>
        </div>
        {/* tablet and larger */}
        <nav className={`hidden md:flex gap-5`}>
          <ul
            className={` flex gap-1 lg:gap-4 justify-end items-center font-medium uppercase text-[0.7rem] md:text-[11px] lg:text-[0.7rem] xl:text-[0.9rem] `}
          >
            {!user ? (
              <>
                <NavLink
                  className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                  to={Paths.root}
                >
                  {" "}
                  <li>Home</li>
                </NavLink>
                <NavLink
                  className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                  to={Paths.public.about}
                >
                  {" "}
                  <li>About</li>
                </NavLink>
                <NavLink
                  className="px-2 py-1 rounded"
                  to={Paths.public.contact}
                >
                  {" "}
                  <li>Contact</li>
                </NavLink>
                <NavLink
                  className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                  to={Paths.auth.asEmployee}
                >
                  {" "}
                  <li>Join as Employee</li>
                </NavLink>
                <NavLink
                  className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                  to={Paths.auth.asHr}
                >
                  {" "}
                  <li>Join as HR_Manager</li>
                </NavLink>
              </>
            ) : (
              <>
                {user?.email && !isAdmin ? (
                  <>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.employee.eHome}
                    >
                      {" "}
                      <li>Employee Home</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.employee.myAssets}
                    >
                      {" "}
                      <li>My Assets</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={"/employee/myTeam"}
                    >
                      {" "}
                      <li>My Team</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.employee.requestForAsset}
                    >
                      {" "}
                      <li>Request for an Asset</li>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.admin.dashboard}
                    >
                      {" "}
                      <li>HR_Home</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.admin.assetList}
                    >
                      {" "}
                      <li>Asset List</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.admin.addAsset}
                    >
                      {" "}
                      <li>Add Asset</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.admin.allRequest}
                    >
                      {" "}
                      <li>All Request</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.admin.employeeList}
                    >
                      {" "}
                      <li>My Employee List</li>
                    </NavLink>
                    <NavLink
                      className="px-2 md:px-0.5 lg:px-2 py-1 rounded"
                      to={Paths.admin.addEmployee}
                    >
                      {" "}
                      <li>Add Employee</li>
                    </NavLink>
                  </>
                )}
              </>
            )}
          </ul>

          <ul className="flex gap-1 md:gap-1 justify-end items-center font-medium uppercase text-[0.9rem]">
            {user?.email ? (
              <>
                <button
                  onClick={() => setDark(!dark)}
                  className="p-1 rounded-full bg-gray-200 dark:bg-gray-400 hover:bg-slate-400 transition-all"
                >
                  {dark ? (
                    <Sun className="w-5 h-5 text-black" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                  )}
                </button>
                <Link className="px-2 py-1 rounded-sm" to={Paths.profile}>
                  <Avatar>
                    <AvatarImage
                      title={user?.email}
                      src={userPhoto}
                      alt={user?.email}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <Button onClick={signOut} variant="dark">
                  Log out
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() => setDark(!dark)}
                  title={dark ? "dark" : "light"}
                  className="p-1 rounded-full bg-gray-200 dark:bg-gray-400 hover:bg-slate-400 transition-all"
                >
                  {dark ? (
                    <Sun className="w-5 h-5 text-black" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                  )}
                </button>
                <NavLink className="rounded-full" to={Paths.auth.signIn}>
                  <Button className=" " variant="dark">
                    Log In
                  </Button>
                </NavLink>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
