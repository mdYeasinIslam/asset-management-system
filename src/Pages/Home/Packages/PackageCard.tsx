import { PackageType } from "@/Type/packageType";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
interface PropType {
    plan: PackageType
    idx:number
}
export default function PackageCard({ plan, idx }: PropType) {
  const [activeCard, setActiveCard] = useState(2);
  const { id, title, shortDescription, price, services, buttonText } = plan;
  return (
    <div
      className={` rounded-xl p-2 xl:p-5 space-y-8 ${
        activeCard == id && "border-4 border-[var(--color-primary-500)]"
      }`}
    >
      <header className="space-y-4">
        {/* card header */}
        <div className="space-y-0.5">
          <h1
            className={`text-xl md:text-2xl lg:text-3xl font-semibold ${
              activeCard == id
                ? "text-[var(--color-primary-500)]"
                : "text-[#101828] "
            } ${id == 3 && "text-[var(--color-primary-900)]"}`}
          >
            {title}
          </h1>
          <p className="text-[#525252]">{shortDescription}</p>
        </div>
        {/* plan type or price */}
        <p
          className={`text-5xl lg:text-6xl font-medium ${
            activeCard == id
              ? "text-[var(--color-primary-500)]"
              : "text-[#101828]"
          } ${id == 3 && "text-[var(--color-primary-900)]"}`}
        >
          {price == "FREE" ? "FREE" : `$${price}`}
        </p>
      </header>
      <div className="space-y-10">
        <div
          className={`border-2  py-2 lg:py-4 rounded-xl text-center text-lg font-medium  ${
            activeCard == id
              ? "border-none  bg-black text-white"
              : "border-[var(--color-primary-500)] text-[var(--color-primary-900)]"
          }`}
        >
          <button className="">{buttonText}</button>
        </div>
        <ul className=" space-y-1 flex flex-col gap-3.5">
          {services?.map((service, idx) => (
            <li
              key={idx}
              className="flex items-center gap-1.5 text-[#262626] text-sm"
            >
              <IoMdCheckmark className="text-xl" />
              <span className="">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
