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
                    delay: 60000000,
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
                    <div className="flex flex-col-reverse md:grid  md:grid-cols-2 max-w-7xl mx-auto md:w-[90%]   gap-5">
                        <div className="col-span-1 space-y-7 flex flex-col justify-center">
                            <motion.h1
                                // animate={{ y: [0, 15, 0] }}
                                // transition={{ duration: 3, repeat: Infinity }}

                                className="text-xl md:text-3xl xl:text-5xl font-medium leading-tight">Effortless Asset Management at Your   <motion.span animate={{ color: ['#3c65f5'] }}>Fingertips.</motion.span></motion.h1>
                           
                            <p className=" xl:w-4/5 text-gray-600 text-xl">Streamline your asset tracking and management process with ease. Monitor, organize, and optimize all your assets in one intuitive platform, designed for efficiency and precision.</p>
                            <div>
                           <Link to='/asEmployee'>  <Button className="w-full text-xl">Join as HR_Manager</Button></Link>
                            </div>
                        </div>
                        <div className='h-full'>
                            <figure className="w-1/2 lg:w-2/3">
                                <motion.img
                                    
                                    animate={{ y: [10, 30, 10] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/Banner/hr.jpg" className=" rounded-b-3xl rounded-btl-3xl border-t-8 border-r-8 border-[#3c65f5]" alt="" />
                                <motion.img
                                    animate={{ x: [180, 200, 180] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/Banner/hr2.jpg" className="relative -top-10 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                            </figure>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:grid grid-cols-2 max-w-7xl mx-auto md:w-[90%]   gap-5 ">
                        
                        <div className='h-full'>
                            <figure className="w-1/2 lg:w-2/3">
                                <motion.img
                                    animate={{ y: [10, 30, 10] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/Banner/employee.jpg" className="rounded-t-3xl rounded-br-3xl border-t-8 border-r-8 border-[#3c65f5]" alt="" />
                                <motion.img
                                    animate={{ x: [180, 200, 180] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/Banner/employee2.jpg" className="relative -top-10 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                            </figure>
                        </div>
                        <div className="col-span-1 space-y-7 flex flex-col justify-center">
                            <motion.h1
                                className="text-xl md:text-3xl xl:text-5xl font-medium leading-tight">
                               Simplify Asset Management Today <motion.span animate={{ color: ['#3c65f5'] }}>Empower Your Asset Strategy</motion.span></motion.h1>
                           
                            <p className=" xl:w-4/5 text-gray-600 text-xl">Take control of your assets with our user-friendly platform. Track, manage, and analyze your resources effortlessly to maximize productivity and minimize downtime.</p>
                            <div>
                            <Link to='/asHr'> <Button className="w-full text-xl">Join as Employee</Button></Link>
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