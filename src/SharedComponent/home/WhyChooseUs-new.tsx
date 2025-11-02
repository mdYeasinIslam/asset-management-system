import {  BarChart3, Shield, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion"; 
const features = [
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    description:
      "Monitor all your assets in real-time with instant updates and precise location data.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description:
      "Get actionable insights with advanced analytics and customizable dashboards.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security with encryption and compliance certifications.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance for seamless operation across all devices.",
    color: "from-yellow-500 to-orange-500",
  },
];
export default function WhyChooseUsNew() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
    
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
    return (
      <section className="bg-white dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="py-24 ">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-slate-800 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                Experience the future of asset management with features designed
                for your success
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    // onMouseEnter={() => setHoveredIndex(index)}
                    // onMouseLeave={() => setHoveredIndex(null)}
                    className="relative group cursor-pointer"
                    whileHover={{ y: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />

                    <div className="relative bg-[#FBF4FB] dark:bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>

                      {/* {hoveredIndex === index && (
                        <motion.div
                          className="mt-4 flex items-center text-blue-400 text-sm font-semibold"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      )} */}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>{" "}
        </div>
      </section>
    );
}
