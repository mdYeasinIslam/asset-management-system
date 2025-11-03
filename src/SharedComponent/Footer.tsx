import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { useAuth } from "@/hook/useAuth";
const paths = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/asEmployee", label: "As Employee" },
  { path: "/asHr", label: "For Company" },
];
const socialMedia = [
  {
    id: 1,
    icon: <BsLinkedin className="h-8 w-8 text-blue-600 dark:text-blue-500" />,
    url: "https://www.linkedin.com/in/mohammad-yeasin-islam",
  },
  {
    id: 2,
    icon: <FaGithub className="h-8 w-8 text-black dark:text-white" />,
    url: "https://github.com/mdYeasinIslam",
  },

  {
    id: 3,
    icon: <FaFacebook className="h-8 w-8 text-blue-600" />,
    url: "https://www.facebook.com/profile.php?id=100011183114419",
  },
];
const Footer = () => {
  const dark = useAuth()
  return (
    <footer className="dark:bg-gradient-to-b from-slate-900  to-slate-900  w-full  text-black dark:text-white py-8 pl-3 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* About Section */}
        <div className="space-y-2">
          <img
            className="w-14 h-14 bg-transparent rounded-xl"
            src="/logo-icon.png"
            alt="Logo"
          />
          <h3 className="text-xl font-semibold mb-4">AssetPulse</h3>
          <p className="text-black dark:text-gray-400 ">
            We are a team dedicated to providing quality services and solutions
            to our clients. Contact us for more information.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {paths.map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path.path}
                  className="text-slate-800 hover:text-black hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {path.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className= "text-slae-800 dark:text-gray-400">Email: hyeasinislam@gamil.com</p>
          <p className= "text-slae-800 dark:text-gray-400">Phone: 01764078605</p>
          <div className="flex md:justify-between lg:justify-start gap-10 lg:gap-5 mt-4">
            {socialMedia?.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                target="_blank"
                className={`${dark ? "" : "bg-white"} p-2 `}
              >
                {icon.icon}
              </a>
            ))}
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
