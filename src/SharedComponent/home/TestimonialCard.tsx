
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    text: string;
    rating: number;
    image: string;
  };
}) {
  return (
    <div className="relative w-[200px] md:w-[450px]   bg-white bg-[url(/cardBg.png)] bg-no-repeat bg-cover py-14 px-1 md:px-10 rounded-xl shadow-md">
      <div className=" ">
        <img
          src="/images/home/testimonial-coma.png"
          alt="quote"
          className="absolute top-6 right-8 w-10 h-10 object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-[#2a0903]">{testimonial.name}</h3>
      <p className="text-gray-600 mb-4">{testimonial?.role}</p>
      <p className="text-gray-800 mb-6">"{testimonial?.text}"</p>
      <div className="text-[#ff5757] text-right">
        {"★★★★★".slice(0, testimonial.rating)}
      </div>
      <div className="">
        <img
          src={testimonial?.image}
          alt={testimonial?.name}
          className="absolute left-0 md:-bottom-5 lg:-bottom-7 xl:-bottom-8 w-20 h-20 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-24  xl:h-24  rounded-full  object-cover"
        />
      </div>
    </div>
  );
}
