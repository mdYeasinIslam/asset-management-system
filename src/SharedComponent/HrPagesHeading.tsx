import { motion } from "framer-motion";

export default function HrPagesHeading({
  title,
  icon,
}: {
  title: string;
  icon: JSX.Element;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex items-center gap-2 pb-2 px-5 lg:px-0"
    >
      {icon}
      <h1 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-black to-slate-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
        {title}
      </h1>

      {/* Underline accent */}
      {/* <span className="absolute bottom-0 left-8 w-20 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span> */}
    </motion.div>
  );
}
