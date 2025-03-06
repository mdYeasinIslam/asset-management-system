import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import { Packages } from "./Packages/Packages"
import BannerContent from "./Banner/BannerContent"

export const Home = () => {
  return (
    <div className="container mx-auto">
      <BannerContent/>
      <About />
      <Packages />
      <Footer/>
    </div>
  )
}
