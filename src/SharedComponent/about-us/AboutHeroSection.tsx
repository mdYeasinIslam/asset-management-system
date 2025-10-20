import { motion } from "framer-motion";
interface IProps {
  className?: string;
}

const AboutHeroSection = ({ className }: IProps) => {
  return (
    <section className={className}>
      <div className="container  mx-auto px-10">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
          <motion.div
            className="w-full content_wrapper "
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[var(--color-primary-900)] text-4xl xl:text-7xl font-bold \ ">
              Let’s get in touch
            </h1>
          </motion.div>
          <motion.div
            className="w-full image_wrapper flex items-center justify-center "
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
              <img  src="/images/about/about.jpg" alt="about image" className="w-full h-full rounded-xl"/>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
