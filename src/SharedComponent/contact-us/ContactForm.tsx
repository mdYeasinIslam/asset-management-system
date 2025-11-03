import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface IProps {
  className?: string;
}

const ContactForm: React.FC<IProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(`Dear ${formData?.name}, Your message is successfully send`);
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto  px-2 md:px-0">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-5  h-full">
          <div className="w-full  h-full   content_wrapper  ">
            <div className=" bg-white dark:bg-slate-800 p-3 md:p-5 h-full space-y-5 xl:space-y-8 rounded-xl">
              <h1 className="text-[#00442A] dark:text-white text-3xl ">
                Send your message
              </h1>
              <form
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col gap-5"
              >
                <div className="flex  gap-6 ">
                  <div className="w-full space-y-2 ">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 rounded-md border border-black shadow-sm focus:border-black focus:ring-green-700"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="w-full space-y-2 ">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border rounded-md border-black shadow-sm focus:border-black focus:ring-black"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="w-full space-y-2 ">
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring-green-700"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="w-full space-y-2 ">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring-green-700"
                    placeholder="Type your message here..."
                  />
                </div>
                <div>
                  <Button
                    size="submit"
                    className="border-[var(--color-primary-500)]  hover:bg-[var(--color-primary-500)] hover:text-white w-full sm:w-auto  font-semibold cursor-pointer bg-[#00A264] text-white h-12"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
          {/* image section */}
          <motion.div
            className="image_wrapper  lg:px-0 flex items-center "
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/contact/formImg.png"
              alt="Our Purpose"
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
