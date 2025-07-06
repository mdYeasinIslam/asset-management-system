import About from "./About/About"
import { Packages } from "./Packages/Packages"
import BannerContent from "./Banner/BannerContent"
import WhyCooseUs from "@/SharedComponent/WhyCooseUs"
import HowItWorks from "@/SharedComponent/HowItWorks"
export const Home = () => {
  return (
    <div className="">
      <BannerContent />
      <About />
      <HowItWorks/>
      <Packages />
      <WhyCooseUs/>
    </div>
  );
}
