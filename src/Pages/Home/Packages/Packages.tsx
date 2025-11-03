import { useAuth } from "@/hook/useAuth";
import { PackageType } from "@/Type/packageType";
import PackageCard from "./PackageCard";

// const packages = [
//   {
//     id: 1,
//     title: "Maximum 5 Employees",
//     price: "$5",
//     description:
//       "Ideal for small teams to manage and track their assets effectively.",
//   },
//   {
//     id: 2,
//     title: "Maximum 10 Employees",
//     price: "$8",
//     description:
//       "Perfect for growing teams with moderate asset management needs.",
//   },
//   {
//     id: 3,
//     title: "Maximum 20 Employees",
//     price: "$15",
//     description:
//       "Designed for larger teams requiring advanced asset tracking tools.",
//   },
// ];
const flexiblePlans: PackageType[] = [
  {
    id: 1,
    title: "Basic",
    shortDescription: "Perfect for individuals or small businesses",
    price: 8.44,
    buttonText: "Get Started",
    services: [
      "Up to 50 Assets",
      "Basic Asset Tracking",
      "Cloud Backup (1 GB)",
      "Email Support",
      "Role-Based Access (1 Admin)",
      "Activity Log (Last 7 Days)",
      "Responsive Dashboard",
      "Data Export (CSV)",
    ],
  },
  {
    id: 2,
    title: "Business",
    shortDescription: "Ideal for growing teams managing multiple assets",
    price: 19.99,
    buttonText: "Start Free Trial",
    services: [
      "Up to 5,000 Assets",
      "Advanced Asset Tracking & Categories",
      "Cloud Backup (10 GB)",
      "Priority Email & Chat Support",
      "Role-Based Access Control (5 Admins)",
      "Audit Trail & Logs (90 Days)",
      "QR / Barcode Asset Tagging",
      "Custom Reports & Dashboards",
      "Third-Party Integration (Slack, Google Sheets)",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    shortDescription: "Best for large organizations with advanced needs",
    price: 99.99,
    buttonText: "Contact Sales",
    services: [
      "Unlimited Assets",
      "Full Asset Lifecycle Management",
      "Cloud Backup (1 TB)",
      "24/7 Priority Support",
      "Unlimited Role-Based Access",
      "Advanced Security & Encryption",
      "API Access & Custom Integration",
      "Real-Time Analytics Dashboard",
      "Dedicated Account Manager",
      "Custom Branding & White Label Option",
    ],
  },
];

export const Packages = () => {
  const { dark } = useAuth();

  return (
    <section
      className={`py-16 px-4  ${
        dark
          ? "bg-[#2a3341] text-white bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto text-center">
        <h2
          className={`text-3xl lg:text-4xl font-bold text-gray-800 mb-8 dark:text-white`}
        >
          Choose the Perfect Package for Your Team
        </h2>
        <p className="text-gray-600 dark:text-white text-lg mb-12">
          Select a package that best suits the size of your team and start
          optimizing your asset management today.
        </p>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 lg:gap-8 border-2 ">
          {/* {packages?.map((pkg) => (
            <DisplayPackege key={pkg.id} pkg={pkg} />
          ))} */}
          {flexiblePlans?.map((plan, idx) => (
            <PackageCard key={plan.id} plan={plan} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
