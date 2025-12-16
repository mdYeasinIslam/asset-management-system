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
    img: "https://i.ibb.co.com/SwGJwRSf/g8azb-X8-XTSjsn0-F16-SJNpz-Pp1-V2cwdx4-PRk9ejr-Ciq-H5-Yse9v-A1.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/84LYx563/JRP-1430-Edit-scaled.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/671JYx5S/Zero-Ash-01.jpg",
  },
  {
    id: 4,
    img: "https://i.ibb.co.com/n8tfQfYG/pexels-photo-8428076-jpeg-cs-srgb-dl-pexels-kampus-8428076.jpg",
  },
  {
    id: 5,
    img: "https://i.ibb.co.com/k2wyjzZy/pen-6238177-640.png",
  },
];
export function CarouselImgForAddAsset() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <Carousel plugins={[plugin.current]}  className="w-full">
      <CarouselContent>
        {imgBox?.map((content, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full">
              <img
                src={content.img}
                alt="side image"
                className={`w-full h-full lg:block brightness-75 hidden  ${
                  index !== 1 && "object-cover"
                }  object-center rounded-md`}
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
