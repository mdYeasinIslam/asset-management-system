import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import { Packages } from "./Packages/Packages"
import BannerContent from "./Banner/BannerContent"
import WhyCooseUs from "@/SharedComponent/WhyCooseUs"
import HowItWorks from "@/SharedComponent/HowItWorks"
import WhyChoose from "@/SharedComponent/home/WhyChoose"
export const Home = () => {
  return (
    <div className="">
      <BannerContent />
      <About />
      <HowItWorks/>
      <Packages />
      <WhyChoose/>
      <WhyCooseUs/>
      <Footer />
    </div>
  );
}
