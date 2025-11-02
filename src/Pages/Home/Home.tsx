import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import { Packages } from "./Packages/Packages"
import HowItWorks from "@/SharedComponent/HowItWorks"
import HeroSectionByAI from "@/SharedComponent/home/HeroSectionByAI"
import WhyChooseUsNew from "@/SharedComponent/home/WhyChooseUs-new"
import CTA from "@/SharedComponent/home/CTA-section"
export const Home = () => {
  return (
    <div className="">
      {/* <BannerContent /> */}
      <HeroSectionByAI />
      <About />
      <HowItWorks/>
      <Packages />
      <WhyChooseUsNew/>
      {/* <WhyChoose/> */}
      {/* <WhyCooseUs/> */}
      {/* <Testimonials /> */}
      <CTA/>
      <Footer />
    </div>
  );
}
