"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoNotifications } from "react-icons/io5";
import SectionHeader from "@/SharedComponent/dashboard/SectionHeader";

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
}

const notices: Notice[] = [
  {
    id: 1,
    title: "Office Holiday Announcement",
    description:
      "Our office will remain closed on January 30, 2025, in observance of International Workers' Day.",
    date: "2025-01-27",
  },
  {
    id: 2,
    title: "System Maintenance",
    description:
      "Scheduled maintenance will occur on January 31, 2025, from 12:00 AM to 6:00 AM. Expect intermittent downtime.",
    date: "2025-01-25",
  },
  {
    id: 3,
    title: "New Employee Onboarding",
    description:
      "The onboarding session for new employees will be held on February 3, 2025, at the main conference room.",
    date: "2025-01-23",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const NoticeSection: React.FC = () => {
  return (
    <motion.div
      className="bg-white dark:bg-slate-700 p-5 rounded-lg space-y-5 shadow-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SectionHeader
        title="Notices for this month"
        icon={<IoNotifications className="w-5 h-5 text-blue-500" />}
      />

      {notices.length === 0 ? (
        <motion.p
          className="text-gray-600 dark:text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          No notices to display.
        </motion.p>
      ) : (
        <motion.ul
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {notices.map((notice) => (
            <motion.li
              key={notice.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-800 transition-transform"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {notice.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {notice.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Posted on: {new Date(notice.date).toLocaleDateString()}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default NoticeSection;
