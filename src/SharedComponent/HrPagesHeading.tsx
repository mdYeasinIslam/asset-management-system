import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";

export default function HrPagesHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex items-center gap-2 pb-2"
    >
      <HiOutlineSparkles className="text-blue-500 w-6 h-6" />
      <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-black to-slate-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
        {title}
      </h1>

      {/* Underline accent */}
      <span className="absolute bottom-0 left-8 w-20 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
    </motion.div>
  );
}
