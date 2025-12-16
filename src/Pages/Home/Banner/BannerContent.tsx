/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion"; 
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "./swiperStyle.css";
import Paths from "@/base/constant/Paths";
 
const BannerContent = () => {
     const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

    return (
      <section className="bg-[#F9FAFB] dark:bg-[#111827] dark:text-white">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000, // Set a reasonable delay time
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <article className="relative h-full w-full flex flex-col justify-center items-center text-center gap-5">
              <img
                className="absolute inset-0 z-[-1] w-full h-full object-cover brightness-[40%]"
                src="/images/Banner/banner1.jpg"
                // src="https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg"
                alt="Asset Management"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl xl:text-5xl font-medium leading-tight text-white uppercase"
              >
                Effortless Asset Management <br />{" "}
                <motion.span animate={{ color: ["#3c65f5"] }}>
                  at Your Fingertips.
                </motion.span>
              </motion.h1>
              <p className="xl:w-4/5 md:text-xl text-white">
                Streamline your asset tracking and management process with ease.
                Monitor, organize, and optimize all your assets in one intuitive
                platform.
              </p>
              <Link to={Paths.auth.asHr}>
                <Button className="w-full md:w-auto text-xl" variant="banner">
                  Join as HR Manager
                </Button>
              </Link>
            </article>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <article className="relative h-full w-full flex flex-col justify-center items-center text-center gap-5">
              <img
                className="absolute inset-0 z-[-1] w-full h-full object-cover brightness-[40%]"
                src="/images/Banner/banner2.jpg"
                alt="Simplify Asset Management"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" text-2xl md:text-3xl xl:text-5xl font-medium leading-tight text-white uppercase "
              >
                Simplify Asset Management Today <br />{" "}
                <motion.span animate={{ color: ["#3c65f5"] }}>
                  Empower Your Strategy.
                </motion.span>
              </motion.h1>
              <p className="xl:w-4/5 md:text-xl text-white">
                Take control of your assets with our user-friendly platform.
                Track, manage, and analyze your resources effortlessly.
              </p>
              <Link to={Paths.auth.asEmployee}>
                <Button className="w-full md:w-auto text-xl" variant="banner">
                  Join as Employee
                </Button>
              </Link>
            </article>
          </SwiperSlide>

          {/* Autoplay Progress Indicator */}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </section>
    );
};

export default BannerContent;
