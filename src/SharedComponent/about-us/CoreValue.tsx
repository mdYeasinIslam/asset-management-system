
import { motion } from 'framer-motion'
import { Globe, Heart, Lightbulb, Shield } from 'lucide-react';
const values = [
  {
    icon: Heart,
    title: "Customer Focused",
    description: "We prioritize your needs and success above everything else.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously improving with cutting-edge technology and features.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Trust and stability in every transaction and operation.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Building a better future with eco-friendly practices.",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
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


export default function CoreValue() {
  return (
    <section className="py-24   dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-2">
      {/* Values Section */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-800 text-lg dark:text-slate-300  max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group border-r-2 border-l-2 border-b-2 rounded-b-md p-2"
                whileHover={{ scale: 1.05 ,animationDuration:'1'}}
              >
                <motion.div
                  className="inline-block mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold dark:text-white mb-3 ">
                  {value.title}
                </h3>
                <p className="text-slate-800 dark:text-slate-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
