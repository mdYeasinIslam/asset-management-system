import { Building2, Clock, Mail, Phone } from "lucide-react";

const addresses = [
  {
    id: 1,
    icon: <Building2 className="h-6 w-6 text-slate-700" />,
    title: "Main Office",
    firstPart: "123 Asset Street, Financial District",
    secontPart: "  Mirpur,Dhaka",
  },
  {
    id: 2,
    icon: <Phone className="h-6 w-6 text-slate-700 " />,
    title: "Phone",
    firstPart: "+888 018726863556",
    secontPart: "+1 (555) 987-6543",
  },
  {
    id: 3,
    icon: <Mail className="h-6 w-6 text-slate-700 " />,
    title: "Email",
    firstPart: "info@assetmanagement.com",
    secontPart: "support@assetmanagement.com",
  },
  {
    id: 4,
    icon: <Clock className="h-6 w-6 text-slate-700" />,
    title: "Business Hours",
    firstPart: "Monday - Friday: 9:00 AM - 6:00 PM",
    secontPart: "Saturday - Sunday: Closed",
  },
];
export default function QuickContact() {
  return (
    <div className="bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900  pb-10 pt-32 lg:pb-20">
      <div className="container mx-auto dark:bg-[#2a3341]   rounded-2xl md:py-20 ">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-[var(--color-primary-900)] dark:text-white uppercase text-center ">
          Quick Contact
        </h2>
        <div className="max-w-5xl xl:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-5  justify-between  items- gap-5">
          {addresses?.map((address) => (
            <div key={address.id} className=" flex flex-col items-start pl-5  border rounded-xl py-3 w-full  h-full">
              <div className="bg-lime-200 p-3  rounded-lg">
                {address.icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                 {address.title}
                </h3>
                <p className="text-lg font-medium dark:text-slate-300">
                 {address.firstPart}
                </p>
                <p className="text-lg font-medium dark:text-slate-300">
                 {address.secontPart}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
