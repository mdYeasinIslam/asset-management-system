import { motion } from 'framer-motion'
import { BarChart3, Lightbulb, Target } from 'lucide-react'

export default function MissionVission() {
  return (
    <section className="py-24 dark:bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Mission & Vision Section */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-8">
              Our Mission & Vision
            </h2>

            <div className="space-y-8">
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">
                    Mission
                  </h3>
                  <p className="text-slate-900 dark:text-slate-300 leading-relaxed">
                    To empower organizations worldwide with intelligent asset
                    management solutions that drive operational efficiency,
                    reduce costs, and enable data-driven decision-making.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">
                    Vision
                  </h3>
                  <p className="text-slate-900 dark:text-slate-300 leading-relaxed">
                    To become the global leader in asset management innovation,
                    connecting millions of users and managing billions of assets
                    with unprecedented efficiency and transparency.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-800  dark:from-blue-500 dark:to-purple-500 rounded-3xl opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <div className="relative dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
              <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center border border-slate-600">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <BarChart3 className="w-24 h-24 text-blue-900 dark:text-blue-400/30" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
