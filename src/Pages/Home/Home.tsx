import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import { Packages } from "./Packages/Packages"
import HowItWorks from "@/SharedComponent/HowItWorks"
import WhyChoose from "@/SharedComponent/home/WhyChoose"
import Testimonials from "@/SharedComponent/home/Testimonial"
import HeroSectionByAI from "@/SharedComponent/home/HeroSectionByAI"
export const Home = () => {
  return (
    <div className="">
      {/* <BannerContent /> */}
      <HeroSectionByAI />
      <About />
      <HowItWorks/>
      <Packages />
      <WhyChoose/>
      {/* <WhyCooseUs/> */}
      <Testimonials/>
      <Footer />
    </div>
  );
}
