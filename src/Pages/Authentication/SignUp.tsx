import { useState, useEffect } from "react";
import { AsHr } from "./AsHr";
import { AsEmployee } from "./AsEmployee";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [step, setStep] = useState<"select" | "hr" | "employee">("select");

  // Initialize step from URL query parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roleParam = params.get("role");
    if (roleParam === "hr" || roleParam === "employee") {
      setStep(roleParam);
    }
  }, []);

  // Update URL when step changes
  const handleSignUpSteps = (newStep: "select" | "hr" | "employee") => {
    setStep(newStep);
    if (newStep === "select") {
      window.history.pushState({}, "", window.location.pathname);
    } else {
      window.history.pushState(
        {},
        "",
        `${window.location.pathname}?role=${newStep}`,
      );
    }
  };

  const handleBack = () => {
    handleSignUpSteps("select");
    console.log(window.location.pathname);
  };

  if (step === "hr") {
    return (
      <div className="relative">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <AsHr />
      </div>
    );
  }

  if (step === "employee") {
    return (
      <div className="relative">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <AsEmployee />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#FBF9F5] flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        <div>
          <Link
            to={"/"}
            className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
          <div className="text-center mb-4 md:mb-12">
            <h1 className="text-4xl font-semibold md:mb-3">Sign Up</h1>
            <p className="text-gray-600 text-lg">
              Choose your role to get started
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {[
            {
              role: "hr" as const,
              title: "As HR / Company",
              desc: "Create an account to manage employees and company assets.",
            },
            {
              role: "employee" as const,
              title: "As Employee",
              desc: "Join your company and request or track assets.",
            },
          ]?.map(({ role, title, desc }) => (
            <div
              key={role}
              onClick={() => handleSignUpSteps(role)}
              className="flex flex-col justify-between border-2 border-blue-200 rounded-xl  bg-white hover:shadow-lg max-md:border-blue-500 hover:border-blue-500 transition duration-300 cursor-pointer p-4 md:p-8"
            >
              <div className="w-12 h-auto rounded-lg flex md:items-center mb-2 md:mb-4">
                <ChevronRight className={`w-6 h-6 text-blue-600`} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-1 lg:mb-3">{title}</h2>
                <p className="text-gray-600 mb-2 lg:mb-4">{desc}</p>
              </div>
              <button
                className={`flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition`}
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signup;
