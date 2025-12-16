import Paths from "@/base/constant/Paths";
import { useAuth } from "@/hook/useAuth";
import { PackageType } from "@/Type/packageType";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
interface PropType {
    plan: PackageType
    idx?:number
}
export default function PackageCard({ plan }: PropType) {
    const { dark } = useAuth();
  const [activeCard] = useState(2);
  const { id, title, shortDescription, price, services, buttonText } = plan;
  return (
    <div
      className={`text-start rounded-xl p-2 xl:p-5 space-y-8  ${
        activeCard == id &&
        "border-4 border-[var(--color-primary-500)] dark:border-blue-800"
      }`}
    >
      <header className="space-y-4">
        {/* card header */}
        <div className="space-y-0.5">
          <h1
            className={`text-xl md:text-2xl lg:text-3xl font-semibold ${
              activeCard == id
                ? "text-[var(--color-primary-500)] dark:text-sky-500"
                : `${dark ? "text-white" : " text-[#101828]"}`
            } ${id == 3 && "text-[var(--color-primary-900)]"}`}
          >
            {title}
          </h1>
          <p className={`${dark ? "text-white " : "text-[#525252]"}`}>
            {shortDescription}
          </p>
        </div>
        {/* plan type or price */}
        <p
          className={`text-5xl lg:text-6xl font-medium ${
            activeCard == id
              ? "text-[var(--color-primary-500)] dark:text-sky-500"
              : `${dark ? "text-white" : " text-[#101828]"}`
          } ${id == 3 && "text-[var(--color-primary-900)]"}`}
        >
          {price == "FREE" ? "FREE" : `$${price}`}
        </p>
      </header>
      <div className="space-y-10">
        <Link
          to={Paths.auth.signIn}
          className={`block border-2  py-2 lg:py-4 rounded-xl text-center text-lg font-medium  cursor-pointer hover:scale-105 duration-500 ${
            activeCard == id
              ? "border-none  bg-black dark:bg-sky-300 dark:text-black text-white"
              : `border-[var(--color-primary-500)] dark:border-sky-500 ${
                  dark ? "text-white" : " text-[var(--color-primary-900)] "
                }`
          }`}
        >
          <button>{buttonText}</button>
        </Link>
        <ul className=" space-y-1 flex flex-col lg:gap-3.5">
          {services?.map((service, idx) => (
            <li
              key={idx}
              className="flex lg:items-center gap-0.5 lg:gap-1.5 text-[#262626] text-sm"
            >
              <IoMdCheckmark className="text-xl" />
              <span className={`text-start ${dark ? "text-white" : ""}`}>
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
