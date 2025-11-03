import { useAuth } from "@/hook/useAuth";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa6";

interface IProps {
  className?: string;
}

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

const HeroSectionContact = ({ className }: IProps) => {
  const dark = useAuth();
  return (
    <section className={className}>
      <div className="container  mx-auto">
        <div className="flex justify-center items-center text-center">
          <motion.div
            className="content_wrapper text-center"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[var(--color-primary-900)] dark:text-gray-100 text-4xl xl:text-7xl font-bold md:pl-20 !m-0  ">
              Let’s get in touch
            </h1>
            <div className="flex justify-center items-center rounded-2xl py-8  md:pl-20 ">
              <h2 className="text-xl mb-0 font-bold  text-slate-900 dark:text-white ">
                Connect with us ---------
              </h2>
              <div className="flex justify-center gap-4">
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
          </motion.div>
          {/* <motion.div
            className="col-span-2 hidden lg:block image_wrapper "
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className=" flex  items-end justify-center">
              <div className="w-44 xl:w-60 h-0.5 bg-[#00442A] flex items-center  justify-end gap-0 p-0  "></div>
              <p className="text-[#344054] text-lg w-1/2 ">
                Have questions, need help, or want to collaborate? We're here to
                support you — whether you're a worker, employer, agency, or
                service provider.
              </p>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionContact;
