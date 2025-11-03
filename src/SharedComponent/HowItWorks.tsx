import { FileText, CreditCard } from "lucide-react";
import { FaRegQuestionCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegQuestionCircle className="w-8 h-8 text-orange-600" />,
    bg: "bg-orange-100", 
    title: "Join as per your position",
    desc: "Create account according to your purpose.",
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-100",
    title: "Choose a package",
    desc: "Get your package as per your need.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-green-600" />,
    bg: "bg-green-100",
    title: "Confirm & Pay",
    desc: "Submit the form and follow offline payment instructions via bank or Cashplus.",
  },
];

export default function HowItWorks() {
    return (
      <section className="py-16 px-4 bg-white dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 ">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center dark:text-white text-blue-600 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white  dark:bg-slate-900 rounded-2xl py-5 px-1 xl:p-8 shadow-xl  border border-gray-100 text-center"
              >
                <div
                  className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
