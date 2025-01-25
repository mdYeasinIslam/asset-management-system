/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './swiperStyle.css';

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SwiperBanner = () => {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLDivElement>(null);
    const onAutoplayTimeLeft = (_s: any, time: any, progress: any) => {
        if (progressCircle?.current) {
            progressCircle?.current.style.setProperty('--progress', `${1 - progress}`);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <div className={` bg-[#F9FAFB] dark:bg-[#111827] dark:text-white`}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                   
                    <div className="relative h-full mx-auto w-full  gap-5 ">
                    
                        <img className='absolute z-[-1]  brightness-50  w-[100vh] h-full bg-transparent' src="/images/Banner/banner1.jpg" alt="" />
                    <div className=" mx-auto h-full space-y-7 flex flex-col justify-center items-center text-center px-0  text-white">
                        <motion.h1
                        className="text-2xl md:text-3xl xl:text-5xl font-medium leading-tight text-center ">
                       Effortless Asset Management at Your   <motion.span animate={{ color: ['#3c65f5'] }}>Fingertips.</motion.span>
                        </motion.h1>
                        <p className="xl:w-4/5 text-white md:text-xl text-center  ">
                        Streamline your asset tracking and management process with ease. Monitor, organize, and optimize all your assets in one intuitive platform, designed for efficiency and precision.
                        </p>
                         <div>
                           <Link to='/asHr'>  <Button className="w-full md:text-xl">Join as HR_Manager</Button></Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full max-w-7xl mx-auto w-full  gap-5 md:px-0">
                    
                        <img className='absolute z-[-1]  brightness-50  w-full h-full bg-transparent' src="/images/Banner/banner2.jpg" alt="" />
                    <div className="lg:w-2/3 mx-auto h-full space-y-7 flex flex-col justify-center items-center text-center px-0 text-white  ">
                        <motion.h1
                        className="text-2xl md:text-3xl xl:text-5xl font-medium leading-tight text-center">
                        Simplify Asset Management Today{" "}
                        <motion.span animate={{ color: ["#3c65f5"] }}>
                            Empower Your Asset Strategy
                        </motion.span>
                        </motion.h1>
                        <p className="xl:w-4/5 text-white md:text-xl text-center  ">
                        Take control of your assets with our user-friendly platform. Track, manage, and analyze your resources effortlessly to maximize productivity and minimize downtime.
                        </p>
                        <div className="flex justify-center md:justify-start">
                        <Link to="/asEmployee">
                            <Button className="w-full md:w-auto text-xl">Join as Employee</Button>
                        </Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
export default SwiperBanner