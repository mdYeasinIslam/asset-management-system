import { FaLock } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineFileUpload, MdOutlineWatchLater } from "react-icons/md";

const features = [
    {
        icon: <IoIosCheckmarkCircle className="w-8 h-8 text-[#0056B3]" />,
        title: "Simple & intuitive application process",
    },
    {
        icon: <FaLock className="w-8 h-8 text-[#41479B]" />,
        title: "Secure data handling",
    },
    {
        icon: <MdOutlineFileUpload className="w-8 h-8 text-[#0056B3]" />,
        title: "Easy to add assets",
    },
    {
        icon: <MdOutlineWatchLater className="w-8 h-8 text-[#0056B3]" />,
        title: "Fast application updates",
    },
];

export default function WhyCooseUs() {
    return (
      <section className="py-16 bg-gray-50 dark:bg-[#2a3341]  ">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-[#0056B3] mb-16 dark:text-white">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 justify-center ">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="md:max-w-[294px] dark:bg-[#2a3341] bg-white rounded-2xl py-7 md:py-10 xl:py-16 px-1 md:px-3 xl:px-1 shadow-md border-x-2 border-b-2 dark:border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-[#E7F5FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl dark:text-white font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
