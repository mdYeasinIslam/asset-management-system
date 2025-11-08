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
    img: "https://i.ibb.co.com/W48BLvVh/sign-up-form-button-graphic-concept-53876-123684.jpg",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/0jH2dFR3/document-management-system-concept-online-600nw-2314112797.jpg",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/M5SHd6QK/user-typing-login-passwordhand-man-use-mobile-phone-log-enter-login-passwordsign-pageuser-profileinf.jpg",
  },
  {
    id: 4,
    img: "https://i.ibb.co.com/n8tfQfYG/pexels-photo-8428076-jpeg-cs-srgb-dl-pexels-kampus-8428076.jpg",
  },
  {
    id: 5,
    img: "https://i.ibb.co.com/7d4SnVd8/cybersecurity-concept-user-typing-login-password-smartphone-data-security-encryption-secure-access-u.jpg",
  },
];
export function CarouselImgForAddAsset() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
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
