
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import { useRef } from "react";
const imgBox = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-123684.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    img: "https://www.shutterstock.com/image-photo/document-management-system-concept-online-600nw-2314112797.jpg",
  },
  {
    id: 3,
    img: "https://img.freepik.com/premium-photo/user-typing-login-passwordhand-man-use-mobile-phone-log-enter-login-passwordsign-pageuser-profileinformation-privacyinternetphoto-cyber-protection-technology-concept_28974-583.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?cs=srgb&dl=pexels-kampus-8428076.jpg&fm=jpg",
  },
  {
    id: 5,
    img: "https://img.freepik.com/premium-photo/cybersecurity-concept-user-typing-login-password-smartphone-data-security-encryption-secure-access-user-personal-data_568137-2778.jpg?semt=ais_hybrid&w=740&q=80",
  },
];
export function CarouselImg() {
   const plugin = useRef(
     Autoplay({ delay: 2000, stopOnInteraction: false })
   );
  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {imgBox?.map((content, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={content.img}
                alt="side image"
                className="w-full brightness-75 hidden lg:flex h-[500px] xl:h-[600px] object-cover object-center rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
