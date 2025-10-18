
import { motion } from "framer-motion";


interface IProps {
  className?: string;
}

const HeroSectionContact = ({ className }: IProps) => {
  return (
    <section className={className}>
      <div className="container  mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          <motion.div
            className="content_wrapper "
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 90, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[var(--color-primary-900)] text-2xl md:text-3xl xl:text-7xl font-bold ">
              Let’s get in touch
            </h1>
          </motion.div>
          <motion.div
            className="col-span-2 image_wrapper "
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="col-span-2 image_wrapper flex items-end justify-center">
              <div className="w-44 h-0.5 bg-[#00442A] flex items-center  justify-end gap-0 p-0 after:content-['>'] after:text-2xl after:ml-1 "></div>
              <p className="text-[#344054] text-lg w-1/2 ">
                Have questions, need help, or want to collaborate? We're here to
                support you — whether you're a worker, employer, agency, or
                service provider.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionContact;
