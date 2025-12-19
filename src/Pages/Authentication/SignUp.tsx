import { useState } from "react";
import { AsHr } from "./AsHr";
import { AsEmployee } from "./AsEmployee";
const Signup = () => {
  const [step, setStep] = useState<"select" | "hr" | "employee">("select");

  if (step === "hr") {
    return <AsHr />;
  }

  if (step === "employee") {
    return <AsEmployee />;
  }

  return (
    <section className="min-h-screen bg-[#FBF9F5] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-semibold text-center mb-10">Sign Up</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* As HR Card */}
          <div
            onClick={() => setStep("hr")}
            className="cursor-pointer border rounded-xl p-8 bg-white hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">As HR / Company</h2>
            <p className="text-gray-600">
              Create an account to manage employees and company assets.
            </p>
          </div>

          {/* As Employee Card */}
          <div
            onClick={() => setStep("employee")}
            className="cursor-pointer border rounded-xl p-8 bg-white hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">As Employee</h2>
            <p className="text-gray-600">
              Join your company and request or track assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
