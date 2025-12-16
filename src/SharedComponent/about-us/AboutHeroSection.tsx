import Paths from "@/base/constant/Paths";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface IProps {
  className?: string;
}

const AboutHeroSection = ({ className }: IProps) => {
  return (
    <section className={className}>
      <div className="container  mx-auto px-4 md:px-10">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
          <motion.div
            className="w-full content_wrapper space-y-5"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[var(--color-primary-900)] dark:text-sky-500 text-4xl xl:text-7xl font-bold  ">
              About Our Asset Management
            </h1>
            <p className="">
              Our platform is designed to simplify asset tracking, improve
              operational efficiency, and provide data-driven insights for
              effective decision-making.
              {/* Whether you manage physical equipment,
              digital assets, or resources, our system empowers you to gain full
              control and maximize productivity. */}
            </p>
            <div>
              <Link to={Paths.auth.signIn}>
                {/* <button className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Join with us
                </button> */}
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                
                Join with us
              </motion.button>
              </Link>
              
            </div>
          </motion.div>
          <motion.div
            className="w-full image_wrapper flex items-center justify-center "
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/about/about.jpg"
              alt="about image"
              className="w-full h-full rounded-xl brightness-75"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
