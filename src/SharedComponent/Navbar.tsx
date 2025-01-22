import { Button } from "@/components/ui/button"
import { useAuth } from "@/hook/useAuth"
import { AlignJustify, X } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  // const user = { email: 'hasan@gmail.com' }
  const {user,signOutAuth} = useAuth()
  const [open, setOpen] = useState(true)
  console.log(user)
  const signOut = () => {
    signOutAuth()
      .then(() => {
      toast.success('Your are successfully loged out')
      }).catch((e) => {
        console.log(e)
        toast.error(e.message)
    })
  }
  return (
   <div className="fixed z-10 w-full  ">
      <div className="container  mx-auto flex justify-between items-center py-3 px-1 md:px-4 navbar-light bg-opacity-30 ">
             
             <div className="flex items-center gap-2 relative">
                  <div onClick={() => setOpen(!open)} className=" flex md:hidden">
                    {
                    open?<AlignJustify /> : <X />
                    }
                    </div>
                    
                  <Link to={'/'} className='flex items-center gap-2'>
                      <img className="w-10 rounded-xl" src="/defaultLogo2.png" alt="" />
                    <span>AssetPulse</span>
                </Link>
          
                      <ul className={`absolute  md:hidden w-[35vh] h-[30vh] flex flex-col gap-2 duration-1000 ease-linear bg-white font-medium uppercase text-[0.9rem] px-5  pt-3 ${open?'-left-[400px] top-14':'left-0 top-14'}`}>
                          <NavLink className='px-2 rounded-sm' to={'/'}> <li>Home</li></NavLink>
                          <NavLink className='px-2 rounded-sm' to={'/asEmployee'}> <li>Join as Employee</li></NavLink>
                          <NavLink className='px-2 rounded-sm' to={'/asHr'}> <li>Join as HR Manager</li></NavLink>
                      </ul>
               </div>
          
            <nav className={`hidden md:flex gap-5`}>
              <ul className={` flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]`}>
                  <NavLink className='px-2 py-1 rounded-sm' to={'/'}> <li>Home</li></NavLink>
                  <NavLink className='px-2 py-1 rounded-sm' to={'/asEmployee'}> <li>Join as Employee</li></NavLink>
                  <NavLink className='px-2 py-1 rounded-sm' to={'/asHr'}> <li>Join as HR Manager</li></NavLink>
              </ul>
               
              <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
                {
                  user?.email ?
                    <>
                  <Button  variant="outline">Log out</Button>
                    </>
                    :
                    <>
                  <NavLink className="rounded-full" to={'/signIn'}><Button>Log In</Button></NavLink>
                    </>
                }
              </ul>
            </nav>
        </div>
    </div>
  )
}
