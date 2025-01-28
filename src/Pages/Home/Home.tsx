import Footer from "@/SharedComponent/Footer"
import About from "./About/About"
import SwiperBanner from "./Banner/SwiperBanner"
import { Packages } from "./Packages/Packages"

export const Home = () => {
  return (
    <div className="container mx-auto">
      <SwiperBanner />
      <About />
      <Packages />
      <Footer/>
    </div>
  )
}
