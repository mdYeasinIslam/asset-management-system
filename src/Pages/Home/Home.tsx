import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import { Packages } from "./Packages/Packages"
import HowItWorks from "@/SharedComponent/HowItWorks"
import HeroSectionByAI from "@/SharedComponent/home/HeroSectionByAI"
import WhyChooseUsNew from "@/SharedComponent/home/WhyChooseUs-new"
import CTA from "@/SharedComponent/home/CTA-section"
// import { useAuth } from "@/hook/useAuth"
// import { useEffect } from "react"
// import toast from "react-hot-toast"
export const Home = () => {
    // const {  signOutAuth } = useAuth();
  // useEffect(() => {
  //    signOut()
  // }, [])
  //  const signOut = async () => {
  //    try {
  //      await signOutAuth();
  //      toast.success("You have successfully logged out");
  //    } catch (e: any) {
  //      console.error(e);
  //      toast.error(e.message);
  //    }
  //  };

  return (
    <div>
      {/* <BannerContent /> */}
      <HeroSectionByAI />
      <About />
      <WhyChooseUsNew />
      <Packages />
      <HowItWorks/>
      
      {/* <WhyChoose/> */}
      {/* <WhyCooseUs/> */}
      {/* <Testimonials /> */}
      <CTA/>
      <Footer />
    </div>
  );
}
