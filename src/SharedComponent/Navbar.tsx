import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    const user = {email:'hasan@gmail.com'}
  return (
   <div className="fixed z-10 w-full py-3 px-4 navbar-light bg-opacity-30 ">
        <div className="container  mx-auto flex justify-between items-center">
            <div>
                  <Link to={'/'} className='flex items-center gap-2'>
                      <img className="w-10 rounded-xl" src="/defaultLogo2.png" alt="" />
                    <span>AssetPulse</span>
                </Link>
            </div>
      <nav>
        <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
            <NavLink className='px-2 py-1 rounded-sm' to={'/'}> <li>Home</li></NavLink>
            <NavLink className='px-2 py-1 rounded-sm' to={'/asEmployee'}> <li>Join as Employee</li></NavLink>
            <NavLink className='px-2 py-1 rounded-sm' to={'/asHr'}> <li>Join as HR Manager</li></NavLink>
            <NavLink className='px-2 py-1 rounded-sm' to={'/about'}> <li>About us</li></NavLink>
        </ul>
        </nav>
        <nav>  
        <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
          {
            !user?.email ?
              <>
             <Button  variant="outline">Log out</Button>
              </>
              :
              <>
            <NavLink to={'/signIn'}><Button variant="outline" className="">Log In</Button></NavLink>
              </>
          }
        </ul>
      </nav>
        </div>
    </div>
  )
}
