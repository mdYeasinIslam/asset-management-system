

import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro";
interface IProps {
  className?: string;
}

export default function MapSection({ className }: IProps) {
  const address = [
    { title: "Sydney", address: "123 Sample St, Sydney NSW 2000 AU" },
    { title: "New York", address: "123 Sample St, Sydney NSW 2000 AU" },
    { title: "London", address: "123 Sample St, Sydney NSW 2000 AU" },
  ];
  return (
    <section className={className}>
      <div className="container mx-auto">
        <div>
          <SectionIntro
            titlePrefix="Who We Help"
            title="Built for Everyone in the Hiring Ecosystem"
            className="text-center mb-16 max-w-md xl:max-w-xl mx-auto"
          />
        </div>
        <div className="wrapper max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2  gap-y-10 lg:gap-y-0">
          <div className="   content_wrapper  ">
            <div className=" flex flex-col gap-8 xl:gap-12">
              {address?.map((add, idx) => {
                return (
                  <div
                    key={idx}
                    className={`pl-3 md:pl-8 ${
                      idx == 0 && "border-l-2 border-[#9AE600]"
                    } space-y-2 md:space-y-3 xl:space-y-4`}
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-[#00442A]">
                      {add.title}
                    </h3>
                    <p className="text-sm md:text-lg text-[#344054] ">
                      {add.address}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* image section */}
          <motion.div
            className="w-full h-full image_wrapper  "
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <img
              src="/images/contact/mapImage.png"
              alt="Our Purpose"
              className="w-full h-full rounded-lg object-cover"
            /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903479731521!2d90.39149577509977!3d23.750876288751844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8952b7b46e9%3A0xb58e6572f4c7f1c7!2sDhaka!5e0!3m2!1sen!2sbd!4v1697986804285!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              lang=""
              style={{ border: 0 ,objectFit:'cover',height:'100%',borderRadius:'10px'}}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
