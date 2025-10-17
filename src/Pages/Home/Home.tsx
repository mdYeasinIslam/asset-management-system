import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import { Packages } from "./Packages/Packages"
import BannerContent from "./Banner/BannerContent"
import HowItWorks from "@/SharedComponent/HowItWorks"
import WhyChoose from "@/SharedComponent/home/WhyChoose"
import Testimonials from "@/SharedComponent/home/Testimonial"
export const Home = () => {
  return (
    <div className="">
      <BannerContent />
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
