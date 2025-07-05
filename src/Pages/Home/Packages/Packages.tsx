import { useAuth } from "@/hook/useAuth";
import { DisplayPackege } from "./DisplayPackege";
  const packages = [
    {
      id: 1,
      title: "Maximum 5 Employees",
      price: "$5",
      description: "Ideal for small teams to manage and track their assets effectively.",
    },
    {
      id: 2,
      title: "Maximum 10 Employees",
      price: "$8",
      description: "Perfect for growing teams with moderate asset management needs.",
    },
    {
      id: 3,
      title: "Maximum 20 Employees",
      price: "$15",
      description: "Designed for larger teams requiring advanced asset tracking tools.",
    },
  ];
export const Packages = () => {
  const {dark} = useAuth()

  return (
    <section className={`py-16 px-6 md:px-12 lg:px-20 ${dark ?'bg-[#2a3341] text-white':'bg-gray-100'}`}>
      <div className="container mx-auto text-center">
            <h2 className={`text-3xl lg:text-4xl font-bold text-gray-800 mb-8 dark:text-white`}>
            Choose the Perfect Package for Your Team
            </h2>
            <p className="text-gray-600 dark:text-white text-lg mb-12">
            Select a package that best suits the size of your team and start optimizing your asset management today.
                </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages?.map((pkg) => <DisplayPackege key={pkg.id} pkg={pkg} /> )}
              </div>
      </div>
          
    </section>
  )
}
