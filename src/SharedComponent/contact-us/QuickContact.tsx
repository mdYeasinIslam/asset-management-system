import { Building2, Clock, Mail, Phone } from 'lucide-react';


export default function QuickContact() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto dark:bg-[#2a3341]   rounded-2xl md:py-20 ">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-[var(--color-primary-900)] dark:text-white uppercase text-center ">
         Quick Contact
        </h2>
        <div className="max-w-5xl xl:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-5  justify-between  items- gap-5">
          <div className=" flex flex-col items-start pl-5  border rounded-xl py-3 w-full  h-full">
            <div className="bg-lime-200 p-3  rounded-lg">
              <Building2 className="h-6 w-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                Main Office
              </h3>
              <p className="text-lg font-medium dark:text-slate-300">
                123 Asset Street, Financial District
              </p>
              <p className="text-lg font-medium dark:text-slate-300">
                Mirpur,Dhaka
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-start pl-5 border rounded-xl py-3 w-full  h-full">
            <div className="bg-lime-200   p-3 rounded-lg">
              <Phone className="h-6 w-6 text-slate-700 " />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                Phone
              </h3>
              <p className="text-lg font-medium  dark:text-slate-300">
                +888 018726863556
              </p>
              <p className="text-lg font-medium dark:text-slate-300">
                +1 (555) 987-6543
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-start pl-5  border rounded-xl py-3 w-full  h-full">
            <div className="bg-lime-200 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-slate-700 " />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                Email
              </h3>
              <p className="text-lg font-medium dark:text-slate-300">
                info@assetmanagement.com
              </p>
              <p className="text-lg font-medium dark:text-slate-300">
                support@assetmanagement.com
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-start pl-5   border rounded-xl py-3 w-full  h-full">
            <div className="bg-lime-200 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                Business Hours
              </h3>
              <p className="text-lg font-medium dark:text-slate-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-lg font-medium dark:text-slate-300">
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
