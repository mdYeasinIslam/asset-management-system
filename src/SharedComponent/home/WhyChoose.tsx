"use client";

import { BiCheckCircle, BiCreditCard } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import {  NavLink } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "Simple & intuitive application process",
    description:
      "A guided, minimal-step application flow with progress saving and helpful validation so you can finish quickly and confidently.",
    icon: IoIosCheckmarkCircle,
    color: "blue",
    stats: "≈ 2 min",
    benefits: [
      "Step-by-step guidance",
      "Progress autosave",
      "Smart pre-filled suggestions",
      "Clear inline validation",
    ],
  },
  {
    id: 2,
    title: "Secure data handling",
    description:
      "Your data is protected with industry-standard encryption, strict access controls and regular security audits to ensure compliance and trust.",
    icon: FaLock,
    color: "green",
    stats: "256-bit SSL",
    benefits: [
      "End-to-end encryption",
      "Role-based access controls",
      "Regular security audits",
      "Compliance with GDPR & PCI-DSS",
    ],
  },
  {
    id: 3,
    title: "Easy to add assets",
    description:
      "Add assets quickly using drag-and-drop, CSV bulk import, or single-item creation with editable metadata and real-time validation.",
    icon: MdOutlineFileUpload,
    color: "blue",
    stats: "Bulk upload",
    benefits: [
      "Drag & drop uploads",
      "CSV / bulk import",
      "Auto-tagging & metadata editor",
      "Upload progress & validation",
    ],
  },
  // {
  //     id: 4,
  //     title: "Fast application updates",
  //     description:
  //         "Real-time updates and notifications keep your asset data up to date across the platform, with version history and scheduled syncs.",
  //     icon: MdOutlineWatchLater,
  //     color: "purple",
  //     stats: "Real-time",
  //     benefits: [
  //         "Instant status updates",
  //         "Push & email notifications",
  //         "Version history & rollback",
  //         "Scheduled sync and automation",
  //     ],
  // },
];

const additionalFeatures = [
  {
    icon: BsClock,
    title: "Quick Processing",
    description: "Orders processed within 2 hours",
  },
  {
    icon: BiCreditCard,
    title: "Flexible Payments",
    description: "Multiple payment methods accepted",
  },
  {
    icon: FaUsers,
    title: "Trusted by Millions",
    description: "Over 1M+ satisfied customers",
  },
];

export default function WhyChoose() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-500",
          bgLight: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200",
          gradient: "from-blue-400 to-blue-600",
        };
      case "green":
        return {
          bg: "bg-green-500",
          bgLight: "bg-green-50",
          text: "text-green-600",
          border: "border-green-200",
          gradient: "from-green-400 to-green-600",
        };
      case "purple":
        return {
          bg: "bg-purple-500",
          bgLight: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200",
          gradient: "from-purple-400 to-purple-600",
        };
      default:
        return {
          bg: "bg-gray-500",
          bgLight: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-200",
          gradient: "from-gray-400 to-gray-600",
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Chosse Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage assets faster with real-time inventory, role-based access,
            and audit-ready reports.
          </p>
        </div>
        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-4 xl:gap-8 mb-16">
          {features.map((feature) => {
            const colors = getColorClasses(feature?.color);
            return (
              <div
                key={feature.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border ${colors.border} hover:scale-105`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${colors.gradient}`}
                ></div>

                <div className="p-8  flex flex-col justify-between h-full">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 ${colors.bgLight} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${colors.text}`}>
                        {feature.stats}
                      </div>
                      <div className="text-sm text-gray-500">Average</div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <BiCheckCircle
                          className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0`}
                        />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button
                    className={`mt-6 w-full py-3 px-4 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Learn More
                  </button>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 ${colors.bgLight} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}
                ></div>
                <div
                  className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.bgLight} rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="flex flex-col lg:flex-row justify-between  gap-5">
          <div className="bg-white rounded-2xl shadow-lg p-8 ">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              More Reasons to Shop With Us
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-8">
              Join millions of satisfied customers who trust ShopStack for their
              shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Create account at first
              </button>
              <NavLink to={"/about"}>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  Learn More About Us
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Customer Testimonial */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <BiStar
                key={i}
                className="w-6 h-6 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl font-medium mb-6 italic">
            "ShopStack has completely transformed my online shopping experience.
            Fast delivery, secure payments, and amazing customer support!"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="/placeholder.svg?height=60&width=60&text=Customer"
              alt="Customer"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="text-left">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-blue-200 text-sm">Verified Customer</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
