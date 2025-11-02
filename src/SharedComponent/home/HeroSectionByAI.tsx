import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description: "Monitor all assets with live analytics and dashboards",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance standards",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Go live in minutes, not months",
  },
  {
    icon: TrendingUp,
    title: "ROI Optimization",
    description: "Increase efficiency by up to 40%",
  },
];

export default function HeroSectionByAI() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <section className="relative  
     z-0  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-20">
      <div className="container mx-auto px-6">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              y: [100, 0, 100],
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[url(/images/Banner/banner1.jpg)] opacity-30 pointer-events-none bg-no-repeat bg-cover bg-center" />

        {/* Content */}
        <div className="container mx-auto 2xl:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge : trusted by 10,000+ */}
              <motion.div
                className="inline-block"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 backdrop-blur-sm relative top-3">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <span className="text-sm font-semibold text-blue-300">
                    Trusted by 10,000+ Companies
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Manage Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Assets Intelligently
                  </span>
                </h1>

                <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                  Control, track, and optimize your assets in real-time. Make
                  smarter decisions with advanced analytics, automated
                  workflows, and AI-powered insights.
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-400 text-xs">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-blue-500/30 text-white rounded-lg font-bold text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center space-x-6 pt-8 border-t border-slate-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-300">
                    No credit card required
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-300">
                    14-day free access
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-300">Cancel anytime</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Image with Motion Effects */}
            <motion.div
              className="hidden relative  lg:flex  justify-center"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Floating Cards Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Card 1 - Top Left */}
                {/* <motion.div
                  className=" absolute  w-64 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: "1%",
                    left: "-10%",
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-xs font-semibold text-blue-300">
                      Active Assets
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    24,583
                  </div>
                  <div className="text-xs text-slate-300">+2.5% this week</div>
                </motion.div> */}

                {/* Card 2 - Top Right */}
                <motion.div
                  className="absolute w-64 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{
                    top: "5%",
                    right: "-5%",
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <span className="text-xs font-semibold text-purple-300">
                      Utilization Rate
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    94.2%
                  </div>
                  <div className="text-xs text-slate-300">
                    +5.1% from last month
                  </div>
                </motion.div>

                {/* Card 3 - Bottom Left */}
                <motion.div
                  className="absolute w-64 h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{
                    bottom: "6%",
                    left: "5%",
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full" />
                    <span className="text-xs font-semibold text-green-300">
                      Cost Savings
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    $428K
                  </div>
                  <div className="text-xs text-slate-300">YTD optimization</div>
                </motion.div>

                {/* Central Dashboard Image */}
                <motion.div
                  className="relative z-20 w-full max-w-md mx-auto"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="relative"
                    style={{
                      transformPerspective: 1000,
                      rotateX:
                        mousePosition.y > 0.5
                          ? (mousePosition.y - 0.5) * 10
                          : (mousePosition.y - 0.5) * 10,
                      rotateY: (mousePosition.x - 0.5) * 10,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                      <img
                        src="/images/Banner/banner1.jpg"
                        alt="Asset Management Dashboard"
                        className="w-full h-auto relative z-10"
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />

                      {/* Scan Line Animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
                        animate={{
                          top: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        style={{ height: "10%" }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: "10%",
                    left: "-5%",
                  }}
                >
                  <BarChart3 className="w-7 h-7 text-white" />
                </motion.div>

                <motion.div
                  className="absolute w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 30, 0],
                    rotate: [360, 0, 360],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    bottom: "15%",
                    right: "-5%",
                  }}
                >
                  <TrendingUp className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Decorative Gradient Orb */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 filter blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
