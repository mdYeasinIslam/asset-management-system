import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  const path = useLocation()
  console.log(path.pathname)
  if (
    path?.pathname === "/asEmployee" ||
    path?.pathname === "/asHr" ||
    path?.pathname === "/signIn"
  ) {
    return;
  }
  return (
    <footer className="bg-gray-900 w-full  text-white py-8 pl-3 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a team dedicated to providing quality services and solutions
            to our clients. Contact us for more information.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/asEmployee" className="text-gray-400 hover:text-white">
                As Employee
              </Link>
            </li>
            <li>
              <Link to="/asHr" className="text-gray-400 hover:text-white">
                As Hr
              </Link>
            </li>
            <li>
              <Link to="/signIn" className="text-gray-400 hover:text-white">
                Sign in
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Email: hyeasinislam@gamil.com</p>
          <p className="text-gray-400">Phone: 01764078605</p>
          <div className="flex md:justify-between lg:justify-start gap-10 lg:gap-5 mt-4">
            <a
              href="https://www.facebook.com/mohammad.yeasin.895788/"
              className="flex items-center gap-1 text-gray-400 hover:text-white"
            >
              <FaSquareFacebook className="w-10 h-10 "/>
            </a>
            <a
              href="https://github.com/mdYeasinIslam"
              className="flex items-center gap-1 text-gray-400 hover:text-white"
            >
              <FaGithub className="w-10 h-10 "/>
            
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-yeasin-islam"
              className="flex items-center gap-1 text-gray-400 hover:text-white"
            >
              <FaLinkedin className="w-10 h-10 "/>
              
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
