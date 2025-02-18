import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuth } from "@/hook/useAuth"
import { useIsAdmin } from "@/hook/useIsAdmin"
import { useUsersData } from "@/hook/useUsersData"
import { AlignJustify, Moon, Sun, X } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const {user,signOutAuth,dark,setDark} = useAuth()
  const [open, setOpen] = useState(true)
  const [usersData, isPending] = useUsersData()
  const [isAdmin, , isLoading] = useIsAdmin()
  const role = usersData?.role
  const userPhoto = user?.photoURL as string | undefined

    const navigate = useNavigate()
  const signOut = () => { 
    signOutAuth()
      .then(() => {
        navigate('/');
      toast.success('Your are successfully loged out')
      }).catch((e) => {
        console.log(e)
        toast.error(e.message)
    })
  }
  if (isPending || isLoading) {
    return  <div className=" flex flex-col items-center justify-center gap-1 space-y-5 mt-10">
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
               
          </div>
  }
  return (
   <div className={`fixed z-10 w-full`}>
      <div className={`container mx-auto  md:flex md:justify-between md:items-center py-3  md:px-4  ${dark?'bg-[#1F2937] text-white ':'navbar-light bg-opacity-30 '}`}>
      
        <div className="flex justify-between items-center gap-2 relative"> 
                    {/* menu and nav icon for small device  */}
                     <div className="flex items-center gap-2 pl-1">
                        <div onClick={() => setOpen(!open)} className=" flex md:hidden w-full">
                        {
                        open?<AlignJustify /> : <X />
                        }
                        </div>
                        <div className="w-full">
                          <Link to={`${role !== undefined?`${role=='Admin'? '/hr/hrHome': '/employee/eHome'}`:'/'}`} className='flex items-center gap-2'>
                                        <img className="w-10 rounded-xl" src="/defaultLogo2.png" alt="" />
                                        <p className="font-medium text-xl w-full">AssetPulse</p>
                          </Link>
                        </div>
                       
                    </div>
                    <nav className=" w-full " onClick={()=>setOpen(true)}>
            
                      <ul className={`absolute md:hidden w-[50vw] h-[80vh] flex flex-col  duration-1000 ease-linear bg-white font-medium uppercase text-[0.9rem]   pt-3 ${open?'-left-[400px] top-12':'left-0 top-12'}`}>
                        {
                          !user ?
                          <>
                              <NavLink className='px-2 py-1 rounded' to={'/'}> <li>Home</li></NavLink>
                              <NavLink className='px-2 py-1 rounded' to={'/about'}> <li>About</li></NavLink>
                              <NavLink className='px-2 py-1 rounded' to={'/contact'}> <li>Contact</li></NavLink>
                              <NavLink className='px-2 py-1 rounded' to={'/asEmployee'}> <li>Join as Employee</li></NavLink>
                              <NavLink className='px-2 py-1 rounded' to={'/asHr'}> <li>Join as HR_Manager</li></NavLink>
                            </>
                            :
                            <>
                              {
                                !isAdmin ? 
                                  <>
                                      <NavLink className='px-2 py-1 rounded' to={'/employee/eHome'}> <li>Employee Home</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/employee/myAssets'}> <li>My Assets</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/employee/myTeam'}> <li>My Team</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/employee/requestForAsset'}> <li>Request for an Asset</li></NavLink>
                                    
                                  </>
                                    : 
                        <>
                                       <NavLink className='px-2 py-1 rounded' to={'/hr/hrHome'}> <li>HR Home</li></NavLink>
                                    <NavLink className='px-2 py-1 rounded' to={'/hr/assetList'}> <li>Asset List</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/hr/addAsset'}> <li>Add Asset</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/hr/allRequest'}> <li>All Request</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/hr/employeeList'}> <li>My Employee List</li></NavLink>
                                      <NavLink className='px-2 py-1 rounded' to={'/hr/addEmployee'}> <li>Add Employee </li></NavLink>
                                  </>
                              }
                              
                            </>
                    }
                    </ul>
                    <ul className="flex md:hidden md:gap-4 justify-end  items-center font-medium uppercase text-[0.9rem] pr-2">
                        {
                          user?.email ?
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
                            <Link className='px-2 py-1 rounded-sm' to={'/profile'}>
                              <Avatar>
                                <AvatarImage src={userPhoto} alt={user?.email} />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            </Link>
                            <Button onClick={signOut} variant="dark">Log out</Button>
                            </>
                            :
                            <>
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
                              <Link className="rounded-full" to={'/signIn'}><Button className=" " variant='dark' >Log In</Button></Link>
                           </>
                        }
                      </ul>
                    </nav>
          
        </div>
          {/* tablet and larger */}
        <nav className={`hidden md:flex gap-5`}>
          
              <ul className={` flex gap-1 lg:gap-4 justify-end items-center font-medium uppercase text-[0.7rem] md:text-[9px] lg:text-[0.7rem] xl:text-[0.9rem] `}>
                {
                  !user ?
                     <>
                     <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/'}> <li>Home</li></NavLink>
                  <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/about'}> <li>About</li></NavLink>
                   <NavLink className='px-2 py-1 rounded' to={'/contact'}> <li>Contact</li></NavLink>
                      <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/asEmployee'}> <li>Join as Employee</li></NavLink>
                      <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/asHr'}> <li>Join as HR_Manager</li></NavLink>
                    </>
                    :
                <>
                      {
                        user?.email && !isAdmin ? 
                          <>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/employee/eHome'}> <li>Employee Home</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/employee/myAssets'}> <li>My Assets</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/employee/myTeam'}> <li>My Team</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/employee/requestForAsset'}> <li>Request for an Asset</li></NavLink>
                            
                          </>
                            :
                          <>
                            <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/hr/hrHome'}> <li>HR_Home</li></NavLink>
                            <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/hr/assetList'}> <li>Asset List</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/hr/addAsset'}> <li>Add Asset</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/hr/allRequest'}> <li>All Request</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/hr/employeeList'}> <li>My Employee List</li></NavLink>
                              <NavLink className='px-2 md:px-0.5 lg:px-2 py-1 rounded' to={'/hr/addEmployee'}> <li>Add Employee</li></NavLink>
                          </>
                      }
                    </>
                    }
              </ul>
               
              <ul className="flex gap-1 md:gap-1 justify-end items-center font-medium uppercase text-[0.9rem]">
                {
                  user?.email ?
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
                  <Link className='px-2 py-1 rounded-sm' to={'/profile'}>
                      <Avatar>
                        <AvatarImage title={user?.email} src={userPhoto} alt={user?.email} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                  </Link>
                  <Button  onClick={signOut} variant="dark">Log out</Button>
                    </>
                    :
                    <>
                     <button
                        onClick={() => setDark(!dark)}
                        title={dark?'dark':'light'}
                        className="p-1 rounded-full bg-gray-200 dark:bg-gray-400 hover:bg-slate-400 transition-all"
                      >
                        {dark ? (
                          <Sun className="w-5 h-5 text-black" />
                        ) : (
                          <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
                        )}
                    </button>
                   <NavLink className="rounded-full" to={'/signIn'}><Button className=" " variant='dark' >Log In</Button></NavLink>
                    </>
                }
              </ul>
            </nav>
                 
        </div>
    </div>
  )
}
