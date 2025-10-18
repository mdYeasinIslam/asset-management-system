import { Building2, Clock, Mail, Phone } from 'lucide-react';

export default function QuickContact() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-[#2a3341]   rounded-2xl md:p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase">
          Get in Touch
        </h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-1 items-center space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-slate-100 p-3 rounded-lg">
              <Building2 className="h-6 w-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Main Office
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                123 Asset Street, Financial District
              </p>
              <p className="text-slate-600 dark:text-slate-300">Mirpur,Dhaka</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-slate-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-slate-700 " />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Phone
              </h3>
              <p className="text-slate-600  dark:text-slate-300">
                +888 018726863556
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                +1 (555) 987-6543
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-slate-100 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-slate-700 " />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                info@assetmanagement.com
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                support@assetmanagement.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-slate-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Business Hours
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      {/* <div className="bg-white dark:bg-[#1f2835] rounded-2xl py-8 px-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase">
                Connect With Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mohammad-yeasin-islam/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://x.com/hyeasinislam" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100011183114419"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div> */}
    </div>
  );
}
