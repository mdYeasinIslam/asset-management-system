import HeroSectionContact from "@/SharedComponent/contact-us/HeroSectionContact";
import QuickContact from "@/SharedComponent/contact-us/QuickContact";
import ContactForm from "@/SharedComponent/contact-us/ContactForm";
import MapSection from "@/SharedComponent/contact-us/MapSection";

export default function Contact() {
  return (
    <div className=" px-1 min-h-screen dark:text-white dark:bg-[#2a3341]">
      {/* Hero Section */}
      <HeroSectionContact className="bg-[#F7FEE7] py-20" />
      {/* Main Content */}

      {/* Contact Information */}
      <QuickContact />
      {/* Contact Form */}
      <ContactForm className="bg-[#F7FEE7] py-20" />

      {/* Map Section */}
      <MapSection className="bg-[#F7FEE7] py-20" />
      {/* <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Our Location</h2>
          <div className="aspect-video rounded-lg overflow-hidden relative h-[400px]">
            <img src="/placeholder.svg" alt="Office location map" className="w-full h-full object-cover" />
          </div>
        </div> */}

      {/* Department Cards */}
      {/* <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1f2835] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-200">
              Investment Advisory
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Get expert advice on investment strategies and portfolio
              management
            </p>
            <Button variant="outline" className="w-full">
              Contact Department
            </Button>
          </div>
          <div className="bg-white dark:bg-[#1f2835] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-200">
              Client Relations
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Dedicated support for all your account-related inquiries
            </p>
            <Button variant="outline" className="w-full">
              Contact Department
            </Button>
          </div>
          <div className="bg-white dark:bg-[#1f2835] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-200">
              Technical Support
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              24/7 technical assistance for platform-related issues
            </p>
            <Button variant="outline" className="w-full">
              Contact Department
            </Button>
          </div>
        </div> */}
    </div>
  );
}
