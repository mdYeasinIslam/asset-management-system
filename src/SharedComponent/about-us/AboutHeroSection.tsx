import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface IProps {
  className?: string;
}

const AboutHeroSection = ({ className }: IProps) => {
  return (
    <section className={className}>
      <div className="container  mx-auto px-10">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
          <motion.div
            className="w-full content_wrapper space-y-10"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[var(--color-primary-900)] text-4xl xl:text-7xl font-bold \ ">
              About Our Asset Management
            </h1>
            <p>
              Our platform is designed to simplify asset tracking, improve
              operational efficiency, and provide data-driven insights for
              effective decision-making. Whether you manage physical equipment,
              digital assets, or resources, our system empowers you to gain full
              control and maximize productivity.
            </p>
            <div>
              <Link to={"/signIn"}>
                <button className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Join with us
                </button>
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
              className="w-full h-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
