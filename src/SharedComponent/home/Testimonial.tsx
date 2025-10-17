
import { useState, useRef, useEffect } from "react";


import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Marie",
    role: "Outdoor Enthusiast",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.png",
  },
  {
    name: "Jason Loped",
    role: "Event Organizer",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.png",
  },
  {
    name: "Priya Kusal",
    role: "Adventure Seeker",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.png",
  },
  {
    name: "Alex Johnson",
    role: "Photographer",
    text: "EventTap introduced me to amazing communities I didn’t know existed nearby!",
    rating: 5,
    image: "/testimonial-img.png",
  },
  {
    name: "Lina Chen",
    role: "Food Blogger",
    text: "I found the best food events through EventTap. It's my go-to app now.",
    rating: 5,
    image: "/testimonial-img.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-color py-16 px-5 xl:px-0">
      <div className="max-w-[1440px] w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2a0901] pt-10 mb-16   font-laila">
          Testimonials
        </h2>
        <div className="relative overflow-hidden">
          <Marquee
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ flex: `0 0 ${100 / visibleItems}%` }}
                className="px-3 h-[380px] md:h-[350px]" // <-- add this class for spacing
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Marquee>

          {/* buttons for move (previous and next) */}
          {/* <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                currentIndex === 0
                  ? "text-gray-300 border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
              aria-label="Previous slide"
            >
              <BiChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                currentIndex >= maxIndex
                  ? "text-gray-300 border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
              aria-label="Next slide"
            >
              <BiChevronRight className="h-4 w-4" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
