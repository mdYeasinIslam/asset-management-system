import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const user = {email:'hasan@gmail.com'}
  return (
   <div className="fixed z-10 w-full py-3 px-4 bg-gray-800 bg-opacity-30 ">
        <div className=" max-w-7xl mx-auto  container  flex justify-between items-center">
              <div>
            <span className='items-center'>
            <NavLink to={'/'}>
                <span>Taste</span>
                <span>Craft</span>
            </NavLink>
            </span>
        </div>
      <nav>
        <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
            <NavLink to={'/home'}> <li>Home</li></NavLink>
            <NavLink to={'/menu'}> <li>Join as Employee</li></NavLink>
            <NavLink to={'/shop'}> <li>Join as HR Manager</li></NavLink>
            <NavLink to={'/about'}> <li>About us</li></NavLink>
        </ul>
        </nav>
        <nav>  
        <ul className="flex gap-4 justify-end items-center font-medium uppercase text-[0.9rem]">
           {/* <NavLink to={`/userDashboard/${isAdmin ? 'adminhome' : 'userhome'}`}>
              <IconButton aria-label="cart" sx={{color:'white'}}>
                <StyledBadge badgeContent={cartData?.length>0 ?cartData?.length :"0"} color="secondary" >
                  <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
          </NavLink> */}
          {
            !user?.email ?
              <>
             {/* <Button onClick={signOut} sx={{color:'white',fontWeight:'bold'}} variant="outlined">Log out</Button> */}
             <Button  variant="outline">Log out</Button>
              </>
              :
              <>
            <NavLink to={'/signIn'}><Button variant="outline">Log In</Button></NavLink>
            <NavLink to={'/signUp'}><Button variant="outline">Register</Button></NavLink>
              </>
          }
        </ul>
      </nav>
        </div>
    </div>
  )
}
